import { Question, DiagnosticResult, CareerType, AffiliateLink, DynamicCTA, SommelierRecommendation } from '@/types';

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

export const CTA_CONTENT: Record<CareerType, DynamicCTA> = {
    AI_MASTER: {
        cta: '年収1,500万超えの「AI戦略枠」を掴む',
        subtext: 'あなたの錬金術を正しく評価する、最高峰の舞台へ',
    },
    DATA_ALCHEMIST: {
        cta: '組織を動かす「参謀」としての地位を確立する',
        subtext: '実務ではなく「戦略」で勝負するためのエージェント選び',
    },
    REALITY_BRIDGER: {
        cta: '感性×AIで、次世代の「表現」を独占する',
        subtext: 'クリエイティブの上流工程へ。最新AI特化の求人を確認',
    },
    ENDANGERED_WORKER: {
        cta: '組織から自由になるための「脱出装備」を確認する',
        subtext: '焼かれる前に逃げ切る。個のスキルで食う生存ルートへ',
    },
    DIGITAL_ARTISAN: {
        cta: '「言語の魔術師」として最高単価の案件を獲る',
        subtext: 'あなたのプロンプト1行が、企業の運命と報酬を変える',
    },
    INNOVATION_ARCHITECT: {
        cta: '0→1の「爆速開発者」として市場をハックする',
        subtext: '試作で終わらせない。実力主義のAIスタートアップ特選',
    },
    COMMUNITY_WEAVER: {
        cta: 'AIを部下にし、ゆとりある「真の管理職」へ',
        subtext: '業務効率化の先にある、理想的なマネジメント環境を模索',
    },
    SUSTAINABLE_STRATEGIST: {
        cta: 'AIを味方につけて「定時で帰るプロ」になる',
        subtext: '事務を「自動化」し、あなた自身の市場価値を再定義する',
    },
    GIG_SURVIVOR: {
        cta: 'AIを「筆」に変え、唯一無二の表現者へ',
        subtext: '既存の枠に収まらない。複業・フリーランスの選択肢',
    },
    ETHICAL_GUARDIAN: {
        cta: '「置いていかれる不安」を「確信」に変える',
        subtext: 'まずは情報収集から。プロが教えるAI時代の歩き方',
    },
    LEGACY_KEEPER: {
        cta: 'モヤモヤを自信に変える。プロと戦略を描く',
        subtext: '正解がない時代だからこそ、自分だけの「軸」を再発見',
    },
    GLOBAL_NOMAD: {
        cta: '国境と言語を越え、地球を「オフィス」にする',
        subtext: 'TOEICもAIも武器にする。外資・グローバルな生き方へ',
    },
};

