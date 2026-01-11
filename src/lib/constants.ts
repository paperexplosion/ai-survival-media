import { Question, DiagnosticResult, CareerType, AffiliateLink } from '@/types';

export const QUESTIONS: Question[] = [
    {
        id: 'q1',
        text: '新しいAIツールやソフトウェアが登場したとき、あなたの反応は？',
        options: [
            { label: 'すぐに触ってみて、業務への活用法を考える', value: 10, axis: 'tech' },
            { label: '周りの評判を聞いてから、必要なら覚える', value: 5, axis: 'tech' },
            { label: '今のやり方で十分なので、あまり興味はない', value: 1, axis: 'tech' },
        ],
    },
    {
        id: 'q2',
        text: 'プログラミングやノーコードツールを使った経験は？',
        options: [
            { label: '日常的に使っている、または学習中', value: 10, axis: 'tech' },
            { label: '興味はあるが、まだ手をつけていない', value: 5, axis: 'tech' },
            { label: '全くないし、難しそうで避けている', value: 1, axis: 'tech' },
        ],
    },
    {
        id: 'q3',
        text: 'データの分析や数字に基づいた意思決定は得意ですか？',
        options: [
            { label: '得意。データを見るとワクワクする', value: 10, axis: 'tech' },
            { label: '必要ならやるが、直感も大事にしたい', value: 5, axis: 'tech' },
            { label: '数字は苦手。できれば避けたい', value: 1, axis: 'tech' },
        ],
    },
    {
        id: 'q4',
        text: '仕事において「人とのコミュニケーション」が占める割合は？',
        options: [
            { label: '高い。調整や対話が仕事の核心だ', value: 10, axis: 'human' },
            { label: '半々。作業と会話のバランスが取れている', value: 5, axis: 'human' },
            { label: '低い。一人で黙々と作業するのが好き', value: 1, axis: 'human' },
        ],
    },
    {
        id: 'q5',
        text: 'チームの雰囲気が悪いとき、どう動きますか？',
        options: [
            { label: '積極的に声をかけ、関係修復に動く', value: 10, axis: 'human' },
            { label: '自分の振る舞いに気をつける程度', value: 5, axis: 'human' },
            { label: '仕事に関係ないなら放置する', value: 1, axis: 'human' },
        ],
    },
    {
        id: 'q6',
        text: '他人の感情やニーズを察するのは得意ですか？',
        options: [
            { label: '得意。言葉にされない思いも汲み取れる', value: 10, axis: 'human' },
            { label: '普通並みには理解できる', value: 5, axis: 'human' },
            { label: '苦手。はっきり言われないとわからない', value: 1, axis: 'human' },
        ],
    },
    {
        id: 'q7',
        text: '理想の働き方は？',
        options: [
            { label: '場所も時間も自分で自由に決めたい', value: 10, axis: 'autonomy' },
            { label: 'ある程度の裁量は欲しいが、安定も大事', value: 5, axis: 'autonomy' },
            { label: '決まった指示通りに動く方が楽だ', value: 1, axis: 'autonomy' },
        ],
    },
    {
        id: 'q8',
        text: '副業や独立についてどう考えていますか？',
        options: [
            { label: '既にしている、または近々する予定', value: 10, axis: 'autonomy' },
            { label: '興味はあるが、リスクが怖い', value: 5, axis: 'autonomy' },
            { label: '会社員一本が一番良い', value: 1, axis: 'autonomy' },
        ],
    },
    {
        id: 'q9',
        text: '変化の激しい環境に置かれたとき、どう感じますか？',
        options: [
            { label: 'チャンスだと感じて燃える', value: 10, axis: 'autonomy' },
            { label: '不安だが、なんとか適応しようとする', value: 5, axis: 'autonomy' },
            { label: 'ストレスが大きい。変わらないでほしい', value: 1, axis: 'autonomy' },
        ],
    },
];

