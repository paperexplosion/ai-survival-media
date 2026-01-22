import { CareerType } from '@/types';

export interface AffiliateCatalogItem {
    id: string;
    jobTypes: CareerType[];
    name: string;
    description: string;
    sommelierAnalysis: string;
    affiliateUrl: string;
    trackingImageUrl?: string;
}

export const AFFILIATE_CATALOG: AffiliateCatalogItem[] = [
    {
        id: 'myvision_master',
        jobTypes: ['AI_MASTER', 'DATA_ALCHEMIST'],
        name: 'MyVision',
        description: '書類通過率90%の実績を誇る戦略コンサル転職特化エージェント',
        sommelierAnalysis: '戦略コンサル転職における最短経路。書類通過率90%という数字が示すのは、あなたの錬金術を正しくコンサル用語に翻訳し、年収1,500万を「最低ライン」として交渉する力だ。創業者が戦略ファーム出身で内情を熟知しているがゆえに、面接対策は容赦なく厳しい。しかし、その厳しさこそが市場価値を正当に評価される扉を開く。データを武器にする者が、組織を動かす参謀として君臨するための最適解がここにある。',
        affiliateUrl: '//af.moshimo.com/af/c/click?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690',
        trackingImageUrl: '//i.moshimo.com/af/i/impression?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690'
    },
    {
        id: 'axis_master',
        jobTypes: ['AI_MASTER', 'DATA_ALCHEMIST', 'COMMUNITY_WEAVER'],
        name: 'AXIS Agent',
        description: 'IT上流工程と外資系DX案件に強い、非公開求人77%の転職エージェント',
        sommelierAnalysis: 'IT上流工程と外資系DX中枢への独自ネットワークを保有。非公開求人77%という数字は、表に出ない「AI戦略室」の椅子がここにあることを意味する。実務作業者の沼から抜け出し、組織全体を動かす参謀として地位を確立するなら、ここが最適解だ。3年間の長期サポートは単なる転職支援ではなく、キャリア設計の伴走者を得ることに等しい。30代以上のプロフェッショナルが、次のステージへ駆け上がるための信頼できる橋渡し役となる。',
        affiliateUrl: '#'
    },
    {
        id: 'kotora_master',
        jobTypes: ['AI_MASTER'],
        name: 'コトラ（KOTORA）',
        description: 'コンサル・金融など年収2,000万超を狙うプロフェッショナル転職エージェント',
        sommelierAnalysis: 'コンサル・金融といったプロフェッショナル職に圧倒的な強みを持つ。単なる求人紹介ではなく、あなたの「価値観」と「志向性」で組織とマッチングさせる独自の手法を持つ。成果主義が極めて強い世界だが、軍師としてのキャリアを長期で預けるに足る信頼性がここにはある。年収2,000万超の世界で勝負するための最後の関門であり、プロフェッショナルとしての矜持を保ちながら、最高峰の舞台へと駆け上がる道筋を提供してくれる。',
        affiliateUrl: '//af.moshimo.com/af/c/click?a_id=5337707&p_id=3316&pc_id=7865&pl_id=47212',
        trackingImageUrl: '//i.moshimo.com/af/i/impression?a_id=5337707&p_id=3316&pc_id=7865&pl_id=47212'
    },
    {
        id: 'lhh_alchemist',
        jobTypes: ['DATA_ALCHEMIST', 'SUSTAINABLE_STRATEGIST'],
        name: 'LHH転職',
        description: '世界60拠点のネットワークで平均101万円の年収アップを実現するグローバル転職エージェント',
        sommelierAnalysis: '世界60拠点のグローバルネットワークが、日本の狭い物差しではなく世界標準であなたの市場価値を再定義する。平均101万円の年収アップ実績は、データを金に変える錬金術が正当に評価された結果だ。英語力が一定以上求められるが、それは国境を越えたキャリアの入場券に過ぎない。360度式コンサルティングにより、あなたの強みを多角的に分析し、グローバル市場で最も高く評価される場所へと導く。ドライと感じる対応の裏には、冷徹なまでの実力主義がある。',
        affiliateUrl: '#'
    },
    {
        id: 'famm_bridger',
        jobTypes: ['REALITY_BRIDGER', 'ENDANGERED_WORKER', 'GIG_SURVIVOR', 'GLOBAL_NOMAD'],
        name: 'Famm',
        description: '1ヶ月完結＋卒業後5件の案件保証でWebデザイナーデビューを支援するスクール',
        sommelierAnalysis: 'Webデザイン1ヶ月完結、そして卒業後5件の案件保証という具体的な実績支援。実績ゼロの不安を物理的な「仕事」で強制的に上書きし、プロへの一歩を固める。高度な開発スキルは学べないが、まず必要なのは「1円を稼ぐ成功体験」だ。脱出への恐怖を消し、独立への最初の手応えを掴め。未経験特化の設計により挫折を防ぎ、ノマドとしての自活体験を最短で手に入れる。会社という檻から抜け出すための、最初の武器を手にしろ。',
        affiliateUrl: '#'
    },
    {
        id: 'digihack_bridger',
        jobTypes: ['REALITY_BRIDGER', 'ENDANGERED_WORKER', 'GIG_SURVIVOR'],
        name: 'デジハク',
        description: '300本以上の教材とマンツーマン添削で動画編集スキルを習得できるオンラインスクール',
        sommelierAnalysis: '動画編集300本以上の教材とマンツーマン添削による徹底サポート。市場が拡大し続ける動画領域で、会社に依存しない自由への切符をその手で掴み取れ。PCスペックと継続的な制作体力が必要だが、あなたの感性を市場価値のある商用動画に変換する現役プロの並走者がここにいる。実案件紹介もあり、学習と実践の橋渡しが完璧だ。AIと動画の相乗効果で「稼ぐ表現者」へ。今ある表現力に動画という武器を加え、複数の収益源を構築しろ。',
        affiliateUrl: '#'
    },
    {
        id: 'meikara_bridger',
        jobTypes: ['REALITY_BRIDGER', 'DIGITAL_ARTISAN', 'GIG_SURVIVOR'],
        name: 'メイカラ',
        description: '生成AI×デザイン×ライティングの掛け算で多能工を目指すクリエイター育成スクール',
        sommelierAnalysis: '生成AIを核にした統合学習環境。デザイン×ライティング×AIの掛け算で、独占的な表現者の地位を築く。伝統的な手法のみを学びたい者には不向きだが、AIというチート級の武器を使いこなし、替えの効かない多能工になる最速ルートがここにある。コミュニティの質も高く、協業による多角的な収益源の構築が可能だ。複数のスキルを掛け合わせることで、サバイバル能力を極大化し、誰にも真似できない唯一無二の個人ブランドを確立せよ。',
        affiliateUrl: '#'
    },
    {
        id: 'dmm_ai_camp',
        jobTypes: ['ENDANGERED_WORKER', 'DIGITAL_ARTISAN', 'COMMUNITY_WEAVER'],
        name: 'DMM 生成AI CAMP',
        description: '現役エンジニアから学び、事務作業をAIで自動化する実践スキルを習得できるスクール',
        sommelierAnalysis: '現役エンジニアから直接学び、事務作業をAIで自動化する実践スキルを習得。ツールに使われるな。AIの本質を深く理解し、企業の課題を解決する真の職人になれ。ビジネス活用に特化したカリキュラムにより、即戦力化を実現する。浮いた時間で次の稼ぎを構築し、生存率を飛躍的に高めろ。リーダー自らがAIの限界を知ることが、真の「AI共生組織」を設計する力となる。自己学習の覚悟があれば、チームの生産性を劇的に向上させる方法論を手に入れられる。',
        affiliateUrl: '#'
    },
    {
        id: 'anycrew_artisan',
        jobTypes: ['DIGITAL_ARTISAN'],
        name: 'Anycrew',
        description: '週1日から稼働可能な信頼ベースの高品質副業案件マッチングプラットフォーム',
        sommelierAnalysis: '週1日から稼働可能な信頼ベースの副業案件プラットフォーム。あなたのプロンプト魔術を、まずは副業という実戦の場で現金に変える第一歩だ。案件倍率が高い場合もあるが、それは質の高いクライアントと出会える証である。リモート案件が多数あり、自己管理能力を武器に変えられる。企業との信頼関係を構築しながら、複数の収益源を持つ現代の魔術師として、本業を超える報酬を手にする道筋が見える。まずは週1から、あなたの言葉の力を市場で試せ。',
        affiliateUrl: '#'
    },
    {
        id: 'raretech_architect',
        jobTypes: ['INNOVATION_ARCHITECT'],
        name: 'RareTECH',
        description: 'React/Python等のモダン技術スタックで高単価案件に直結するプログラミングスクール',
        sommelierAnalysis: 'React/Python等のモダン技術スタックに特化した圧倒的学習密度。卒業生の案件単価の高さが、この教育の質を雄弁に証明している。学習難易度は極めて高く、覚悟がなければ確実に挫折する。だが、本気で「創る側」に回り、自分のプロダクトで世界をハックするなら、ここ以外の選択肢はない。作業者で終わるか、アイデアを形にする筆を極めるか。その分岐点で、妥協を許さない高精細な技術教育があなたを待っている。高単価案件への直結路を手に入れろ。',
        affiliateUrl: '#'
    },
    {
        id: 'divepro_architect',
        jobTypes: ['INNOVATION_ARCHITECT'],
        name: 'ディープロ',
        description: 'Python特化でAI・機械学習エンジニアへの最短ルートを提供するプログラミングスクール',
        sommelierAnalysis: 'Python特化でAI・機械学習エンジニアへの登竜門。実践的な開発プロジェクトと徹底した現場主義が、未経験からでもAI開発の深部へ潜り込む最短ルートを提供する。英語ドキュメント読解が必要だが、それはグローバルな技術情報に直接アクセスする力を意味する。AIの心臓部であるPythonを掴み、機械学習の本質に触れることで、単なる利用者ではなく開発者として、AI時代の中核を担う人材へと変貌する。プログラミング未経験者には厳しい初期負荷だが、それを乗り越えた先に見える景色は別次元だ。',
        affiliateUrl: '#'
    },
    {
        id: 'potepan_architect',
        jobTypes: ['INNOVATION_ARCHITECT', 'GLOBAL_NOMAD'],
        name: 'ポテパンフリーランス',
        description: '平均単価80万円の高単価案件を継続的にサポートするフリーランスエンジニア向けエージェント',
        sommelierAnalysis: '平均単価80万円の高単価案件と、稼働後も続く継続的なサポート体制。スキルは既に十分、あとは適切な「値付け」だけだ。会社員の年収を数ヶ月で超える世界へようこそ。実務経験が一定以上必要とされるが、市場価値をシビアに問われる場でこそ、あなたの真価が証明される。Ruby/Rails等のモダン環境で、フリーランスとしての自由を掴み取れ。海外で暮らすための強力な資金源を確保し、場所を選ばない働き方を実現する。組織の枠を超えた、圧倒的な報酬を手にしろ。',
        affiliateUrl: '#'
    },
    {
        id: 'posiwill_weaver',
        jobTypes: ['COMMUNITY_WEAVER', 'ETHICAL_GUARDIAN', 'LEGACY_KEEPER'],
        name: 'ポジウィル',
        description: '20-30代の「どう生きたいか」を徹底的に棚卸しするキャリア伴走サービス',
        sommelierAnalysis: '20-30代の迷いに特化した伴走者が、「どう生きたいか」の徹底的な棚卸しを行う。転職ありきではない深い自己分析により、AI時代だからこそ必要なあなた自身の揺るぎない指針を明確にする。動けないのは意志が弱いからではない。現在地が見えていないだけだ。プロとの濃密な対話で人生の地図を描き、観察を確信に、迷いを自信に変えろ。枠が埋まりやすく、精神的負荷も伴うが、深い自己受容を経て、部下を導くための揺るぎない背中を作れ。費用は自己投資として必要だが、それ以上の価値がある。',
        affiliateUrl: '#'
    },
    {
        id: 'studying_strategist',
        jobTypes: ['SUSTAINABLE_STRATEGIST', 'ETHICAL_GUARDIAN', 'LEGACY_KEEPER'],
        name: 'スタディング',
        description: 'AIが学習をアシストする業界最安値クラスのオンライン資格取得支援サービス',
        sommelierAnalysis: 'AIが学習をアシストする業界最安値クラスの資格取得支援。IT・会計資格を爆速で取得し、効率化のプロとしての最初の証明を手に入れろ。スマホ1台で完結するため、通勤時間や昼休みといったスキマ時間で着実に牙を研げる。リスクを負わずに自分の価値を証明するカード（資格）を持て。何かを学んでいるという事実が不安を消し、自信を生む。手を動かせば恐怖は消える。AI効率学習で気づかなかった「得意」を掘り起こし、モチベーション維持の自己管理さえできれば、確実にキャリアの選択肢が広がる。',
        affiliateUrl: '#'
    },
    {
        id: 'majicari_strategist',
        jobTypes: ['SUSTAINABLE_STRATEGIST', 'LEGACY_KEEPER'],
        name: 'マジキャリ',
        description: '内定率100%の実績と10年以上のノウハウで事務スキルの言語化に強い転職支援サービス',
        sommelierAnalysis: '内定率100％の安心転職コースと、10年以上の支援ノウハウによる徹底したキャリア棚卸し。事務スキルの言語化に強く、「事務＝誰でもできる」という世間の誤解を完全に解体する。あなたの効率化スキルと調整力に正当な値を付ける場所だ。費用対効果を出すには本人の本気での自己開示と努力が必須となるが、時には厳しいフィードバックもある。しかし、その厳しさこそが迷いを「具体的な内定」という確かな解決策に変え、プロのノウハウで確実に一歩前へ進ませる原動力となる。',
        affiliateUrl: '#'
    },
    {
        id: 'nativecamp_guardian',
        jobTypes: ['ETHICAL_GUARDIAN', 'GLOBAL_NOMAD'],
        name: 'ネイティブキャンプ',
        description: 'レッスン回数無制限・24時間受講可能で世界140ヶ国以上の講師と学べるオンライン英会話',
        sommelierAnalysis: 'レッスン回数無制限、24時間いつでも即受講可能。世界140ヶ国以上の講師との対話により、英語の海に完全に浸かり言葉の壁を破壊しろ。最後の信頼は「肉声」に宿る。AI情報を一次情報（英語）で直接取得し、翻訳の歪みなく理解する力が生き残りの鍵だ。予約が必要な人気講師もいるが、自己流になりやすい点には注意が必要。しかし、回線状況に左右されることも含め、それらは世界中の人間と繋がるための小さな代償に過ぎない。AIを使いこなすための英語力もここで手に入れろ。',
        affiliateUrl: '#'
    },
    {
        id: 'lifeshift_lab_survivor',
        jobTypes: ['GIG_SURVIVOR'],
        name: 'ライフシフトラボ AIコース',
        description: '40-50代のキャリア自律に特化し、組織経験をAIでレバレッジする複業・独立支援サービス',
        sommelierAnalysis: '組織を捨てた傭兵にとって、スキル資産の蓄積は生存に直結する最優先課題だ。これまでの現場経験とノウハウをAIで圧倒的にレバレッジし、一人で一個師団並みの戦力を保持しろ。組織という盾を捨てた以上、頼れるのは自らの武装のみだ。AIという時代最強の相棒を完全に従え、フリーランスとしての生存率を劇的に引き上げろ。40-50代のキャリア自律に特化し、複業・独立支援の実績が豊富。過去の経験を無駄にせず、AIで増幅させる方法論がここにある。組織なき荒野を生き抜く力を手に入れろ。',
        affiliateUrl: '#'
    },
    {
        id: 'bizreach_master',
        jobTypes: ['AI_MASTER'],
        name: 'ビズリーチ',
        description: '年収1,000万超を狙うスカウト型ハイクラス転職プラットフォーム',
        sommelierAnalysis: 'ハイクラス転職の揺るぎない定番、スカウト型で年収1,000万超を確実に狙える舞台。エグゼクティブ層向けの非公開求人が豊富で、あなたの市場価値を最大化する最高の舞台だ。企業の経営層や人事責任者からの直接スカウトは、あなたの戦略的思考と実績が正当に評価されている動かぬ証拠。自ら動かずとも、待つだけで複数の最高値オファーが提示される。受動的でありながら圧倒的な成果を生む転職体験が、ここでは当たり前のように実現する。年収2,000万超の世界も視野に入る。',
        affiliateUrl: '#'
    },
    {
        id: 'wantedly_architect',
        jobTypes: ['INNOVATION_ARCHITECT'],
        name: 'Wantedly',
        description: '「何を成し遂げたいか」「誰と働きたいか」で選ぶ、志向性重視の転職を実現する転職マッチングプラットフォーム',
        sommelierAnalysis: 'ベンチャー・スタートアップに圧倒的に強く、企業文化とビジョンを最重視したマッチングプラットフォーム。給与条件よりも「何を成し遂げたいか」「誰と働きたいか」で選ぶ、志向性重視の転職を実現する。0→1を生み出す破壊と創造の最前線で、あなたの設計力と構想力を存分に試せ。カジュアル面談で企業の本質を見極められる。給与交渉は後回しになっても構わない。情熱が金銭的報酬を上回る瞬間が、ここには確かに存在する。未来を創る側に回りたいなら、ここから始めろ。',
        affiliateUrl: '#'
    },
    {
        id: 'pasona_weaver',
        jobTypes: ['COMMUNITY_WEAVER'],
        name: 'パソナキャリア',
        description: '女性の転職とワークライフバランスに圧倒的な強みを持つ転職エージェント',
        sommelierAnalysis: '女性の転職とワークライフバランスに圧倒的な強みを持ち、キャリアと人生の調和を最重視する。共感力を最大の武器にするあなたにとって、組織の人間関係の質と働きやすさは絶対に譲れない条件だ。丁寧で手厚いサポートと、長期的な視点でのキャリア設計が、あなたの「人を繋ぐ力」を最大限に発揮できる理想的な環境へと確実に導く。クリエイティブ職のサポートにも定評があり、あなたの共感という名の高度な演算能力が、正当に評価される組織と出会える。人間関係を資産に変えろ。',
        affiliateUrl: '#'
    },
    {
        id: 'udemy_worker',
        jobTypes: ['ENDANGERED_WORKER', 'ETHICAL_GUARDIAN'],
        name: 'Udemy',
        description: '実務スキルを短期間で習得できる買い切り型オンライン学習プラットフォーム',
        sommelierAnalysis: '実務スキルを短期間で習得できる買い切り型オンライン学習プラットフォーム。AIに背中を焼かれる前に、まず一つの確実なスキルを手に入れろ。安価で始められるため、経済的リスクを最小限に抑えながら学びの習慣を着実に構築できる。プログラミング、デザイン、マーケティング、データ分析など、多岐にわたるコースから選択可能だ。恐怖を具体的な行動に変える最初の一歩として、今日この瞬間から手を動かせ。セールも頻繁に開催され、1,000円台から学習を開始できる。迷っている時間はない。',
        affiliateUrl: '#'
    },
    {
        id: 'techacademy_architect',
        jobTypes: ['INNOVATION_ARCHITECT'],
        name: 'テックアカデミー',
        description: '現役エンジニアがマンツーマンで徹底サポートする転職保証付きプログラミングスクール',
        sommelierAnalysis: '現役エンジニアがマンツーマンでメンターとして徹底的に並走するプログラミングスクール。転職サポート付きで、スキル習得から実際の就職まで一気通貫で支援する。学習難易度は決して低くないが、それは市場が真に求める実務レベルのスキルを妥協なく習得するための必然だ。週2回のメンタリングにより、挫折を防ぎながら着実に技術力を積み上げられる。中途半端な知識では通用しない。本物のエンジニアとして、創る側に回るための確かな技術力を身につけろ。転職成功率も高く、実力主義の世界への切符となる。',
        affiliateUrl: '#'
    }
];

export function getAffiliateCatalogByJobType(jobType: CareerType): AffiliateCatalogItem[] {
    return AFFILIATE_CATALOG.filter(item => item.jobTypes.includes(jobType));
}
