export interface PostDataProps {
  title: string;
  categories: string[];
  tags: string[];
  slug?: string;
  tumbnail?: string;
  description: string;
  createDate: string;
}

export interface PostProps {
  id: number;
  title: string;
  tags: string[];
  description: string;
  thumbnail?: string;
  date: string;
}

export interface PostDetailProps {
  title: string;
  tags: string[];
  date: string;
  content: string;
}
