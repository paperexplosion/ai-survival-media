export type CareerType =
    | 'AI_MASTER'
    | 'DIGITAL_ARTISAN'
    | 'COMMUNITY_WEAVER'
    | 'DATA_ALCHEMIST'
    | 'INNOVATION_ARCHITECT'
    | 'ETHICAL_GUARDIAN'
    | 'GLOBAL_NOMAD'
    | 'REALITY_BRIDGER'
    | 'SUSTAINABLE_STRATEGIST'
    | 'LEGACY_KEEPER'
    | 'GIG_SURVIVOR'
    | 'ENDANGERED_WORKER';

export interface Question {
    id: string;
    text: string;
    options: {
        label: string;
        value: number;
        axis: 'tech' | 'human' | 'autonomy';
    }[];
}

export interface UserResponse {
    questionId: string;
    score: number;
    axis: 'tech' | 'human' | 'autonomy';
}

export interface AffiliateLink {
    title: string;
    url: string;
    category: 'RECRUITMENT' | 'COURSE' | 'TOOL';
    description: string;
}

export interface DiagnosticResult {
    type: CareerType;
    title: string;
    description: string;
    radarChart: {
        tech: number;
        human: number;
        autonomy: number;
    };
    actionPlan: string[];
    recommendations: AffiliateLink[];
}

export interface UserData {
    email?: string;
    occupation?: string;
    responses: UserResponse[];
    result: DiagnosticResult;
    timestamp: Date;
}

export interface DynamicCTA {
    cta: string;
    subtext: string;
}

export interface Route {
    name: string;
    url: string;
    affiliateUrl?: string;
    trackingImageUrl?: string;
    merits: string[];
    demerits: string[];
    sommelierComment: string;
}

export interface SommelierRecommendation {
    overview: string;
    routes: Route[];
}

export interface HiddenOption {
    name: string;
    feature: string;
    url: string;
}

export interface HiddenList {
    options: HiddenOption[];
}
