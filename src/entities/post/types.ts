export interface IPost {
  id: string;
  timestamp: number;
  title: string;
  brief: string;
  tags: string[];
  sections?: string[];
}

export interface IPostsState {
  [key: string]: IPost;
}