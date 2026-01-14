export interface BlogPost {
    slug: string;
    title: string;
    lead: string;
    date: string;
    readTime: string;
    category: string;
    content: {
        section: string;
        text: string;
    }[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'post-01',
        title: '【断絶】2026年、あなたの年収を「AI」が決める。格差の正体',
        lead: '「一生懸命働けば、報われる」――その美しき信仰は、今この瞬間、音を立てて崩れ去っている。2026年。私たちは今、歴史の特異点に立たされている。かつて「ホワイトカラー」と呼ばれ、知識と事務処理で生活を担保していた層が、AIという巨大な波に飲み込まれようとしているのだ。これは、単なるスキルのアップデートの話ではない。あなたの「価値」が、AIによって再定義されるプロセスの話だ。',
        date: '2026-01-14',
        readTime: '5分',
        category: 'AI時代のキャリア',
        content: [
            {
                section: '「努力のインフレ」が起きている',
                text: 'これまで、情報を集め、整理し、資料にまとめる力は「高い専門性」として高給を約束してきた。しかし今、その作業はAIによって「1秒、数円」のコストにまで暴落した。あなたが3日間徹夜して作ったレポートの雛形を、AIは呼吸をするように、かつ正確に出力する。\n\n「努力」が、もはや価値を生まない。これが、2026年に起きている「断絶」の正体だ。'
            },
            {
                section: '年収を決めるのは「作業量」ではなく「意思決定」',
                text: 'これからの格差は、**「AIを道具として使う側」と「AIに作業を奪われる側」**の間で、文字通り修復不能なほどに開いていく。\n\n年収を維持、あるいは爆発的に向上させることができるのは、AIが出した100の回答から「これだ」と決断し、責任を取れる人間だけだ。AIには「責任」は取れない。最後に泥をかぶり、舵を切る。その「意思決定」こそが、これからのインテリジェンス（知性）の本質となる。'
            },
            {
                section: '「サバイバル」は、現在地を知ることから始まる',
                text: '「自分は大丈夫だ」という根拠なき楽観こそが、最大の敵だ。2026年の荒波を生き抜くためには、まず自分の持っているスキルが、AI時代において「どのカテゴリー」に属しているのかを客観的に把握しなくてはならない。\n\n戦略を練る軍師なのか、現場をハックする職人なのか、あるいは別の道があるのか。'
            },
            {
                section: '結び',
                text: '迷っている時間は、もう残されていない。AIという「鏡」に自分を照らし出し、新しい生存戦略を手にすること。それが、この過酷な時代を「インテリジェンス」を持って生き抜く唯一の道である。'
            }
        ]
    }
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
    return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