const COMMON_LINKS: Record<string, AffiliateLink> = {
    chatgpt: { title: 'ChatGPT Plus', url: 'https://openai.com/chatgpt', category: 'TOOL', description: '必須のAIアシスタント。' },
    coursera_ai: { title: 'Coursera AI講座', url: 'https://www.coursera.org/', category: 'COURSE', description: 'スタンフォード大などのAI講座。' },
    upwork: { title: 'Upwork', url: 'https://www.upwork.com/', category: 'RECRUITMENT', description: 'グローバルなフリーランス案件サイト。' },
    udemy_comm: { title: 'Udemy コミュニケーション講座', url: 'https://www.udemy.com/', category: 'COURSE', description: '対人スキルを磨く。' },
    green: { title: 'Green', url: 'https://www.green-japan.com/', category: 'RECRUITMENT', description: 'IT/Web業界への転職。' },
    notion: { title: 'Notion', url: 'https://www.notion.so/', category: 'TOOL', description: '知識管理とタスク管理。' },
};

export const CAREER_TYPES_DATA: Record<CareerType, Omit<DiagnosticResult, 'radarChart' | 'type'>> = {
    AI_MASTER: {
        title: 'AIを顎で使う「デジタル・アルケミスト」',
        description: 'テクノロジーを自在に操り、自律的に価値を創出する未来のリーダー。AIを脅威ではなく「最強のパートナー」として使いこなします。',
        actionPlan: [
            '最新のLLM活用事例を週1回キャッチアップし、業務フローに組み込む。',
            '自身のノウハウをSNSやブログで発信し、パーソナルブランディングを強化。',
            'AIエージェント開発など、より高度な自動化スキルの習得。',
        ],
        recommendations: [COMMON_LINKS.chatgpt, COMMON_LINKS.coursera_ai, COMMON_LINKS.upwork],
    },
    DIGITAL_ARTISAN: {
        title: '絶滅危惧種の守護者「孤高の超アナログ職人」',
        description: '特定の技術領域において卓越したスキルを持つスペシャリスト。AI時代でも代替不可能な「深さ」が武器です。',
        actionPlan: [
            '専門分野の最新トレンド（論文やGitHub）を常にチェック。',
            'ポートフォリオを更新し、スキルの可視化を行う。',
            'AIを活用して定型作業を効率化し、クリエイティブな時間に集中する。',
        ],
        recommendations: [COMMON_LINKS.coursera_ai, COMMON_LINKS.green],
    },
    COMMUNITY_WEAVER: {
        title: '人たらしの天才「共感サイボーグ」',
        description: '人と人を繋ぎ、組織やコミュニティの熱量を高める触媒のような存在。AIには真似できない「共感」と「信頼構築」が最大の価値です。',
        actionPlan: [
            '社内外の勉強会や交流会のファシリテーションを担当する。',
            '心理的安全性に関する知識を深め、チームビルディングに応用する。',
            'オンラインコミュニティの運営手法を学ぶ。',
        ],
        recommendations: [COMMON_LINKS.udemy_comm, COMMON_LINKS.notion],
    },
    DATA_ALCHEMIST: {
        title: '数字に愛される「データの魔術師」',
        description: '膨大なデータから「意味」と「価値」を精製する錬金術師。数字だけでなく、その背景にあるストーリーを読み解きます。',
        actionPlan: [
            'PythonやSQLのスキルを磨き、データ処理速度を上げる。',
            'ビジネス課題をデータで解決する提案書を月1本作成する。',
            'データ可視化ツール（Tableauなど）のマスター。',
        ],
        recommendations: [COMMON_LINKS.coursera_ai, COMMON_LINKS.green],
    },
    INNOVATION_ARCHITECT: {
        title: '未来を先取りする「破壊と創造の申し子」',
        description: '技術と人間、現在と未来を俯瞰し、新しい仕組みを設計する建築家。複数の領域を横断する知識が強みです。',
        actionPlan: [
            'システム思考やデザイン思考のワークショップに参加する。',
            '異なる業界の人と積極的に会い、異分野の知見を取り入れる。',
            '新規事業の立ち上げや、組織変革プロジェクトに手を挙げる。',
        ],
        recommendations: [COMMON_LINKS.notion, COMMON_LINKS.coursera_ai],
    },
    ETHICAL_GUARDIAN: {
        title: 'AIの暴走を止める「最後の良心」',
        description: 'テクノロジーの進化に伴う倫理的課題やリスクから社会を守る守護者。信頼と公平性を担保する重要な役割です。',
        actionPlan: [
            'AI倫理やデータプライバシーに関する最新の法規制を学ぶ。',
            '組織内のコンプライアンスやガバナンス体制の見直しを提案する。',
            '人文科学や哲学の書籍を読み、技術の社会的影響を考察する。',
        ],
        recommendations: [COMMON_LINKS.coursera_ai, COMMON_LINKS.udemy_comm],
    },
    GLOBAL_NOMAD: {
        title: '国境を持たない「デジタル遊牧民」',
        description: '特定の場所に縛られず、世界中どこでも価値を提供できる自由人。高い自律性と適応力が武器です。',
        actionPlan: [
            '英語または第二外国語のスキルをビジネスレベルまで引き上げる。',
            'リモートワーク環境を整備し、非同期コミュニケーションを極める。',
            '海外の案件サイトに登録し、ドル建ての収入源を作る。',
        ],
        recommendations: [COMMON_LINKS.upwork, COMMON_LINKS.chatgpt],
    },
    REALITY_BRIDGER: {
        title: 'メタバースの住人「次元を超えし者」',
        description: 'デジタル空間と物理空間を行き来し、双方の良さを融合させる架け橋。AR/VRやIoTなどの領域で活躍します。',
        actionPlan: [
            '3DモデリングやUnity/Unreal Engineの基礎を触ってみる。',
            'IoTデバイスを使った業務改善のプロトタイプを作ってみる。',
            '体験デザイン（UX）の視点から、リアルの場での顧客体験を見直す。',
        ],
        recommendations: [COMMON_LINKS.coursera_ai, COMMON_LINKS.green],
    },
    SUSTAINABLE_STRATEGIST: {
        title: '地球を救う「永続の戦略家」',
        description: '短期的な利益だけでなく、環境や社会への長期的な影響を考慮して戦略を立てる賢者。企業の持続可能性を支えます。',
        actionPlan: [
            'SDGsやESG経営に関する資格取得を目指す。',
            '自社のサプライチェーンや業務プロセスの無駄を洗い出す。',
            '長期的な視点での事業計画スキル（バックキャスティングなど）を学ぶ。',
        ],
        recommendations: [COMMON_LINKS.notion, COMMON_LINKS.udemy_comm],
    },
    LEGACY_KEEPER: {
        title: 'システムの墓守「闇に咲く安定の花」',
        description: '社会基盤を支える既存システムを守り抜く保守のプロ。誰もやりたがらないが不可欠な領域で、高い安定性を誇ります。',
        actionPlan: [
            '担当しているシステムのドキュメントを完璧に整備し、ブラックボックス化を防ぐ。',
            'レガシー技術からクラウドへの移行（マイグレーション）知識をつける。',
            '若手への技術承継の仕組みを作る。',
        ],
        recommendations: [COMMON_LINKS.udemy_comm, COMMON_LINKS.green],
    },
    GIG_SURVIVOR: {
        title: '組織を捨てた「孤高のワンマンアーミー」',
        description: '組織に属さず、複数の短期プロジェクトを渡り歩く傭兵。柔軟性は高いですが、スキル資産の蓄積が課題になりがちです。',
        actionPlan: [
            '単価の低いタスク案件を減らし、専門性が求められるプロジェクトにシフトする。',
            '自分自身の「サービスメニュー表」を作り、営業活動を効率化する。',
            '財務管理や契約周りの知識をつけ、トラブルを防ぐ。',
        ],
        recommendations: [COMMON_LINKS.upwork, COMMON_LINKS.notion],
    },
    ENDANGERED_WORKER: {
        title: 'AIに背中を焼かれる「逃亡中のホワイトカラー」',
        description: 'AIや自動化の波に飲み込まれるリスクが高い状態です。早急にスキルのアップデートやマインドセットの変革が必要です。',
        actionPlan: [
            'まずはChatGPTなどのAIツールを1日1回必ず触る習慣をつける。',
            '自分の業務の中で「自動化できそうなこと」をリストアップする。',
            '興味のある分野のオンライン講座を一つ受講し始める。',
        ],
        recommendations: [COMMON_LINKS.chatgpt, COMMON_LINKS.coursera_ai, COMMON_LINKS.udemy_comm],
    },
};
