import jobPostsData from './job-posts-data.json';

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

const JOB_POSTS: JobPost[] = jobPostsData as JobPost[];

export async function getAllJobPosts(): Promise<JobPost[]> {
  return JOB_POSTS.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getJobPost(slug: string): Promise<JobPost | undefined> {
  return JOB_POSTS.find(post => post.slug === slug);
}
