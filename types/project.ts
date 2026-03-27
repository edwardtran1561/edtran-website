export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  stats?: {
    stars?: number;
    forks?: number;
  };
}
