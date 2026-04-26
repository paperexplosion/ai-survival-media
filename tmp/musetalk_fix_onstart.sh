#!/bin/bash
LOG=/tmp/musetalk_setup.log
exec > >(tee -a $LOG) 2>&1
echo "=== MuseTalk Setup $(date) ==="

# Add SSH key for Claude Code access
mkdir -p /root/.ssh
chmod 700 /root/.ssh
echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJNaJ0AE2Ruw/xkP2hZ1vkQ018xmIENIagK2xB8GA+lf claude-code" >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys
echo "SSH key added"

cd /workspace

# Clone only if not exists
if [ ! -d MuseTalk ]; then
    git clone https://github.com/TMElyralab/MuseTalk.git
fi
cd MuseTalk

# Create venv only if not exists
if [ ! -d muse_env ]; then
    python3 -m venv muse_env
fi
source muse_env/bin/activate
pip install --upgrade pip -q
pip install -r requirements.txt -q
pip install huggingface_hub gradio -q

mkdir -p models/musetalkV15 models/sd-vae models/whisper models/dwpose models/syncnet models/face-parse-bisent

python3 << 'PYEOF'
from huggingface_hub import hf_hub_download
import os, sys

def dl(repo_id, filename, local_dir):
    dest = os.path.join(local_dir, os.path.basename(filename))
    if os.path.exists(dest):
        print(f"  SKIP: {dest}")
        return
    try:
        hf_hub_download(repo_id=repo_id, filename=filename, local_dir=local_dir)
        print(f"  OK: {filename}")
    except Exception as e:
        print(f"  ERROR: {filename}: {e}", file=sys.stderr)

print("Downloading musetalkV15...")
dl("TMElyralab/MuseTalk", "musetalkV15/musetalk.json", "models/")
dl("TMElyralab/MuseTalk", "musetalkV15/unet.pth", "models/")

print("Downloading sd-vae...")
dl("stabilityai/sd-vae-ft-mse", "config.json", "models/sd-vae/")
dl("stabilityai/sd-vae-ft-mse", "diffusion_pytorch_model.bin", "models/sd-vae/")

print("Downloading whisper...")
for f in ["config.json","tokenizer_config.json","vocab.json","merges.txt","normalizer.json","added_tokens.json","special_tokens_map.json","preprocessor_config.json","pytorch_model.bin"]:
    dl("openai/whisper-tiny", f, "models/whisper/")

print("Downloading dwpose...")
dl("yzd-v/DWPose", "dw-ll_ucoco_384.pth", "models/dwpose/")

print("Downloading syncnet...")
dl("chunyu-li/LatentSync", "latentsync_syncnet.pt", "models/syncnet/")
PYEOF

echo "Downloading face-parse-bisent from mirror..."
if [ ! -f models/face-parse-bisent/79999_iter.pth ]; then
    wget -q "https://huggingface.co/afrizalha/musetalk-models/resolve/main/face-parse-bisent/79999_iter.pth" \
         -O models/face-parse-bisent/79999_iter.pth && echo "  OK: 79999_iter.pth"
else
    echo "  SKIP: 79999_iter.pth"
fi
if [ ! -f models/face-parse-bisent/resnet18-5c106cde.pth ]; then
    wget -q "https://download.pytorch.org/models/resnet18-5c106cde.pth" \
         -O models/face-parse-bisent/resnet18-5c106cde.pth && echo "  OK: resnet18"
else
    echo "  SKIP: resnet18"
fi

echo "All models ready. Starting app.py..."
nohup python app.py --share --ip 0.0.0.0 > /tmp/app_log.txt 2>&1 &
echo "app.py PID: $!"
echo "=== Setup complete $(date) ==="