export const SOMMELIER_RECOMMENDATIONS: Record<CareerType, SommelierRecommendation> = {
    AI_MASTER: {
        overview: 'デジタル・アルケミストのあなたには、「AI戦略人材」として正当に評価される環境が必要です。年収1,500万円以上を狙えるハイエンドな案件を厳選しました。技術だけでなく、ビジネスインパクトを創出できる力が求められる舞台です。',
        routes: [
            {
                name: 'ビズリーチ',
                url: 'https://www.bizreach.jp/',
                merits: ['年収1,000万円以上の求人が豊富', 'スカウト型なので受け身でもOK', '優良企業の直接オファーあり'],
                demerits: ['審査制で登録できない可能性', '企業からの連絡が多くなる場合も'],
                sommelierComment: 'AI戦略人材として最も高単価を狙えるのがここ。スカウト文面から企業の本気度が分かります。'
            },
            {
                name: 'リクルートダイレクトスカウト',
                url: 'https://directscout.recruit.co.jp/',
                merits: ['完全無料で使える', 'ハイクラス案件に特化', '大手リクルートの安心感'],
                demerits: ['スカウト待ちが基本', '企業との直接交渉は少なめ'],
                sommelierComment: '安定志向ならこちら。大企業のAI部門立ち上げなど、腰を据えて取り組める案件が多いです。'
            },
            {
                name: 'Findy',
                url: 'https://findy-code.io/',
                merits: ['スキル偏差値が可視化される', 'IT/AI特化でミスマッチが少ない', 'GitHubと連携して実力を証明'],
                demerits: ['エンジニア色が強い', 'ビジネス寄りの求人は少なめ'],
                sommelierComment: 'テック系スタートアップで「技術×戦略」を極めたいなら最適。プロダクト開発の中核に入り込めます。'
            }
        ]
    },
    DATA_ALCHEMIST: {
        overview: 'AI軍師として戦略を練るあなたには、データとロジックで企業を動かせるポジションが必要です。意思決定層に近いポジションで、高い影響力を持てる環境を選びました。',
        routes: [
            {
                name: 'ビズリーチ',
                url: 'https://www.bizreach.jp/',
                merits: ['経営層直下のポジション多数', 'データ戦略責任者の求人あり', '年収交渉がしやすい'],
                demerits: ['求められるレベルが高い', '面接プロセスが長め'],
                sommelierComment: 'データで経営を動かす「参謀」を目指すなら最有力。CFOやCTOと直接話せる案件も。'
            },
            {
                name: 'Green',
                url: 'https://www.green-japan.com/',
                merits: ['IT/Web業界に特化', 'カジュアル面談が気軽にできる', '成長企業が多い'],
                demerits: ['大企業は少なめ', 'ハイクラスには物足りない場合も'],
                sommelierComment: '急成長中のベンチャーでデータ戦略を0から作りたい方向け。裁量が大きいです。'
            },
            {
                name: 'doda',
                url: 'https://doda.jp/',
                merits: ['求人数が圧倒的に多い', 'エージェントのサポートが手厚い', '未経験OKの案件もあり'],
                demerits: ['玉石混交で選定が大変', '質より量の傾向'],
                sommelierComment: '幅広く情報収集したいならここから。意外な優良企業が埋もれていることも。'
            }
        ]
    },
    REALITY_BRIDGER: {
        overview: 'ニューロ・ディレクターとして感性とAIを融合させるあなたには、クリエイティブの上流工程を担える環境が必要です。表現の自由度と最新技術の両立を重視しました。',
        routes: [
            {
                name: 'レバテックキャリア',
                url: 'https://career.levtech.jp/',
                merits: ['クリエイティブ×テック案件に強い', '専門エージェントの知識が深い', '年収アップ率が高い'],
                demerits: ['首都圏中心', '経験者向けが多い'],
                sommelierComment: 'AI×デザイン、AI×映像など、クリエイティブディレクター枠ならここが最強。'
            },
            {
                name: 'Green',
                url: 'https://www.green-japan.com/',
                merits: ['Web/IT系のクリエイティブ職多数', '企業文化が分かりやすい', 'リモートOKが多い'],
                demerits: ['大手広告代理店は少ない', '給与レンジは中堅クラス'],
                sommelierComment: 'スタートアップで新しい表現手法を試したいなら。自由度が高く、挑戦しやすい環境。'
            },
            {
                name: 'Wantedly',
                url: 'https://www.wantedly.com/',
                merits: ['企業のビジョンや文化が分かる', 'カジュアル面談がしやすい', 'ベンチャー/スタートアップに強い'],
                demerits: ['給与情報が不透明', '大手企業は少ない'],
                sommelierComment: '「何を作るか」より「誰と作るか」を重視する人向け。理念共感型のマッチングが可能。'
            }
        ]
    },
    ENDANGERED_WORKER: {
        overview: '逃亡中のホワイトカラーのあなたには、まず「焼かれる前に脱出」できる環境が必要です。組織に依存せず、個のスキルで食べていける実力をつけられる場所を選びました。',
        routes: [
            {
                name: 'Udemy',
                url: 'https://www.udemy.com/',
                merits: ['実務的なスキルを短期で習得', '買い切り型で安い', 'AI/プログラミング講座が充実'],
                demerits: ['質のバラつきがある', '学習が続かないリスク'],
                sommelierComment: 'まずはここで「武器」を手に入れましょう。ChatGPT活用やノーコード開発から始めるのがおすすめ。'
            },
            {
                name: 'クラウドワークス',
                url: 'https://crowdworks.jp/',
                merits: ['副業として始めやすい', '実績を積める', '在宅で完結'],
                demerits: ['単価が低い案件も多い', '競争が激しい'],
                sommelierComment: 'スキルを身につけたら、小さな案件から実績を作る。焦らず、着実に脱出ルートを築きましょう。'
            },
            {
                name: 'Green',
                url: 'https://www.green-japan.com/',
                merits: ['未経験OK案件あり', '成長企業が多い', 'カジュアル面談で気軽に相談'],
                demerits: ['競争率が高い', '選考に時間がかかる'],
                sommelierComment: '本格的に転職するならここ。「ポテンシャル採用」を掲げる企業も多く、挑戦しやすいです。'
            }
        ]
    },
    DIGITAL_ARTISAN: {
        overview: 'AI職人として「言語の魔術師」になるあなたには、プロンプト設計やAI活用の専門性を正当に評価してくれる場が必要です。単価の高い案件を厳選しました。',
        routes: [
            {
                name: 'ランサーズ',
                url: 'https://www.lancers.jp/',
                merits: ['プロンプトエンジニア案件が増加中', '認定ランサー制度で信頼獲得', 'AI関連の新規案件が豊富'],
                demerits: ['手数料が高め', '低単価案件も混在'],
                sommelierComment: 'フリーランスとして独立するなら、まずここで実績作り。プロンプト関連の案件が急増しています。'
            },
            {
                name: 'ココナラ',
                url: 'https://coconala.com/',
                merits: ['自分でサービスを出品できる', 'AI活用サポートの需要大', '副業として始めやすい'],
                demerits: ['価格競争が激しい', '集客が必要'],
                sommelierComment: '「ChatGPT活用コンサル」や「プロンプト作成代行」など、あなたの魔術を商品化しましょう。'
            },
            {
                name: 'レバテックフリーランス',
                url: 'https://freelance.levtech.jp/',
                merits: ['高単価案件が多い', 'エージェントのサポートあり', '長期案件で安定'],
                demerits: ['実務経験が必須', '常駐案件が中心'],
                sommelierComment: '月単価80万円以上も狙える。企業のAI導入プロジェクトに参画し、実績と報酬を両取りできます。'
            }
        ]
    },
    INNOVATION_ARCHITECT: {
        overview: 'プロトタイプ・ジャンキーのあなたには、0→1の爆速開発を評価してくれる実力主義の環境が必要です。試作で終わらせず、事業化まで伴走できる場を選びました。',
        routes: [
            {
                name: 'Wantedly',
                url: 'https://www.wantedly.com/',
                merits: ['スタートアップが豊富', '新規事業メンバー募集多数', 'ビジョン共感型のマッチング'],
                demerits: ['給与情報が不透明', '不安定な企業もある'],
                sommelierComment: '「まず作ってみる」文化の企業が多い。あなたのスピード感が最も活きる環境です。'
            },
            {
                name: 'Findy',
                url: 'https://findy-code.io/',
                merits: ['技術力が可視化される', 'AIスタートアップに強い', 'ミスマッチが少ない'],
                demerits: ['エンジニア向けが中心', 'ビジネス寄り案件は少なめ'],
                sommelierComment: 'GitHubの活動をアピールできるので、プロトタイプ実績がそのまま評価につながります。'
            },
            {
                name: 'LAPRAS',
                url: 'https://lapras.com/',
                merits: ['ポートフォリオが自動生成', 'スカウト型で楽', 'エンジニア評価に特化'],
                demerits: ['公開情報が多いと有利', 'スカウト待ちが基本'],
                sommelierComment: 'あなたの「作ってきたもの」が自動で可視化される。実績が豊富なら即スカウトが届きます。'
            }
        ]
    },
    COMMUNITY_WEAVER: {
        overview: 'AI共生型リーダーのあなたには、AIを部下にしてゆとりあるマネジメントができる環境が必要です。業務効率化を評価し、理想的なマネジメントを目指せる場を選びました。',
        routes: [
            {
                name: 'リクルートエージェント',
                url: 'https://www.r-agent.com/',
                merits: ['管理職求人が豊富', 'エージェントのサポート手厚い', '非公開求人も多数'],
                demerits: ['担当者の質にバラつき', '大量に案件を紹介される'],
                sommelierComment: 'マネージャー・リーダー職を探すなら最大手。AI活用を推進するポジションも増加中です。'
            },
            {
                name: 'doda',
                url: 'https://doda.jp/',
                merits: ['幅広い業界・職種', '診断ツールが充実', 'エージェントとの面談が丁寧'],
                demerits: ['求人が多すぎて選定が大変', '質より量の傾向'],
                sommelierComment: '「AI導入支援マネージャー」など、新しいポジションが続々登場。幅広く情報収集できます。'
            },
            {
                name: 'Green',
                url: 'https://www.green-japan.com/',
                merits: ['IT企業のマネージャー職多数', 'カジュアル面談で雰囲気確認', 'リモートOK案件豊富'],
                demerits: ['大手企業は少なめ', '給与レンジは中堅クラス'],
                sommelierComment: 'ベンチャーでマネジメント経験を積みたいなら。裁量が大きく、AI活用の自由度も高いです。'
            }
        ]
    },
    SUSTAINABLE_STRATEGIST: {
        overview: 'DX事務エバンジェリストのあなたには、AIを味方につけて「定時で帰るプロ」になれる環境が必要です。事務の自動化を評価し、市場価値を高められる場を選びました。',
        routes: [
            {
                name: 'doda',
                url: 'https://doda.jp/',
                merits: ['事務職の求人が豊富', 'エージェントのサポートあり', '未経験OKの案件も多数'],
                demerits: ['玉石混交', '事務職は競争率が高い'],
                sommelierComment: '「業務効率化担当」「DX推進事務」など、新しい事務職が登場。AI活用スキルが差別化要因になります。'
            },
            {
                name: 'リクルートエージェント',
                url: 'https://www.r-agent.com/',
                merits: ['求人数No.1', '大手企業の事務職あり', 'キャリア相談が丁寧'],
                demerits: ['担当者ガチャ', '大量に案件紹介される'],
                sommelierComment: '安定した大手企業で、業務改善を評価してくれる環境を探すなら。残業少なめ案件も豊富です。'
            },
            {
                name: 'パソナキャリア',
                url: 'https://www.pasonacareer.jp/',
                merits: ['女性の転職に強い', 'ワークライフバランス重視案件多数', '丁寧なサポート'],
                demerits: ['求人数は中堅クラス', 'ハイクラスには向かない'],
                sommelierComment: '「定時で帰る」を実現したいなら。働きやすさを重視した案件が多く、ライフスタイルを守れます。'
            }
        ]
    },
    GIG_SURVIVOR: {
        overview: 'ハイブリッド・クリエイターのあなたには、AIを「筆」に変えて唯一無二の表現者になれる環境が必要です。既存の枠に収まらない、複業・フリーランスの選択肢を選びました。',
        routes: [
            {
                name: 'ランサーズ',
                url: 'https://www.lancers.jp/',
                merits: ['多様なクリエイティブ案件', '認定制度で信頼獲得', 'AI活用案件が急増'],
                demerits: ['手数料が高め', '低単価案件も混在'],
                sommelierComment: 'ライティング、デザイン、動画編集など、AIを活用したクリエイティブ案件が豊富。複業にも最適。'
            },
            {
                name: 'ココナラ',
                url: 'https://coconala.com/',
                merits: ['自分のスキルを商品化できる', 'AI活用サービスの需要大', '副業として気軽に始められる'],
                demerits: ['価格競争が激しい', '集客が必要'],
                sommelierComment: '「AIイラスト作成」「AI動画編集」など、あなたの創造性を商品に。ファンを作れば安定収入も。'
            },
            {
                name: 'Workship',
                url: 'https://goworkship.com/',
                merits: ['リモート案件中心', 'フリーランス向けの福利厚生', '週3日〜の柔軟な働き方'],
                demerits: ['実務経験が必要', '競争率が高い'],
                sommelierComment: '複業やフリーランスで自由に働きたいなら。柔軟な契約形態で、あなたらしい働き方を実現できます。'
            }
        ]
    },
    ETHICAL_GUARDIAN: {
        overview: 'AI時代の観測者のあなたには、「置いていかれる不安」を「確信」に変える情報収集が必要です。プロが教えるAI時代の歩き方を学べる場を選びました。',
        routes: [
            {
                name: 'Udemy',
                url: 'https://www.udemy.com/',
                merits: ['AI基礎講座が豊富', '買い切り型で安い', '自分のペースで学習'],
                demerits: ['質のバラつき', '継続が難しい'],
                sommelierComment: 'まずは「AI×〇〇」の講座を1つ受講してみましょう。不安が知識に変わり、次の一歩が見えてきます。'
            },
            {
                name: 'ポジウィル',
                url: 'https://posiwill.jp/',
                merits: ['キャリアコーチングに特化', 'プロが伴走してくれる', '自己理解が深まる'],
                demerits: ['有料サービス', '費用が高め'],
                sommelierComment: '「このままで良いのか」と悩むなら、プロに相談を。AI時代のキャリア戦略を一緒に描けます。'
            },
            {
                name: 'マジキャリ',
                url: 'https://majicari.com/',
                merits: ['転職だけでないキャリア支援', '20-30代に特化', 'オンライン完結'],
                demerits: ['有料', '相性が重要'],
                sommelierComment: '「変わりたいけど何をすれば…」という方に。キャリアのモヤモヤを言語化し、行動計画を立てられます。'
            }
        ]
    },
    LEGACY_KEEPER: {
        overview: 'しなやかなキャリア迷子のあなたには、モヤモヤを自信に変える戦略が必要です。正解がない時代だからこそ、自分だけの「軸」を再発見できる場を選びました。',
        routes: [
            {
                name: 'ポジウィル',
                url: 'https://posiwill.jp/',
                merits: ['キャリアの軸を発見できる', 'プロコーチが伴走', '転職以外の選択肢も見える'],
                demerits: ['有料サービス', '費用対効果の見極めが必要'],
                sommelierComment: '迷子の状態から抜け出したいなら、まずここ。自分の強みや価値観を言語化し、納得のいくキャリアを描けます。'
            },
            {
                name: 'マジキャリ',
                url: 'https://majicari.com/',
                merits: ['自己分析が深まる', '行動計画が明確になる', 'オンラインで気軽に相談'],
                demerits: ['有料', 'コーチとの相性が大事'],
                sommelierComment: '「何がしたいか分からない」を解消する最短ルート。キャリアの棚卸しから一緒に始められます。'
            },
            {
                name: 'リクナビNEXT',
                url: 'https://next.rikunabi.com/',
                merits: ['グッドポイント診断が無料', '自己分析ツールが充実', '求人数が多い'],
                demerits: ['情報量が多すぎる', '自分で選定が必要'],
                sommelierComment: 'まずは無料の診断から。自分の強みが分かると、選ぶべき道が見えてきます。'
            }
        ]
    },
    GLOBAL_NOMAD: {
        overview: 'デジタル・ノマド予備軍のあなたには、国境と言語を越えて地球を「オフィス」にできる環境が必要です。TOEICもAIも武器にする、外資・グローバルな生き方への道を選びました。',
        routes: [
            {
                name: 'JACリクルートメント',
                url: 'https://www.jac-recruitment.jp/',
                merits: ['外資系・グローバル企業に強い', 'ハイクラス案件が豊富', 'コンサルタントの質が高い'],
                demerits: ['ある程度の経験が必要', '求人数は中堅クラス'],
                sommelierComment: '本気でグローバルキャリアを目指すなら最有力。英語力とAIスキルの掛け算で市場価値が爆上がりします。'
            },
            {
                name: 'ロバート・ウォルターズ',
                url: 'https://www.robertwalters.co.jp/',
                merits: ['外資専門', 'バイリンガル求人に特化', '年収アップ率が高い'],
                demerits: ['高い英語力が必須', '選考難易度が高め'],
                sommelierComment: 'TOEIC800点以上なら登録必須。リモートで海外企業と働く案件も増加中です。'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/',
                merits: ['世界最大のビジネスSNS', '海外企業から直接オファー', '英語でのネットワーキング'],
                demerits: ['プロフィール作成が重要', '日本語案件は少ない'],
                sommelierComment: 'グローバル人材への第一歩。英語のプロフィールを充実させれば、世界中からスカウトが届きます。'
            }
        ]
    },
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
