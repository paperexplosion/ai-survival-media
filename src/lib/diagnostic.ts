import { UserResponse, DiagnosticResult, CareerType } from '@/types';
import { CAREER_TYPES_DATA, QUESTIONS } from './constants';

const TYPE_VECTORS: Record<CareerType, [number, number, number]> = {
    AI_MASTER: [90, 50, 90],
    DIGITAL_ARTISAN: [90, 20, 50],
    ENDANGERED_WORKER: [10, 20, 10],
    COMMUNITY_WEAVER: [30, 90, 50],
    DATA_ALCHEMIST: [90, 10, 30],
    GLOBAL_NOMAD: [50, 50, 90],
    ETHICAL_GUARDIAN: [40, 80, 40],
    INNOVATION_ARCHITECT: [80, 80, 70],
    REALITY_BRIDGER: [70, 40, 40],
    SUSTAINABLE_STRATEGIST: [30, 80, 60],
    GIG_SURVIVOR: [30, 30, 90],
    LEGACY_KEEPER: [40, 20, 20],
};

export function calculateDiagnosis(responses: UserResponse[]): DiagnosticResult {
    let techScore = 0;
    let humanScore = 0;
    let autonomyScore = 0;

    const maxScorePerAxis = 30;

    responses.forEach((r) => {
        if (r.axis === 'tech') techScore += r.score;
        if (r.axis === 'human') humanScore += r.score;
        if (r.axis === 'autonomy') autonomyScore += r.score;
    });

    const normTech = Math.round((techScore / maxScorePerAxis) * 100);
    const normHuman = Math.round((humanScore / maxScorePerAxis) * 100);
    const normAutonomy = Math.round((autonomyScore / maxScorePerAxis) * 100);

    const userVector: [number, number, number] = [normTech, normHuman, normAutonomy];

    let bestType: CareerType = 'ENDANGERED_WORKER';
    let minDistance = Infinity;

    (Object.keys(TYPE_VECTORS) as CareerType[]).forEach((type) => {
        const target = TYPE_VECTORS[type];
        const dist = Math.sqrt(
            Math.pow(userVector[0] - target[0], 2) +
            Math.pow(userVector[1] - target[1], 2) +
            Math.pow(userVector[2] - target[2], 2)
        );

        if (dist < minDistance) {
            minDistance = dist;
            bestType = type;
        }
    });

    const data = CAREER_TYPES_DATA[bestType];

    return {
        type: bestType,
        title: data.title,
        description: data.description,
        radarChart: {
            tech: normTech,
            human: normHuman,
            autonomy: normAutonomy,
        },
        actionPlan: data.actionPlan,
    };
}
