import { createClient } from '@supabase/supabase-js';

export interface JobPost {
    slug: string;
    title: string;
    lead: string;
    date: string;
    category: string;
    content: {
        section: string;
        text: string;
    }[];
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const DUMMY_JOBS: JobPost[] = [
    {
        slug: 'eigyo-ai-shourai',
        title: '営業職はAIに奪われるのか？2026年の現実と生存戦略',
        lead: 'AIが営業の世界を静かに、しかし確実に変えつつある。顧客データの分析、最適なアプローチの提案、さらにはトークスクリプトの生成まで——かつて営業マンの専売特許だったスキルが、次々とAIに代替されようとしている。あなたの仕事は、本当に安全なのか。',
        date: '2026-02-26',
        category: 'AI×キャリア',
        content: [
            {
                section: 'AIが変える営業の風景',
                text: '営業の現場では、AIツールの導入が急速に進んでいる。顧客管理システムはAIによって自動化され、商談の優先順位付けから最適なアプローチ方法まで、データに基づいた提案が可能になった。従来の「足で稼ぐ」スタイルは、もはや時代遅れとなりつつある。'
            },
            {
                section: '生き残る営業パーソンの条件',
                text: 'しかし、すべての営業職がAIに取って代わられるわけではない。顧客との深い関係構築、複雑な交渉、そして人間ならではの共感力——これらは依然として人間の領域だ。AIをツールとして使いこなし、自らの強みを磨き続ける営業パーソンこそが、この変革期を生き抜くことができる。'
            },
            {
                section: '今すぐ始めるべき3つのアクション',
                text: '第一に、AIツールの基本的な使い方を学ぶこと。第二に、データ分析の基礎スキルを身につけること。そして第三に、人間にしかできない価値——戦略的思考力やクリエイティビティを磨くこと。この3つが、AI時代を生き抜く営業パーソンの必須条件となる。'
            }
        ]
    }
];

export async function getJobPost(slug: string): Promise<JobPost | undefined> {
    const dummyPost = DUMMY_JOBS.find(post => post.slug === slug);
    if (dummyPost) return dummyPost;

    const { data, error } = await supabase
        .from('job_posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

    if (error || !data) return undefined;

    return {
        slug: data.slug,
        title: data.title,
        lead: data.lead,
        date: data.date,
        category: data.category,
        content: data.content || []
    };
}

export async function getAllJobPosts(): Promise<JobPost[]> {
    const { data, error } = await supabase
        .from('job_posts')
        .select('*')
        .order('date', { ascending: false });

    if (error) return DUMMY_JOBS;

    const dbPosts = data?.map(post => ({
        slug: post.slug,
        title: post.title,
        lead: post.lead,
        date: post.date,
        category: post.category,
        content: post.content || []
    })) || [];

    return [...DUMMY_JOBS, ...dbPosts];
}
