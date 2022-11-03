export type Content = {
  id: number;
  order: number;
  header: string;
  writing: string | null;
  tag: string | null;
  link: string | null;
  image: string | null;
  code: string | null;
  important: string | null;
  post_id: number;
};

export type Post = {
  id: number;
  title: string;
  createdAt: string;
  description: string;
  category: string;
  contents: Content[];
};
