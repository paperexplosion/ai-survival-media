import { CareerType } from '@/types';

export interface AffiliateCatalogItem {
    targetType: CareerType;
    service: string;
    title: string;
    url: string;
}

export const AFFILIATE_CATALOG: AffiliateCatalogItem[] = [
    // AI_MASTER
    { targetType: "AI_MASTER", service: "テックゴー", title: "徹底した並走の『テックゴー』で、高年収を実現する「トップティア・エンジニア」へと進化する", url: "https://af.moshimo.com/af/c/click?a_id=5337696&p_id=6722&pc_id=19209&pl_id=90843" },
    { targetType: "AI_MASTER", service: "GLOBIS学び放題", title: "膨大な知識を駆使する『GLOBIS学び放題』で、経営と技術を統合する「ビジネスAI戦略家」へと進化する", url: "https://t.felmat.net/fmcl?ak=O2859R.1.X74604L.K133474M" },
    { targetType: "AI_MASTER", service: "PyQ", title: "Pythonを極める『PyQ』で、AI開発の核心に到達する「Pythonマスター」へと進化する", url: "https://t.felmat.net/fmcl?ak=B3155R.1.U82374E.K133474M" },

    // DATA_ALCHEMIST
    { targetType: "DATA_ALCHEMIST", service: "Schoo", title: "多様な領域を網羅する『Schoo』で、データを経営判断に繋げる「ビジネス錬金術師」へと進化する", url: "https://t.felmat.net/fmcl?ak=M2858B.1.P74601J.K133474M" },
    { targetType: "DATA_ALCHEMIST", service: "Aidemy", title: "AIとデータを極める『Aidemy』で、機械学習と数理を操る「データサイエンティスト」へと進化する", url: "https://t.felmat.net/fmcl?ak=V2960D.1.M81779E.K133474M" },
    { targetType: "DATA_ALCHEMIST", service: "DataCamp", title: "実践重視の『DataCamp』で、グローバルに通用する「データエンジニア」へと進化する", url: "https://datacamp.pxf.io/c/5968227/1012793/13294" },

    // DIGITAL_ARTISAN
    { targetType: "DIGITAL_ARTISAN", service: "SHElikes", title: "多彩なスキルの『SHElikes』で、仕事を自分で創る「マルチクリエイター」へと進化する", url: "https://t.felmat.net/fmcl?ak=H2861S.1.C76026F.K133474M" },
    { targetType: "DIGITAL_ARTISAN", service: "WeRuby", title: "女子大生特化の『WeRuby』で、今からキャリアを築く「未来のWeb職人」へと進化する", url: "https://t.felmat.net/fmcl?ak=W3527Y.1.C70231Q.K133474M" },
    { targetType: "DIGITAL_ARTISAN", service: "クリエイターズファクトリー", title: "現場と繋がる『クリエイターズファクトリー』で、Web制作の全てを制する「実践的Webクリエイター」へと進化する", url: "https://t.felmat.net/fmcl?ak=J3153O.1.K82371B.K133474M" },

    // ENDANGERED_WORKER
    { targetType: "ENDANGERED_WORKER", service: "ジッセン!オンライン", title: "マーケティングを学ぶ『ジッセン!オンライン』で、売る力を手に入れる「デジタルマーケター」へと進化する", url: "https://t.felmat.net/fmcl?ak=X2959N.1.L81776Q.K133474M" },
    { targetType: "ENDANGERED_WORKER", service: "ビジネスYouTuber講座", title: "動画で伝える『ビジネスYouTuber講座』で、影響力を持つ「ビジネスインフルエンサー」へと進化する", url: "https://t.felmat.net/fmcl?ak=L3154A.1.Z82372V.K133474M" },
    { targetType: "ENDANGERED_WORKER", service: "MENTA", title: "知を繋ぐ『MENTA』で、教える側へ回る「知識のハブ」へと進化する", url: "https://t.felmat.net/fmcl?ak=V3528D.1.270234A.K133474M" },

    // INNOVATION_ARCHITECT
    { targetType: "INNOVATION_ARCHITECT", service: "レバテックフリーランス", title: "自由を掴む『レバテックフリーランス』で、年収を自ら決める「独立エンジニア」へと進化する", url: "https://t.felmat.net/fmcl?ak=B87207.1.A130962S.K133474M" },
    { targetType: "INNOVATION_ARCHITECT", service: "Workship", title: "多彩な案件の『Workship』で、自由なペースで稼ぐ「デジタルフリーランサー」へと進化する", url: "https://af.moshimo.com/af/c/click?a_id=5337710&p_id=4870&pc_id=14215&pl_id=65776" },
    { targetType: "INNOVATION_ARCHITECT", service: "フリーランスダイレクト", title: "高単価に挑む『フリーランスダイレクト』で、企業と直取引する「独立系プロ」へと進化する", url: "https://t.felmat.net/fmcl?ak=I11623M.1.G159879N.K133474M" },

    // ETHICAL_GUARDIAN
    { targetType: "ETHICAL_GUARDIAN", service: "グリーンエンジニア転職", title: "地球を守る『グリーンエンジニア転職』で、環境技術を主導する「グリーンテック戦士」へと進化する", url: "https://t.felmat.net/fmcl?ak=D10591Y.1.4148884G.K133474M" },
    { targetType: "ETHICAL_GUARDIAN", service: "ベイズチャンス", title: "社会的な企業を選ぶ『ベイズチャンス』で、使命を果たす「倫理的プロフェッショナル」へと進化する", url: "https://t.felmat.net/fmcl?ak=Z10186R.1.N145576C.K133474M" },
    { targetType: "ETHICAL_GUARDIAN", service: "サステナブル・ラボ", title: "AI倫理を学ぶ『サステナブル・ラボ』で、未来への責任を担う「倫理的AI専門家」へと進化する", url: "https://t.felmat.net/fmcl?ak=A10188D.1.G145578P.K133474M" },

    // SUSTAINABLE_STRATEGIST
    { targetType: "SUSTAINABLE_STRATEGIST", service: "システムフォレスト", title: "長期志向の『システムフォレスト』で、時代を超える仕組みを創る「戦略的システムビルダー」へと進化する", url: "https://t.felmat.net/fmcl?ak=F10189W.1.9145580I.K133474M" },
    { targetType: "SUSTAINABLE_STRATEGIST", service: "doda(グリーン)", title: "環境に寄り添う『doda(グリーン)』で、社会貢献と収入を得る「サステナブルキャリアビルダー」へと進化する", url: "https://t.felmat.net/fmcl?ak=O69905.1.R22968Y.K133474M" },
    { targetType: "SUSTAINABLE_STRATEGIST", service: "パーソルキャリアコンサルティング", title: "専門性を追求する『パーソルキャリアコンサルティング』で、時代を見据える「戦略的キャリアデザイナー」へと進化する", url: "https://t.felmat.net/fmcl?ak=K10190B.1.I145582V.K133474M" },

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
