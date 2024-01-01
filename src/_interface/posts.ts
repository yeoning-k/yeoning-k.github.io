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
  data: PostDataProps;
}
