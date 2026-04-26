#!/bin/bash
LOG=/tmp/musetalk_fix.log
exec > $LOG 2>&1
echo === MuseTalk Fix $(date) ===
cd /workspace/MuseTalk
source muse_env/bin/activate
mkdir -p models/face-parse-bisent
wget -q https://huggingface.co/afrizalha/musetalk-models/resolve/main/face-parse-bisent/79999_iter.pth -O models/face-parse-bisent/79999_iter.pth
echo 79999_iter.pth downloaded
wget -q https://download.pytorch.org/models/resnet18-5c106cde.pth -O models/face-parse-bisent/resnet18-5c106cde.pth
echo resnet18 downloaded
nohup python app.py --share --ip 0.0.0.0 > /tmp/app_log2.txt 2>&1 &
echo PID=$!
