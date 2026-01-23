import { CareerType } from '@/types';

export interface AffiliateCatalogItem {
    targetType: CareerType;
    service: string;
    title: string;
    url: string;
}

export const AFFILIATE_CATALOG: AffiliateCatalogItem[] = [
    // AI_MASTER
    { targetType: "AI_MASTER", service: "MyVision", title: "最高峰の対策を誇る『MyVision』で、戦略コンサルへの切符を掴む「エリート軍師」へと進化する", url: "https://af.moshimo.com/af/c/click?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690" },
    { targetType: "AI_MASTER", service: "東京AIスクール", title: "横断的スキルの『東京AIスクール』で、AIを顎で使う「次世代の指揮官」へと進化する", url: "https://t.felmat.net/fmcl?ak=O116760.2.2146204_1.K133474M" },
    { targetType: "AI_MASTER", service: "コトラ", title: "プロに寄り添う『コトラ』で、年収2,000万超えのハイクラス層へと進化する", url: "https://af.moshimo.com/af/c/click?a_id=5337707&p_id=3316&pc_id=7865&pl_id=47212" },

    // DATA_ALCHEMIST
    { targetType: "DATA_ALCHEMIST", service: "MyVision", title: "独自求人を武器にする『MyVision』で、コンサルファームの核心を突く「ハイエンド分析官」へと進化する", url: "https://af.moshimo.com/af/c/click?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690" },
    { targetType: "DATA_ALCHEMIST", service: "明光キャリア(ハイクラス)", title: "戦略の核心を突く『明光キャリア』で、ハイエンド・データアナリストへと進化する", url: "https://t.felmat.net/fmcl?ak=N10191F.1.Y145579R.K133474M" },

    // DIGITAL_ARTISAN
    { targetType: "DIGITAL_ARTISAN", service: "RareTECH", title: "本質を極める『RareTECH』で、AIに代替不可能な「希少型エンジニア」へと進化する", url: "https://t.felmat.net/fmcl?ak=H9198H.1.E1354486.K133474M" },
    { targetType: "DIGITAL_ARTISAN", service: "SAPテンショク", title: "システムを守る『SAPテンショク』で、世界標準を支える「絶対的技術者」へと進化する", url: "https://t.felmat.net/fmcl?ak=N10547R.1.X1485041.K133474M" },
    { targetType: "DIGITAL_ARTISAN", service: "SAPフリーランスバンク", title: "システムを守る『SAPフリーランスバンク』で、絶対的技術者へと進化する", url: "https://t.felmat.net/fmcl?ak=R10331F.1.H146814T.K133474M" },

    // ENDANGERED_WORKER
    { targetType: "ENDANGERED_WORKER", service: "AI×Webマーケ(DXUP)", title: "経産省補助金対象の『DXUP』で、事務作業を自動化する「AI効率化マスター」へと進化する", url: "https://t.felmat.net/fmcl?ak=W11267M.1.E1551635.K133474M" },
    { targetType: "ENDANGERED_WORKER", service: "DMM WEBCAMP", title: "本気で変わるための『DMM WEBCAMP』で、未来を創る「エンジニア」へと進化する", url: "https://t.felmat.net/fmcl?ak=I1787O.1.O36364V.K133474M" },
    { targetType: "ENDANGERED_WORKER", service: "GeekSalon", title: "才能を開花させる『GeekSalon』で、アプリ開発を極める「若きイノベーター」へと進化する", url: "https://t.felmat.net/fmcl?ak=J3522B.1.N68754X.K133474M" },
    { targetType: "ENDANGERED_WORKER", service: "はじめてのプログラミング", title: "初心者向けの『はじめてのプログラミング』で、技術を武器にする「実践型エンジニア」へと進化する", url: "https://t.felmat.net/fmcl?ak=J16536.1.P1238878.K133474M" },

    // INNOVATION_ARCHITECT
    { targetType: "INNOVATION_ARCHITECT", service: "デジレカ", title: "現場主義の『デジレカ』で、仕組みを設計し社会を動かす「マーケティング建築家」へと進化する", url: "https://t.felmat.net/fmcl?ak=D109718.1.4152406S.K133474M" },
    { targetType: "INNOVATION_ARCHITECT", service: "foRPro", title: "最高峰を繋ぐ『foRPro』で、高単価を主導する「独立系ハイエンドコンサルタント」へと進化する", url: "https://t.felmat.net/fmcl?ak=Q6627F.1.Q106776G.K133474M" },

    // ETHICAL_GUARDIAN
    { targetType: "ETHICAL_GUARDIAN", service: "セキュリティプロ", title: "正義を貫く『セキュリティプロ』で、社会の安全を担保する「倫理的守護者」へと進化する", url: "https://t.felmat.net/fmcl?ak=A11624B.1.U159881F.K133474M" },

    // SUSTAINABLE_STRATEGIST
    { targetType: "SUSTAINABLE_STRATEGIST", service: "ファイナンシャルアカデミー", title: "本質を授ける『ファイナンシャルアカデミー』で、一生困らない「永続の戦略家」へと進化する", url: "https://t.felmat.net/fmcl?ak=C2839G.1.K620327.K133474M" },

    // LEGACY_KEEPER
    { targetType: "LEGACY_KEEPER", service: "ツギノシゴト", title: "安定した技術を支える『ツギノシゴト』で、現場で信頼を築く「安定のプロ」へと進化する", url: "https://t.felmat.net/fmcl?ak=X97674.1.61412369.K133474M" },
    { targetType: "LEGACY_KEEPER", service: "第二新卒neo", title: "正社員を叶える『第二新卒neo』で、確かな足場を固め直す「キャリア再起者」へと進化する", url: "https://t.felmat.net/fmcl?ak=C106421.1.71492275.K133474M" },
    { targetType: "LEGACY_KEEPER", service: "明光キャリア(エンジニア)", title: "現場に強い『明光キャリア』で、次元を超えて価値を生む「現実架橋者」へと進化する", url: "https://t.felmat.net/fmcl?ak=A10591E.1.6148885Q.K133474M" },

    // GIG_SURVIVOR
    { targetType: "GIG_SURVIVOR", service: "テックゴー", title: "徹底した並走の『テックゴー』で、高年収を実現する「トップティア・エンジニア」へと進化する", url: "https://af.moshimo.com/af/c/click?a_id=5337696&p_id=6722&pc_id=19209&pl_id=90843" },
    { targetType: "GIG_SURVIVOR", service: "ライフシフトラボAI", title: "経験を武器にする『ライフシフトラボAI』で、自由を掴む「独立複業家」へと進化する", url: "https://t.felmat.net/fmcl?ak=S11073Y.1.V153398Z.K133474M" },
    { targetType: "GIG_SURVIVOR", service: "Wannabe Academy", title: "多角的な『Wannabe Academy』で、動画×マーケを操る「次世代クリエイター」へと進化する", url: "https://t.felmat.net/fmcl?ak=A8360X.1.I127674B.K133474M" },

    // GLOBAL_NOMAD
    { targetType: "GLOBAL_NOMAD", service: "WEBCOACH(動画編集)", title: "場所を選ばない『WEBCOACH』で、国境も場所も超えて働く「自由な遊牧民」へと進化する", url: "https://t.felmat.net/fmcl?ak=R11291Y.1.K1554149.K133474M" },
    { targetType: "GLOBAL_NOMAD", service: "WEBCOACH(SNS)", title: "時代を掴む『WEBCOACH』で、国境も場所も超えて働く「自由な遊牧民」へと進化する", url: "https://t.felmat.net/fmcl?ak=D11508T.1.8158693F.K133474M" },
    { targetType: "GLOBAL_NOMAD", service: "WEBCOACH(マーケ)", title: "攻めのスキルの『WEBCOACH』で、国境も場所も超えて働く「自由な遊牧民」へと進化する", url: "https://t.felmat.net/fmcl?ak=Z11290T.1.1155412V.K133474M" },

    // COMMUNITY_WEAVER
    { targetType: "COMMUNITY_WEAVER", service: "エンジニア就活", title: "未来を切り拓く『エンジニア就活』で、ITの最前線を開始する「次世代エンジニア」へと進化する", url: "https://t.felmat.net/fmcl?ak=D11609B.2.N146203_7.K133474M" },
    { targetType: "COMMUNITY_WEAVER", service: "NewMA", title: "信頼を繋ぐ『NewMA』で、心の領域で最高峰を目指す「M&Aプロ」へと進化する", url: "https://t.felmat.net/fmcl?ak=E96148.1.A139731Q.K133474M" },
    { targetType: "COMMUNITY_WEAVER", service: "MyVision", title: "選考対策を極めた『MyVision』で、キャリアの熱量を最大化する「コンサル戦略家」へと進化する", url: "https://af.moshimo.com/af/c/click?a_id=5337702&p_id=5922&pc_id=16500&pl_id=75690" }
];

export function getAffiliateCatalogByJobType(jobType: CareerType): AffiliateCatalogItem[] {
    return AFFILIATE_CATALOG.filter(item => item.targetType === jobType);
}
