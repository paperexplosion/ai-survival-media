import { CareerType } from '@/types';

export interface AffiliateCatalogItem {
    id: string;
    jobTypes: CareerType[];
    name: string;
    sommelierAnalysis: string;
    affiliateUrl: string;
    trackingImageUrl?: string;
}

export const AFFILIATE_CATALOG: AffiliateCatalogItem[] = [
    {
        id: 'myvision_master',
        jobTypes: ['AI_MASTER', 'DATA_ALCHEMIST'],
        name: 'MyVision',
        sommelierAnalysis: '戦略コンサル転職における最短経路。書類通過率90%という数字が示すのは、あなたの錬金術を正しくコンサル用語に翻訳し、年収1,500万を「最低ライン」として交渉する力だ。創業者が内情を熟知しているがゆえに、面接対策は容赦なく厳しい。だが、その厳しさこそが市場価値を正当に評価される扉を開く。',
        affiliateUrl: '//af.moshimo.com/af/c/click?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690',
        trackingImageUrl: '//i.moshimo.com/af/i/impression?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690'
    },
    {
        id: 'axis_master',
        jobTypes: ['AI_MASTER', 'DATA_ALCHEMIST', 'COMMUNITY_WEAVER'],
        name: 'AXIS Agent',
        sommelierAnalysis: 'IT上流工程と外資系DX中枢への独自ネットワークを保有。非公開求人77%という数字は、表に出ない「AI戦略室」の椅子がここにあることを意味する。実務の沼から抜け出し、組織を動かす参謀として地位を確立するなら、ここが最適解だ。3年間の長期サポートは、単なる転職ではなくキャリア設計の伴走者を得ることに等しい。',
        affiliateUrl: '#'
    },
    {
        id: 'kotora_master',
        jobTypes: ['AI_MASTER'],
        name: 'コトラ（KOTORA）',
        sommelierAnalysis: 'コンサル・金融といったプロフェッショナル職に圧倒的な強みを持つ。単なる求人紹介ではなく、あなたの「価値観」で組織とマッチングさせる。成果主義が極めて強い世界だが、軍師としてのキャリアを長期で預けるに足る信頼性がここにはある。年収2,000万超の世界で勝負するための、最後の関門だ。',
        affiliateUrl: '//af.moshimo.com/af/c/click?a_id=5337707&p_id=3316&pc_id=7865&pl_id=47212',
        trackingImageUrl: '//i.moshimo.com/af/i/impression?a_id=5337707&p_id=3316&pc_id=7865&pl_id=47212'
    },
    {
        id: 'lhh_alchemist',
        jobTypes: ['DATA_ALCHEMIST', 'SUSTAINABLE_STRATEGIST'],
        name: 'LHH転職',
        sommelierAnalysis: '世界60拠点のグローバルネットワークが、日本の物差しではなく世界標準であなたの市場価値を再定義する。平均101万円の年収アップ実績は、データを金に変える錬金術が正当に評価された結果だ。英語力が一定以上求められるが、それは国境を越えたキャリアの入場券に過ぎない。',
        affiliateUrl: '#'
    },
    {
        id: 'famm_bridger',
        jobTypes: ['REALITY_BRIDGER', 'ENDANGERED_WORKER', 'GIG_SURVIVOR', 'GLOBAL_NOMAD'],
        name: 'Famm',
        sommelierAnalysis: 'Webデザイン1ヶ月完結、そして卒業後5件の案件保証。実績ゼロの不安を物理的な「仕事」で強制的に上書きし、プロへの一歩を固める。高度な開発スキルは学べないが、まず必要なのは「1円を稼ぐ成功体験」だ。脱出の恐怖を消し、独立への最初の手応えを掴め。',
        affiliateUrl: '#'
    },
    {
        id: 'digihack_bridger',
        jobTypes: ['REALITY_BRIDGER', 'ENDANGERED_WORKER', 'GIG_SURVIVOR'],
        name: 'デジハク',
        sommelierAnalysis: '動画編集300本以上の教材とマンツーマン添削。市場が拡大し続ける動画領域で、会社に依存しない自由への切符をその手で掴み取れ。PCスペックと継続的な制作体力が必要だが、あなたの感性を市場価値のある動画に変換する並走者がここにいる。AIと動画の相乗効果で稼ぐ表現者へ。',
        affiliateUrl: '#'
    },
    {
        id: 'meikara_bridger',
        jobTypes: ['REALITY_BRIDGER', 'DIGITAL_ARTISAN', 'GIG_SURVIVOR'],
        name: 'メイカラ',
        sommelierAnalysis: '生成AIを核にした統合学習環境。デザイン×ライティング×AIの掛け算で、独占的な表現者の地位を築く。伝統的な手法のみを学びたい者には不向きだが、AIというチート級の武器を使いこなし、替えの効かない多能工になる最速ルートがここにある。',
        affiliateUrl: '#'
    },
    {
        id: 'dmm_ai_camp',
        jobTypes: ['ENDANGERED_WORKER', 'DIGITAL_ARTISAN', 'COMMUNITY_WEAVER'],
        name: 'DMM 生成AI CAMP',
        sommelierAnalysis: '現役エンジニアから直接学び、事務作業をAIで自動化する実践スキルを習得。ツールに使われるな。AIの本質を理解し、企業の課題を解決する職人になれ。浮いた時間で次の稼ぎを構築する。リーダー自らがAIの限界を知ることが、真の「AI共生組織」を設計する力になる。',
        affiliateUrl: '#'
    },
    {
        id: 'anycrew_artisan',
        jobTypes: ['DIGITAL_ARTISAN'],
        name: 'Anycrew',
        sommelierAnalysis: '週1日から稼働可能な信頼ベースの副業案件プラットフォーム。あなたのプロンプト魔術を、まずは副業という実戦の場で現金に変える第一歩。案件倍率が高い場合もあるが、それは質の高いクライアントと出会える証だ。リモート案件多数で、自己管理能力を武器に変えろ。',
        affiliateUrl: '#'
    },
    {
        id: 'raretech_architect',
        jobTypes: ['INNOVATION_ARCHITECT'],
        name: 'RareTECH',
        sommelierAnalysis: 'React/Python等のモダン技術に特化した圧倒的学習密度。案件単価の高さが教育の質を証明している。学習難易度は極めて高く、覚悟がなければ挫折する。だが、本気で「創る側」に回り、自分のプロダクトで世界をハックするなら、ここ以外の選択肢はない。',
        affiliateUrl: '#'
    },
    {
        id: 'divepro_architect',
        jobTypes: ['INNOVATION_ARCHITECT'],
        name: 'ディープロ',
        sommelierAnalysis: 'Python特化でAI・機械学習エンジニアへの登竜門。実践的な開発プロジェクトと徹底した現場主義が、未経験からでもAI開発の深部へ潜り込む最短ルートを提供する。英語ドキュメント読解が必要だが、それはグローバルな技術情報に直接アクセスする力を意味する。',
        affiliateUrl: '#'
    },
    {
        id: 'potepan_architect',
        jobTypes: ['INNOVATION_ARCHITECT', 'GLOBAL_NOMAD'],
        name: 'ポテパンフリーランス',
        sommelierAnalysis: '平均単価80万円の高単価案件と稼働後の継続サポート。スキルは十分、あとは「値付け」だ。会社員の年収を数ヶ月で超える世界へ。実務経験が一定以上必要だが、市場価値をシビアに問われる場でこそ、あなたの真価が証明される。海外で暮らすための強力な資金源を確保しろ。',
        affiliateUrl: '#'
    },
    {
        id: 'posiwill_weaver',
        jobTypes: ['COMMUNITY_WEAVER', 'ETHICAL_GUARDIAN', 'LEGACY_KEEPER'],
        name: 'ポジウィル',
        sommelierAnalysis: '20-30代の迷いに特化した伴走者。「どう生きたいか」の棚卸しを通じ、転職ありきではない自己分析を提供。AI時代だからこそ、あなた自身の指針を明確にする。動けないのは意志が弱いからではない。現在地が見えていないだけだ。プロと地図を描き、迷いを自信に変えろ。',
        affiliateUrl: '#'
    },
    {
        id: 'studying_strategist',
        jobTypes: ['SUSTAINABLE_STRATEGIST', 'ETHICAL_GUARDIAN', 'LEGACY_KEEPER'],
        name: 'スタディング',
        sommelierAnalysis: 'AIが学習をアシストする業界最安値クラスの資格取得支援。IT・会計資格を爆速で取得し、効率化のプロとしての最初の証明を手に入れろ。スキマ時間で牙を研ぎ、リスクを負わずに自分の価値を証明するカード（資格）を持て。何かを学んでいるという事実が、不安を消し自信を生む。',
        affiliateUrl: '#'
    },
    {
        id: 'majicari_strategist',
        jobTypes: ['SUSTAINABLE_STRATEGIST', 'LEGACY_KEEPER'],
        name: 'マジキャリ',
        sommelierAnalysis: '内定率100％の安心転職コースと10年以上の支援ノウハウ。事務スキルの言語化に強く、「事務＝誰でもできる」という誤解を解く。あなたの効率化スキルに正当な値を付ける場所だ。費用対効果を出すには本人の努力が必須だが、厳しいフィードバックこそが確実な一歩を生む。',
        affiliateUrl: '#'
    },
    {
        id: 'nativecamp_guardian',
        jobTypes: ['ETHICAL_GUARDIAN', 'GLOBAL_NOMAD'],
        name: 'ネイティブキャンプ',
        sommelierAnalysis: 'レッスン回数無制限、24時間即受講可能。世界140ヶ国以上の講師との対話で、英語の海に浸かり言葉の壁を破壊しろ。最後の信頼は「肉声」に宿る。AI情報を一次情報（英語）で取得し、生き残る力を手に入れる。回線状況に左右されるが、それは世界と繋がるための小さな代償だ。',
        affiliateUrl: '#'
    },
    {
        id: 'lifeshift_lab_survivor',
        jobTypes: ['GIG_SURVIVOR'],
        name: 'ライフシフトラボ AIコース',
        sommelierAnalysis: '組織を捨てた傭兵にとって、スキル資産の蓄積は生存に直結する課題だ。これまでの現場経験をAIでレバレッジし、一人で一個師団並みの戦力を保持しろ。組織を捨てた以上、頼れるのは自らの武装のみだ。AIという最強の相棒を従え、生存率を劇的に引き上げろ。',
        affiliateUrl: '#'
    },
    {
        id: 'bizreach_master',
        jobTypes: ['AI_MASTER'],
        name: 'ビズリーチ',
        sommelierAnalysis: 'ハイクラス転職の定番、スカウト型で年収1,000万超を狙える。エグゼクティブ層向けの非公開求人が豊富で、あなたの市場価値を最大化する舞台だ。企業からの直接スカウトは、あなたの戦略的思考が正当に評価されている証。待つだけで最高値が提示される、受動的かつ圧倒的な転職体験を。',
        affiliateUrl: '#'
    },
    {
        id: 'wantedly_architect',
        jobTypes: ['INNOVATION_ARCHITECT'],
        name: 'Wantedly',
        sommelierAnalysis: 'ベンチャー・スタートアップに強く、企業文化とビジョンを重視したマッチング。給与よりも「何を成し遂げたいか」で選ぶ、志向性重視の転職。0→1を生み出す破壊と創造の現場で、あなたの設計力を試せ。給与交渉は後回しでも、情熱が報酬を上回る瞬間がここにはある。',
        affiliateUrl: '#'
    },
    {
        id: 'pasona_weaver',
        jobTypes: ['COMMUNITY_WEAVER'],
        name: 'パソナキャリア',
        sommelierAnalysis: '女性の転職とワークライフバランスに強く、キャリアと人生の調和を重視。共感力を武器にするあなたにとって、組織の人間関係と働きやすさは譲れない条件だ。丁寧なサポートと長期的な視点でのキャリア設計が、あなたの「人を繋ぐ力」を最大化する環境へ導く。',
        affiliateUrl: '#'
    },
    {
        id: 'udemy_worker',
        jobTypes: ['ENDANGERED_WORKER', 'ETHICAL_GUARDIAN'],
        name: 'Udemy',
        sommelierAnalysis: '実務スキルを短期習得できる買い切り型オンライン学習。AIに焼かれる前に、まず一つのスキルを手に入れろ。安価で始められるため、リスクを最小限に抑えながら学びの習慣を構築できる。恐怖を行動に変える最初の一歩として、今日から手を動かせ。',
        affiliateUrl: '#'
    },
    {
        id: 'techacademy_architect',
        jobTypes: ['INNOVATION_ARCHITECT'],
        name: 'テックアカデミー',
        sommelierAnalysis: '現役エンジニアがメンターとして並走するプログラミングスクール。転職サポート付きで、スキル習得から就職まで一気通貫。学習難易度は高いが、それは市場が求める実務レベルのスキルを習得するための必然だ。妥協せず、本物の技術力を身につけろ。',
        affiliateUrl: '#'
    }
];

export function getAffiliateCatalogByJobType(jobType: CareerType): AffiliateCatalogItem[] {
    return AFFILIATE_CATALOG.filter(item => item.jobTypes.includes(jobType));
}
