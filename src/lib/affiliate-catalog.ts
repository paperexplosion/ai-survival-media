import { CareerType } from '@/types';

export interface AffiliateCatalogItem {
    targetType: CareerType;
    service: string;
    title: string;
    analysis: string;
    url: string;
}

export const AFFILIATE_CATALOG: AffiliateCatalogItem[] = [
    // AI_MASTER
    {
        targetType: "AI_MASTER",
        service: "MyVision",
        title: "最高峰の対策を誇る『MyVision』で、戦略コンサルへの切符を掴む「エリート軍師」へと進化する",
        analysis: "AIを自在に操る軍師にとって、戦略的思考の頂点であるコンサルへの転身は自然な流れだ。MyVisionの徹底した対策は、その知性を市場価値へと正当に変換する確かな手段となる。",
        url: "https://af.moshimo.com/af/c/click?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690"
    },
    {
        targetType: "AI_MASTER",
        service: "東京AIスクール",
        title: "横断的スキルの『東京AIスクール』で、AIを顎で使う「次世代の指揮官」へと進化する",
        analysis: "単発のツールに終始するのではなく、文章から動画までAIを横断的に制御する術が必要だ。ビジネス全体を俯瞰し、最適化を主導する真のマスターを目指すのが賢明といえる。",
        url: "https://t.felmat.net/fmcl?ak=O116760.2.2146204_1.K133474M"
    },
    {
        targetType: "AI_MASTER",
        service: "コトラ",
        title: "プロに寄り添う『コトラ』で、年収2,000万超えのハイクラス層へと進化する",
        analysis: "金融・IT・コンサルの専門領域に精通したコトラは、あなたの希少性を正しく評価する。年収2,000万の壁を突破し、選ばれし者としての地位を確立する時が来ている。",
        url: "https://af.moshimo.com/af/c/click?a_id=5337707&p_id=3316&pc_id=7865&pl_id=47212"
    },

    // DATA_ALCHEMIST
    {
        targetType: "DATA_ALCHEMIST",
        service: "MyVision",
        title: "独自求人を武器にする『MyVision』で、コンサルファームの核心を突く「ハイエンド分析官」へと進化する",
        analysis: "数字の背後にある意味を読み解くあなたには、経営を動かす舞台が相応しい。MyVisionの独自求人を活用し、分析を戦略へと昇華させる道が拓ける。",
        url: "https://af.moshimo.com/af/c/click?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690"
    },
    {
        targetType: "DATA_ALCHEMIST",
        service: "明光キャリア(ハイクラス)",
        title: "戦略の核心を突く『明光キャリア』で、企業の運命を握る「ハイエンド・データアナリスト」へと進化する",
        analysis: "高度な分析力が企業の生死を分ける。明光のハイクラス案件を通じて、経営の羅針盤としての地位を確固たるものにできるはずだ。",
        url: "https://t.felmat.net/fmcl?ak=N10191F.1.Y145579R.K133474M"
    },

    // ENDANGERED_WORKER
    {
        targetType: "ENDANGERED_WORKER",
        service: "AI×Webマーケ(DXUP)",
        title: "経産省補助金対象の『DXUP』で、事務作業を自動化する「AI効率化マスター」へと進化する",
        analysis: "AIの波に飲まれる前に、自ら火を操る術を身につける必要がある。AIで定型業務を殲滅し、希少な「設計する側」へ一刻も早く移行するのが賢明だ。",
        url: "https://t.felmat.net/fmcl?ak=W11267M.1.E1551635.K133474M"
    },
    {
        targetType: "ENDANGERED_WORKER",
        service: "DMM WEBCAMP",
        title: "本気で変わるための『DMM WEBCAMP』で、未来を創る「エンジニア」へと進化する",
        analysis: "現状維持は最大のリスクとなる。不退転の決意でコードを学び、AIに消費される側からシステムを構築する側へ人生をリセットすべき時だ。",
        url: "https://t.felmat.net/fmcl?ak=I1787O.1.O36364V.K133474M"
    },
    {
        targetType: "ENDANGERED_WORKER",
        service: "GeekSalon",
        title: "才能を開花させる『GeekSalon』で、アプリ開発を極める「若きイノベーター」へと進化する",
        analysis: "若さという資産を浪費してはならない。GeekSalonでアプリ開発を叩き込み、AI時代の開拓者としての切符を掴むのが得策となる。",
        url: "https://t.felmat.net/fmcl?ak=J3522B.1.N68754X.K133474M"
    },
    {
        targetType: "ENDANGERED_WORKER",
        service: "はじめてのプログラミング",
        title: "初心者向けの『はじめてのプログラミング』で、技術を武器にする「実践型エンジニア」へと進化する",
        analysis: "基礎から技術を武器化し、自分の足で立てる状態を目指す。背中を焼かれる恐怖を、新しい自分に生まれ変わるためのエネルギーに変えるべきだ。",
        url: "https://t.felmat.net/fmcl?ak=J16536.1.P1238878.K133474M"
    },

    // DIGITAL_ARTISAN
    {
        targetType: "DIGITAL_ARTISAN",
        service: "RareTECH",
        title: "本質を極める『RareTECH』で、AIに代替不可能な「希少型エンジニア」へと進化する",
        analysis: "表面的なスキルはAIに代替されるが、コンピュータサイエンスの根幹は不変だ。RareTECHで本質を極め、誰にも模倣できない職人としての地位を築くべきだ。",
        url: "https://t.felmat.net/fmcl?ak=H9198H.1.E1354486.K133474M"
    },
    {
        targetType: "DIGITAL_ARTISAN",
        service: "SAPテンショク",
        title: "システムを守る『SAPテンショク』で、世界標準を支える「絶対的技術者」へと進化する",
        analysis: "世界を支える基幹システムの職人という道は、AI時代においても揺るぎない城壁となる。SAPという専門領域を極め、強固なキャリアを構築するのが賢明だ。",
        url: "https://t.felmat.net/fmcl?ak=N10547R.1.X1485041.K133474M"
    },
    {
        targetType: "DIGITAL_ARTISAN",
        service: "SAPフリーランスバンク",
        title: "システムを守る『SAPフリーランスバンク』で、世界標準を支える「絶対的技術者」へと進化する",
        analysis: "腕一本で大企業を支える自負があるなら、SAP特化の案件は最適だ。職人としての自由度を保ちつつ、最高峰の報酬を両立させることができる。",
        url: "https://t.felmat.net/fmcl?ak=R10331F.1.H146814T.K133474M"
    },

    // INNOVATION_ARCHITECT
    {
        targetType: "INNOVATION_ARCHITECT",
        service: "デジレカ",
        title: "現場主義の『デジレカ』で、仕組みを設計し社会を動かす「マーケティング建築家」へと進化する",
        analysis: "既存の枠組みを疑い、新しい集客の仕組みを再定義するのがあなたの役割だ。デジレカでデータと心理を掛け合わせ、真の設計力を発揮するのが理想的といえる。",
        url: "https://t.felmat.net/fmcl?ak=D109718.1.4152406S.K133474M"
    },
    {
        targetType: "INNOVATION_ARCHITECT",
        service: "foRPro",
        title: "最高峰を繋ぐ『foRPro』で、高単価を主導する「独立系ハイエンドコンサルタント」へと進化する",
        analysis: "組織を俯瞰し変革を設計する。foRProの高単価案件を通じて、あなたの建築家としての視座を社会に実装し、確かな手応えを掴むべき時が来ている。",
        url: "https://t.felmat.net/fmcl?ak=Q6627F.1.Q106776G.K133474M"
    },

    // SUSTAINABLE_STRATEGIST
    {
        targetType: "SUSTAINABLE_STRATEGIST",
        service: "ファイナンシャルアカデミー",
        title: "本質を授ける『ファイナンシャルアカデミー』で、一生困らない「永続の戦略家」へと進化する",
        analysis: "労働に依存しない基盤を築く。金融教養を戦略的に身につけ、AIによる変革期を「静観できる強者」として生き抜くのが賢明な判断だ。",
        url: "https://t.felmat.net/fmcl?ak=C2839G.1.K620327.K133474M"
    },

    // ETHICAL_GUARDIAN
    {
        targetType: "ETHICAL_GUARDIAN",
        service: "セキュリティプロ",
        title: "正義を貫く『セキュリティプロ』で、社会の安全を担保する「倫理的守護者」へと進化する",
        analysis: "AIの暴走を食い止める盾となる。セキュリティの専門性を磨き、デジタル社会の信頼を担保する不可欠な番人として生きる道は尊い。",
        url: "https://t.felmat.net/fmcl?ak=A11624B.1.U159881F.K133474M"
    },

    // LEGACY_KEEPER
    {
        targetType: "LEGACY_KEEPER",
        service: "ツギノシゴト",
        title: "安定した技術を支える『ツギノシゴト』で、現場で信頼を築く「安定のプロ」へと進化する",
        analysis: "製造・技術の現場を支えるあなたの誠実さを、ツギノシゴトは高く評価する。社会の基盤を守り続ける、確かな居場所を確保するのが良い。",
        url: "https://t.felmat.net/fmcl?ak=X97674.1.61412369.K133474M"
    },
    {
        targetType: "LEGACY_KEEPER",
        service: "第二新卒neo",
        title: "正社員を叶える『第二新卒neo』で、確かな足場を固め直す「キャリア再起者」へと進化する",
        analysis: "保守・継承の第一歩として正社員の地位を確保する。社会の確かな歯車として機能することで、キャリアを安定的に再生できる。",
        url: "https://t.felmat.net/fmcl?ak=C106421.1.71492275.K133474M"
    },
    {
        targetType: "LEGACY_KEEPER",
        service: "明光キャリア(エンジニア)",
        title: "現場に強い『明光キャリア』で、次元を超えて価値を生む「現実架橋者」へと進化する",
        analysis: "運用・保守こそが信頼の礎だ。明光のエンジニア転職で、あなたの「守る力」を必要としている優良な現場を確保するのが賢明だ。",
        url: "https://t.felmat.net/fmcl?ak=A10591E.1.6148885Q.K133474M"
    },

    // GIG_SURVIVOR
    {
        targetType: "GIG_SURVIVOR",
        service: "テックゴー",
        title: "徹底した並走の『テックゴー』で、高年収を実現する「トップティア・エンジニア」へと進化する",
        analysis: "傭兵にとって面接対策は生存のための武器そのものだ。テックゴーの徹底した並走を活用し、最高値の報酬を勝ち取る能力を磨くのが得策といえる。",
        url: "https://af.moshimo.com/af/c/click?a_id=5337696&p_id=6722&pc_id=19209&pl_id=90843"
    },
    {
        targetType: "GIG_SURVIVOR",
        service: "ライフシフトラボAI",
        title: "経験を武器にする『ライフシフトラボAI』で、自由を掴む「独立複業家」へと進化する",
        analysis: "組織を離れた以上、頼れるのは自らの武装だ。これまでの経験をAIで爆増させ、一人で一個師団並みの戦力を保持することを目指すのが賢明だ。",
        url: "https://t.felmat.net/fmcl?ak=S11073Y.1.V153398Z.K133474M"
    },
    {
        targetType: "GIG_SURVIVOR",
        service: "Wannabe Academy",
        title: "多角的な『Wannabe Academy』で、動画×マーケを操る「次世代クリエイター」へと進化する",
        analysis: "単一スキルでの生存は困難な時代だ。動画とマーケティングを掛け合わせ、変化し続ける戦場で生き抜くための多角的な武装を整えるべきだ。",
        url: "https://t.felmat.net/fmcl?ak=A8360X.1.I127674B.K133474M"
    },

    // GLOBAL_NOMAD
    {
        targetType: "GLOBAL_NOMAD",
        service: "WEBCOACH(動画編集)",
        title: "場所を選ばない『WEBCOACH』で、国境も場所も超えて働く「自由な遊牧民」へと進化する",
        analysis: "映像は国境を超える。WEBCOACHで編集スキルを極め、PC一台で世界中を渡り歩く、場所を捨てた自由を手に入れるのが理想的だ。",
        url: "https://t.felmat.net/fmcl?ak=R11291Y.1.K1554149.K133474M"
    },
    {
        targetType: "GLOBAL_NOMAD",
        service: "WEBCOACH(SNS)",
        title: "時代を掴む『WEBCOACH』で、国境も場所も超えて働く「自由な遊牧民」へと進化する",
        analysis: "SNSの波を乗りこなす。発信力を武器にすれば、地球上のどこにいても価値を提供できる、真のノマドスタイルが完成する。",
        url: "https://t.felmat.net/fmcl?ak=D11508T.1.8158693F.K133474M"
    },
    {
        targetType: "GLOBAL_NOMAD",
        service: "WEBCOACH(マーケ)",
        title: "攻めのスキルの『WEBCOACH』で、国境も場所も超えて働く「自由な遊牧民」へと進化する",
        analysis: "集客をコントロールする術を。マーケティングの力を持ち運べるようになれば、世界そのものがあなたのオフィスに変わる。",
        url: "https://t.felmat.net/fmcl?ak=Z11290T.1.1155412V.K133474M"
    },

    // COMMUNITY_WEAVER
    {
        targetType: "COMMUNITY_WEAVER",
        service: "エンジニア就活",
        title: "未来を切り拓く『エンジニア就活』で、ITの最前線を開始する「次世代エンジニア」へと進化する",
        analysis: "人と技術を繋ぐ。ITの最前線でキャリアを開始し、コミュニティの核として成長するための最初の人脈をここで掴むのが良い。",
        url: "https://t.felmat.net/fmcl?ak=D11609B.2.N146203_7.K133474M"
    },
    {
        targetType: "COMMUNITY_WEAVER",
        service: "NewMA",
        title: "信頼を繋ぐ『NewMA』で、心の領域で最高峰を目指す「M&Aプロ」へと進化する",
        analysis: "信頼こそが最大の資本だ。NewMAでM&Aの極意を学び、AIには決して真似できない「心の架け橋」としての真価を証明すべきだ。",
        url: "https://t.felmat.net/fmcl?ak=E96148.1.A139731Q.K133474M"
    },
    {
        targetType: "COMMUNITY_WEAVER",
        service: "MyVision",
        title: "選考対策を極めた『MyVision』で、キャリアの熱量を最大化する「コンサル戦略家」へと進化する",
        analysis: "コンサルという最高峰のコミュニティ。MyVisionの並走支援で、自身の市場価値を爆上げし、強固な人脈の核となるのが得策だ。",
        url: "https://af.moshimo.com/af/c/click?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690"
    }
];

export function getAffiliateCatalogByJobType(jobType: CareerType): AffiliateCatalogItem[] {
    return AFFILIATE_CATALOG.filter(item => item.targetType === jobType);
}
