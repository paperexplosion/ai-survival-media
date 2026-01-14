import { Question, DiagnosticResult, CareerType, AffiliateLink, DynamicCTA, SommelierRecommendation, HiddenList } from '@/types';

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
    DATA_ALCHEMIST: {
        overview: 'データを金に変えるあなたの錬金術は、今の場所では正しく評価されていない。ここは、年収1,500万を「最低ライン」として動くプロの戦場だ。',
        routes: [
            {
                name: 'MyVision',
                url: '#',
                merits: ['コンサル転職に特化、創業者が内情を熟知', '書類通過率90%', '年収1500万超案件保有'],
                demerits: ['未経験にはハードルが高い', '選考対策が非常に厳しい'],
                sommelierComment: 'あなたの錬金術をコンサル用語に正しく翻訳し、最高値で売るための最短ルートだ。'
            },
            {
                name: 'AXIS Agent',
                url: '#',
                merits: ['IT上流工程に強い、非公開求人77%', '大手・外資PM枠に強い', '3年間の長期サポート'],
                demerits: ['地方案件が少なめ', '若手向けよりは中堅以上向け'],
                sommelierComment: '表に出ない「AI戦略室」の椅子を確保するには、独自のネットワークを持つここが最適だ。'
            },
            {
                name: 'LHH転職',
                url: '#',
                merits: ['グローバル展開、世界60拠点', '平均101万の年収アップ実績', '360度式コンサル'],
                demerits: ['英語力が一定以上求められる', 'ドライな対応と感じる場合もある'],
                sommelierComment: '日本の物差しではなく、世界標準の市場価値であなたを再定義してくれる。'
            }
        ]
    },
    ENDANGERED_WORKER: {
        overview: '組織の寿命が、あなたの定年より先に尽きる。その足音が聞こえているはずだ。今必要なのは「安心」ではなく、会社という盾がなくなった瞬間に食っていける「個の武器」だ。',
        routes: [
            {
                name: 'Famm',
                url: '#',
                merits: ['Webデザイン、1ヶ月で完結', '卒業後に「5件の仕事」を保証', '未経験特化'],
                demerits: ['あくまで基礎習得', '高度な開発スキルは学べない'],
                sommelierComment: 'スキルより先に「1円を稼ぐ成功体験」を物理的に提供してくれる。脱出の恐怖を消すためだ。'
            },
            {
                name: 'DMM 生成AI CAMP',
                url: '#',
                merits: ['AI実践、事務作業をAIで自動化', '現役エンジニアが並走', 'ビジネス活用特化'],
                demerits: ['自分で手を動かす意欲が必要', '資格取得が目的ではない'],
                sommelierComment: '浮いた時間で「次の稼ぎ」を構築する。自動化の極意は、あなたの生存率を飛躍的に高める。'
            },
            {
                name: 'デジハク',
                url: '#',
                merits: ['動画編集、300本以上の教材', 'マンツーマン添削', '実案件紹介あり'],
                demerits: ['動画PCのスペックが必要', '継続的な制作体力が必要'],
                sommelierComment: '市場が拡大し続ける動画領域で、会社に依存しない自由への切符をその手で掴み取れ。'
            }
        ]
    },
    AI_MASTER: {
        overview: 'あなたは現場の作業者ではない。盤面を俯瞰し、組織という巨体を動かすことで最大出力を出すタイプだ。その知略を最も高く買う場所で勝負すべきだ。',
        routes: [
            {
                name: 'MyVision',
                url: '#',
                merits: ['戦略コンサルへの最短距離、戦略立案の内情を知るアドバイザー', 'ポストコンサル案件に強い', '選考対策の質が圧倒的'],
                demerits: ['地頭の良さを厳しく問われる', '激務な案件も含まれる'],
                sommelierComment: '戦略コンサルへの最短距離。あなたの軍師としての資質を正当に評価してくれる。'
            },
            {
                name: 'AXIS Agent',
                url: '#',
                merits: ['ハイクラスIT、外資・大手のDX中枢案件', '上流工程から組織を動かすポジション', '独自ネットワーク'],
                demerits: ['30代以上がメインボリューム', '専門スキルが前提'],
                sommelierComment: '実務の沼から抜け出し、参謀としての地位を確立するならここが適任だ。'
            },
            {
                name: 'M&Aキャリア',
                url: '#',
                merits: ['M&A、平均年収1000万超', '企業の買収・売却という究極の戦場', '未経験から挑戦可能'],
                demerits: ['成果主義が極めて強い', '専門知識の習得が必須'],
                sommelierComment: '戦略家にとっての最高峰。あなたの決断が数億、数十億の価値を生む世界。'
            }
        ]
    },
    REALITY_BRIDGER: {
        overview: 'AIはあなたの感性を殺さない。むしろ、あなたの想像力を現実に定着させるための「無敵の筆」になる。今必要なのは、その筆を使いこなし「稼げる実績」を作ることだ。',
        routes: [
            {
                name: 'Famm',
                url: '#',
                merits: ['Webデザイン、1ヶ月短期集中', '卒業後5件の案件保証', '初心者でも挫折しない設計'],
                demerits: ['基礎の習得がメイン', '複雑なシステム開発は対象外'],
                sommelierComment: '実績ゼロの不安を、物理的な「仕事」で強制的に上書きし、プロへの一歩を固める。'
            },
            {
                name: 'デジハク',
                url: '#',
                merits: ['動画編集、現役プロによるマンツーマン添削', '300本以上の教材', '商用レベルの技術習得'],
                demerits: ['継続的な制作体力が必要', 'PCスペックが必須'],
                sommelierComment: 'あなたの感性を市場価値のある動画に変換する。並走者がいるから迷わずに済む。'
            },
            {
                name: 'メイカラ',
                url: '#',
                merits: ['AIクリエイティブ、生成AIを核にした制作学習', 'デザイン×ライティングの統合環境', '最先端のAI活用'],
                demerits: ['独自性が強いため、伝統的な手法のみを学びたい人には不向き'],
                sommelierComment: 'AIというチート級の武器を使いこなし、独占的な表現者の地位を築くための環境。'
            }
        ]
    },
    DIGITAL_ARTISAN: {
        overview: 'プロンプト1行で企業の運命を変える。あなたはそんな「現代の魔術師」の素養がある。特定のツールを「使う」のではなく、「乗りこなす」本質を掴め。',
        routes: [
            {
                name: 'DMM 生成AI CAMP',
                url: '#',
                merits: ['AI実践、現役エンジニアから直接学べる', 'ビジネスの即戦力化に特化', '実践的なアウトプット重視'],
                demerits: ['常に最新を追い続ける自己学習が必要', '受講料が一定かかる'],
                sommelierComment: 'ツールに使われるな。AIの本質を理解し、企業の課題を解決する「職人」になれ。'
            },
            {
                name: 'メイカラ',
                url: '#',
                merits: ['AI多能工、デザイン・ライティング・AIを統合', '多角的な収益源の構築', 'コミュニティの質'],
                demerits: ['幅広いため、一つの技術を深く掘るには自学が必要'],
                sommelierComment: '「AI×多能工」としての価値を確立する。複数のスキルを掛け合わせ、替えの効かない存在へ。'
            },
            {
                name: 'Anycrew',
                url: '#',
                merits: ['副業紹介、週1日から稼働可能', '信頼ベースの案件プラットフォーム', 'リモート案件多数'],
                demerits: ['案件ごとの倍率が高い場合がある', '自己管理能力が問われる'],
                sommelierComment: 'あなたの魔術（プロンプト）を、まずは副業という実戦の場で現金に変える第一歩。'
            }
        ]
    },
    INNOVATION_ARCHITECT: {
        overview: 'アイデアを形にする「筆」を極めろ。作業者で終わるか、自分のプロダクトで世界をハックするか。その分岐点にいるあなたに、高精細な技術スタックを提示する。',
        routes: [
            {
                name: 'RareTECH',
                url: '#',
                merits: ['Web開発、React/Python等のモダン技術特化', '圧倒的な学習密度', '高単価案件への直結路'],
                demerits: ['学習難易度が非常に高い', '覚悟がないと挫折する'],
                sommelierComment: '案件単価の高さが教育の質を証明している。本気で「創る側」に回るならここだ。'
            },
            {
                name: 'ディープロ',
                url: '#',
                merits: ['Python特化、AI・機械学習エンジニアへの登竜門', '実践的な開発プロジェクト', '徹底した現場主義'],
                demerits: ['プログラミング未経験者には厳しい初期負荷', '英語のドキュメント読解が必要'],
                sommelierComment: 'AIの心臓部（Python）を掴む。未経験からでもAI開発の深部に潜り込む最短ルート。'
            },
            {
                name: 'ポテパンフリーランス',
                url: '#',
                merits: ['案件獲得、平均単価80万円の高単価案件', '稼働後も継続サポート', 'Ruby/Rails等のモダン環境'],
                demerits: ['実務経験が一定以上必要', '市場価値をシビアに問われる'],
                sommelierComment: 'スキルは十分。あとは「値付け」だ。会社員の年収を数ヶ月で超える世界へ。'
            }
        ]
    },
    COMMUNITY_WEAVER: {
        overview: '部下としてのAIを使いこなし、ゆとりあるマネジメントを実現する。AI時代のリーダーに求められるのは、技術への理解と、人間ならではの対話力だ。',
        routes: [
            {
                name: 'AXIS Agent',
                url: '#',
                merits: ['DX・IT転職、DX推進リーダー枠に強い', 'モダンな組織への橋渡し', 'キャリアの棚卸し支援'],
                demerits: ['地方案件が少なめ', '伝統的な企業求人は少ない'],
                sommelierComment: 'あなたの共生スキルを「DX推進」という市場価値の高い言語に翻訳してくれる。'
            },
            {
                name: 'DMM 生成AI CAMP',
                url: '#',
                merits: ['AI実践、チームの生産性を劇的に向上させる方法論', '現役プロの知見', '実践型カリキュラム'],
                demerits: ['組織導入には個人の努力が必要', '管理職向けの特化コースではない'],
                sommelierComment: 'リーダー自らがAIの限界を知る。それが、真の「AI共生組織」を設計する力になる。'
            },
            {
                name: 'ポジウィル',
                url: '#',
                merits: ['キャリアコーチ、自己分析を通じて「自分の軸」を再定義', 'プロとの濃密な対話', '意思決定の質向上'],
                demerits: ['転職を直接斡旋するわけではない', '費用が自己投資として必要'],
                sommelierComment: 'AI時代だからこそ、あなた自身の指針を明確にする。部下を導くための、揺るぎない背中を作れ。'
            }
        ]
    },
    SUSTAINABLE_STRATEGIST: {
        overview: '事務を自動化し、余った時間を「付加価値」に変えろ。効率化のプロとしての証明を手に入れることで、誰でもできる仕事から、あなたにしかできない仕事へ。',
        routes: [
            {
                name: 'スタディング',
                url: '#',
                merits: ['資格取得、AIが学習をアシスト', '業界最安値クラス', 'スマホで最短合格を目指せる'],
                demerits: ['テキストの紙媒体は別売り', '講師との対面指導はない'],
                sommelierComment: 'IT・会計資格をAIで爆速で取る。効率化のプロとしての最初の証明を手に入れろ。'
            },
            {
                name: 'LHH転職',
                url: '#',
                merits: ['事務・ハイクラス、企画力や効率化を評価する企業を見抜く', '世界最大級のネットワーク', '高年収事務'],
                demerits: ['英語力が加点要素になることが多い', '求められるレベルが高い'],
                sommelierComment: '浮いた時間を「付加価値」に変えられる環境へ。事務職の概念を壊す転職。'
            },
            {
                name: 'マジキャリ',
                url: '#',
                merits: ['自己分析、事務スキルの言語化に強い', '内定率100％の安心感', '徹底したキャリア棚卸し'],
                demerits: ['費用がかかる', '本気での自己開示が求められる'],
                sommelierComment: '「事務＝誰でもできる」という誤解を解く。あなたの効率化スキルに正当な値を付ける場。'
            }
        ]
    },
    GIG_SURVIVOR: {
        overview: '表現の幅を広げ、複数の収益源を持て。AIという武器を手に入れた表現者は、組織に属さずとも独力でサバイバルできる力を手に入れられる。',
        routes: [
            {
                name: 'デジハク',
                url: '#',
                merits: ['動画編集、300本以上の教材で多角的な技術習得', 'マンツーマン添削', '商用案件の獲得支援'],
                demerits: ['一定の継続力が必要', '機材投資が伴う'],
                sommelierComment: '今ある表現力に、動画という武器を。AIと動画の相乗効果で「稼ぐ表現者」へ。'
            },
            {
                name: 'Famm',
                url: '#',
                merits: ['Webデザイン、1ヶ月で基礎を固め5件の案件保証', '実績作りの最短距離', '未経験から独立'],
                demerits: ['高度なプログラミングは対象外', 'デザインに特化'],
                sommelierComment: 'ロジカルな表現力を手に入れる。選ばれるクリエイターになるための、最初の5つの実績。'
            },
            {
                name: 'メイカラ',
                url: '#',
                merits: ['Web・AI総合、ライティング・デザイン・AIを統合学習', 'コミュニティでの協業', '多能工化'],
                demerits: ['カリキュラムが多岐にわたるため、優先順位付けが必要'],
                sommelierComment: '替えの効かない個人になる。複数のスキルを掛け合わせ、サバイバル能力を極大化せよ。'
            }
        ]
    },
    ETHICAL_GUARDIAN: {
        overview: '変化を静かに見守り、スキマ時間で牙を研げ。AI時代の基礎体力をつけ、まずはリスクを抑えながらスマホ1台で「学びの習慣」という武器を手に入れるんだ。',
        routes: [
            {
                name: 'スタディング',
                url: '#',
                merits: ['資格、業界最安値クラス', 'AI学習機能が充実', 'スマホ1台で完結'],
                demerits: ['対面での強制力はない', '自己管理が鍵'],
                sommelierComment: 'スキマ時間で牙を研ぐ。リスクを負わずに、自分の価値を証明するカード（資格）を持て。'
            },
            {
                name: 'ネイティブキャンプ',
                url: '#',
                merits: ['語学、レッスン回数無制限', '24時間即受講可能', '世界中の講師と対話'],
                demerits: ['予約が必要な講師もいる', '自己流になりやすい'],
                sommelierComment: '最後の信頼は「肉声」に宿る。AI情報を一次情報（英語）で取り、生き残る力を。'
            },
            {
                name: 'ポジウィル',
                url: '#',
                merits: ['コーチング、「観察」を「確信」に変える対話', '自己分析の深掘り', '20-30代に圧倒的支持'],
                demerits: ['安くはない受講料', '行動への覚悟が必要'],
                sommelierComment: '動けないのは意志が弱いからではない。現在地が見えていないだけだ。プロと地図を描け。'
            }
        ]
    },
    LEGACY_KEEPER: {
        overview: '迷いながら、進め。転職を急ぐ必要はない。まずは自分のモヤモヤを言語化し、進むべき方向を指し示す。その「学びの習慣」が、迷いに対する最高の処方箋になる。',
        routes: [
            {
                name: 'ポジウィル',
                url: '#',
                merits: ['コーチング、「どう生きたいか」の棚卸し', '転職ありきではない支援', '深い自己受容'],
                demerits: ['枠が埋まりやすい', '精神的な負荷も伴う'],
                sommelierComment: '迷いを自信に変える。20-30代の迷いに特化した伴走者が、あなたの軸を再定義する。'
            },
            {
                name: 'マジキャリ',
                url: '#',
                merits: ['自己分析、内定率100％の「安心転職コース」', '10年以上の支援ノウハウ', '強みの再発掘'],
                demerits: ['費用対効果を出すには本人の努力が必須', '厳しいフィードバックもある'],
                sommelierComment: '迷いを「具体的な内定」という解決策に変える。プロのノウハウで確実に一歩前へ。'
            },
            {
                name: 'スタディング',
                url: '#',
                merits: ['学習、何かを学んでいるという事実が自信になる', 'AI効率学習', '低コスト'],
                demerits: ['モチベーション維持が課題', '資格取得がゴールになりがち'],
                sommelierComment: '手を動かせば、不安は消える。AI効率学習で、気づかなかった「得意」を掘り起こせ。'
            }
        ]
    },
    GLOBAL_NOMAD: {
        overview: '世界を、仕事場にしろ。国境を越えるための必須装備を整えろ。場所を選ばない働き方を手に入れ、世界中どこでも働ける「自活する手応え」を掴み取るんだ。',
        routes: [
            {
                name: 'ネイティブキャンプ',
                url: '#',
                merits: ['語学、レッスン回数無制限', '世界140ヶ国以上の講師', '24時間受講可能'],
                demerits: ['回線状況に左右される', '講師の質にバラつきがある'],
                sommelierComment: '英語の海に浸かり、言葉の壁を破壊しろ。AIを使いこなすための英語力もここで。'
            },
            {
                name: 'ポテパンフリーランス',
                url: '#',
                merits: ['フリーランス、平均単価80万', '場所を選ばない働き方の実現', 'エンジニア案件特化'],
                demerits: ['確かな実務経験が前提', '英語案件は少なめ'],
                sommelierComment: '海外で暮らすための強力な資金源を確保しろ。フリーランスとしての自由を掴む。'
            },
            {
                name: 'Famm',
                url: '#',
                merits: ['デザイン、1ヶ月で基礎を固め5件の案件保証', 'ノマドとしての自活体験', '短期集中'],
                demerits: ['デザインソフトの月額費用がかかる', '自宅以外の環境整備が必要'],
                sommelierComment: 'ノマドとしての「最初の手応え」を。1ヶ月で、世界中どこでも稼げる筆を持て。'
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

export const HIDDEN_LISTS: Record<CareerType, HiddenList> = {
    DATA_ALCHEMIST: {
        options: [
            { name: 'ビズリーチ', feature: 'ハイクラス転職の定番、スカウト型で年収1000万超も狙える', url: '#' },
            { name: 'リクルートダイレクトスカウト', feature: '大手リクルート運営、ハイクラス特化で安心感', url: '#' },
            { name: 'JACリクルートメント', feature: '外資・グローバル企業に強い、コンサルタントの質が高い', url: '#' },
            { name: 'doda', feature: '求人数最大級、幅広い業界をカバー', url: '#' },
            { name: 'Green', feature: 'IT/Web業界特化、カジュアル面談が気軽', url: '#' },
            { name: 'Wantedly', feature: 'ベンチャー・スタートアップに強い、企業文化を重視', url: '#' },
            { name: 'リクルートエージェント', feature: '転職支援実績No.1、非公開求人多数', url: '#' },
            { name: 'type転職エージェント', feature: '首都圏のIT・営業職に強い、丁寧なサポート', url: '#' },
            { name: 'エンワールド', feature: '外資系・グローバル企業専門、年収800万以上', url: '#' },
            { name: 'ロバート・ウォルターズ', feature: 'バイリンガル求人特化、高年収案件多数', url: '#' },
        ]
    },
    ENDANGERED_WORKER: {
        options: [
            { name: 'Udemy', feature: '実務スキルを短期習得、買い切り型で安価', url: '#' },
            { name: 'クラウドワークス', feature: '副業・在宅ワークの定番、実績を積める', url: '#' },
            { name: 'ランサーズ', feature: 'フリーランス案件豊富、認定制度あり', url: '#' },
            { name: 'ココナラ', feature: 'スキルを商品化、副業として始めやすい', url: '#' },
            { name: 'テックアカデミー', feature: 'プログラミング学習、現役エンジニアがメンター', url: '#' },
            { name: 'DMM WEBCAMP', feature: '転職保証付きプログラミングスクール', url: '#' },
            { name: 'SHElikes', feature: '女性向けキャリアスクール、全32種のコース', url: '#' },
            { name: 'ストアカ', feature: 'スキルシェア、対面・オンライン講座多数', url: '#' },
            { name: 'Schoo', feature: 'ビジネススキル学習、生放送授業が無料', url: '#' },
            { name: 'グロービス学び放題', feature: 'MBAの知識を定額で、ビジネス基礎から学べる', url: '#' },
        ]
    },
    AI_MASTER: {
        options: [
            { name: 'ビズリーチ', feature: 'エグゼクティブ層向け、年収1000万超の求人多数', url: '#' },
            { name: 'リクルートダイレクトスカウト', feature: 'ハイクラス特化、大手企業のスカウト', url: '#' },
            { name: 'アサイン', feature: '20-30代ハイエンド層特化、コンサル転職に強い', url: '#' },
            { name: 'コトラ', feature: '金融・コンサル・IT特化、業界特化型', url: '#' },
            { name: 'ムービン', feature: 'コンサル転職専門、内定率が高い', url: '#' },
            { name: 'アンテロープ', feature: 'コンサル・ポストコンサル特化', url: '#' },
            { name: 'プロコミット', feature: 'ベンチャー・スタートアップの幹部候補', url: '#' },
            { name: 'キープレイヤーズ', feature: 'スタートアップ転職、創業者との直接面談', url: '#' },
            { name: 'エンワールド', feature: '外資系ハイクラス、グローバル人材', url: '#' },
            { name: 'クライス&カンパニー', feature: 'マネージャー・経営幹部案件に強い', url: '#' },
        ]
    },
    REALITY_BRIDGER: {
        options: [
            { name: 'クリエイターズマッチ', feature: 'クリエイター特化、ポートフォリオ重視', url: '#' },
            { name: 'マスメディアン', feature: '広告・Web・マスコミ業界特化', url: '#' },
            { name: 'レバテッククリエイター', feature: 'Web・ゲーム業界のクリエイター案件', url: '#' },
            { name: 'ワークポート', feature: 'IT・クリエイティブ職に強い', url: '#' },
            { name: 'Cinematoday', feature: '映像クリエイター特化、業界人脈豊富', url: '#' },
            { name: 'TechStars Agent', feature: 'IT・Web・ゲーム業界専門', url: '#' },
            { name: 'シリコンスタジオエージェント', feature: 'ゲーム・映像業界専門', url: '#' },
            { name: 'パソナキャリア', feature: 'クリエイティブ職のサポートが手厚い', url: '#' },
            { name: 'ギークリー', feature: 'IT・Web・ゲーム業界特化', url: '#' },
            { name: 'マイナビクリエイター', feature: 'Web・ゲーム業界専門、ポートフォリオ作成支援', url: '#' },
        ]
    },
    DIGITAL_ARTISAN: {
        options: [
            { name: 'レバテックフリーランス', feature: '高単価案件多数、エージェントのサポート充実', url: '#' },
            { name: 'ギークスジョブ', feature: 'フリーランスITエンジニア特化、平均年収800万超', url: '#' },
            { name: 'PE-BANK', feature: 'フリーランス案件、マージン率公開', url: '#' },
            { name: 'フォスターフリーランス', feature: 'IT案件特化、非公開案件多数', url: '#' },
            { name: 'Midworks', feature: '正社員並みの保障、フリーランス向け', url: '#' },
            { name: 'クラウドテック', feature: 'リモート案件豊富、福利厚生充実', url: '#' },
            { name: 'ITプロパートナーズ', feature: '週2-3日からOK、柔軟な働き方', url: '#' },
            { name: 'テクフリ', feature: '高単価・直請け案件多数', url: '#' },
            { name: 'フリエン', feature: '友人紹介で報酬、案件の質が高い', url: '#' },
            { name: 'テックビズフリーランス', feature: '独立サポート充実、税務・確定申告も支援', url: '#' },
        ]
    },
    INNOVATION_ARCHITECT: {
        options: [
            { name: 'テックアカデミー', feature: 'プログラミングスクール、転職サポート付き', url: '#' },
            { name: 'RUNTEQ', feature: 'Web系開発企業が運営、実務レベルのスキル習得', url: '#' },
            { name: 'DIVE INTO CODE', feature: '機械学習・Webエンジニア育成、就職達成プログラム', url: '#' },
            { name: 'CodeCamp', feature: 'マンツーマンレッスン、現役エンジニア講師', url: '#' },
            { name: 'tech boost', feature: 'エンジニアのキャリア支援、メンタリング充実', url: '#' },
            { name: 'GEEK JOB', feature: '無料プログラミング学習、就職支援付き', url: '#' },
            { name: 'Aidemy', feature: 'AI・データサイエンス特化', url: '#' },
            { name: 'PyQ', feature: 'Python学習プラットフォーム', url: '#' },
            { name: 'Progate', feature: 'プログラミング初学者向け、ゲーム感覚で学べる', url: '#' },
            { name: 'ドットインストール', feature: '動画で学ぶプログラミング', url: '#' },
        ]
    },
    COMMUNITY_WEAVER: {
        options: [
            { name: 'パソナキャリア', feature: '女性の転職に強い、ワークライフバランス重視', url: '#' },
            { name: 'リブズキャリア', feature: 'キャリア女性特化、リモートワーク案件多数', url: '#' },
            { name: 'type女性の転職エージェント', feature: '女性向けサポート、面接メイク指導も', url: '#' },
            { name: 'MS-Japan', feature: '管理部門・士業特化', url: '#' },
            { name: 'ワークポート', feature: 'IT・営業職に強い、未経験転職サポート', url: '#' },
            { name: 'マイナビエージェント', feature: '20-30代の転職に強い、サポートが丁寧', url: '#' },
            { name: 'Spring転職エージェント', feature: 'アデコ運営、グローバル企業に強い', url: '#' },
            { name: 'ランスタッド', feature: '外資・グローバル企業、年収800万以上', url: '#' },
            { name: 'エンエージェント', feature: '性格診断付き、適性を重視した転職支援', url: '#' },
            { name: 'ハタラクティブ', feature: '20代特化、未経験からの正社員就職', url: '#' },
        ]
    },
    SUSTAINABLE_STRATEGIST: {
        options: [
            { name: 'MOS（Microsoft Office Specialist）', feature: 'Office系資格の定番、事務職で有利', url: '#' },
            { name: '日商簿記', feature: '経理・財務の基本資格', url: '#' },
            { name: 'TOEIC', feature: '英語力の証明、グローバル企業で評価', url: '#' },
            { name: 'ITパスポート', feature: 'IT基礎知識の国家資格', url: '#' },
            { name: '秘書検定', feature: 'ビジネスマナー・接遇スキルの証明', url: '#' },
            { name: 'ビジネス実務法務検定', feature: '法務知識、コンプライアンス対応', url: '#' },
            { name: 'ファイナンシャルプランナー（FP）', feature: '金融・保険業界で有利', url: '#' },
            { name: '中小企業診断士', feature: '経営コンサルの国家資格', url: '#' },
            { name: '宅地建物取引士', feature: '不動産業界必須の国家資格', url: '#' },
            { name: 'Google デジタルワークショップ', feature: 'デジタルマーケティングの基礎、無料', url: '#' },
        ]
    },
    GIG_SURVIVOR: {
        options: [
            { name: 'SKIMA', feature: 'イラスト・デザイン販売、クリエイター向け', url: '#' },
            { name: 'note', feature: 'コンテンツ販売、記事・マガジン収益化', url: '#' },
            { name: 'BASE', feature: 'ネットショップ作成、手数料が安い', url: '#' },
            { name: 'STORES', feature: 'ネットショップ・予約システム', url: '#' },
            { name: 'pixiv FANBOX', feature: 'クリエイター支援、ファンからの定期収入', url: '#' },
            { name: 'Patreon', feature: '海外クリエイター支援プラットフォーム', url: '#' },
            { name: 'Vimeo', feature: '動画販売・配信プラットフォーム', url: '#' },
            { name: 'Udemy講師', feature: '動画講座を販売、不労所得化', url: '#' },
            { name: 'Kindle出版', feature: '電子書籍セルフ出版、印税収入', url: '#' },
            { name: 'Brain', feature: 'デジタルコンテンツ販売、アフィリエイト機能', url: '#' },
        ]
    },
    ETHICAL_GUARDIAN: {
        options: [
            { name: 'Coursera', feature: '世界トップ大学の講座、認定証あり', url: '#' },
            { name: 'edX', feature: 'MITやハーバード大の講座、無料受講可', url: '#' },
            { name: 'gacco', feature: '日本の大学講座、無料で学べる', url: '#' },
            { name: 'Schoo', feature: '生放送授業、ビジネススキル全般', url: '#' },
            { name: 'Skillshare', feature: 'クリエイティブ系スキル、定額見放題', url: '#' },
            { name: 'LinkedIn Learning', feature: 'ビジネス・IT系講座、LinkedIn連携', url: '#' },
            { name: 'Pluralsight', feature: 'IT・テクノロジー特化、エンジニア向け', url: '#' },
            { name: 'Khan Academy', feature: '無料教育プラットフォーム、数学・科学', url: '#' },
            { name: 'TED-Ed', feature: '教育動画、短時間で学べる', url: '#' },
            { name: 'Google Skillshop', feature: 'Google製品の無料トレーニング', url: '#' },
        ]
    },
    LEGACY_KEEPER: {
        options: [
            { name: 'キャリアコーチング協会', feature: '認定コーチとの面談、自己理解を深める', url: '#' },
            { name: 'ストレングスファインダー', feature: '強み診断、自分の才能を発見', url: '#' },
            { name: 'グッドポイント診断（リクナビNEXT）', feature: '無料の強み診断、転職活動に活用', url: '#' },
            { name: 'キャリアインデックス', feature: '複数の転職サイトを一括検索', url: '#' },
            { name: 'VIEW', feature: 'AIキャリア診断、適職を提案', url: '#' },
            { name: 'ミイダス', feature: '市場価値診断、年収査定', url: '#' },
            { name: 'ASSIGN', feature: 'AIキャリアシミュレーション', url: '#' },
            { name: 'カイゴジョブ', feature: '介護業界特化、資格取得支援', url: '#' },
            { name: 'ナース人材バンク', feature: '看護師転職、病院情報が豊富', url: '#' },
            { name: 'ファーマキャリア', feature: '薬剤師転職、オーダーメイド求人', url: '#' },
        ]
    },
    GLOBAL_NOMAD: {
        options: [
            { name: 'DMM英会話', feature: 'オンライン英会話、24時間レッスン可能', url: '#' },
            { name: 'レアジョブ', feature: '業界最大手、ビジネス英語に強い', url: '#' },
            { name: 'Cambly', feature: 'ネイティブ講師、予約不要で即レッスン', url: '#' },
            { name: 'EF English Live', feature: 'グループ・マンツーマン併用、24時間対応', url: '#' },
            { name: 'ベルリッツ', feature: 'ビジネス英語特化、対面・オンライン', url: '#' },
            { name: 'プログリット', feature: '英語コーチング、短期集中で成果', url: '#' },
            { name: 'トライズ', feature: '1年で英語習得、専属コンサルタント', url: '#' },
            { name: 'スタディサプリENGLISH', feature: 'アプリで学習、隙間時間に最適', url: '#' },
            { name: 'Duolingo', feature: 'ゲーム感覚で語学学習、無料', url: '#' },
            { name: 'Rosetta Stone', feature: '母国語を使わない学習法、多言語対応', url: '#' },
        ]
    },
};
