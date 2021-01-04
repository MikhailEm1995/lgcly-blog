export interface IPost {
  id: string;
  timestamp: number;
  title: string;
  brief: string;
  tags: string[];
  articleHtml?: string[];
}

export interface IPostsState {
  [key: string]: IPost;
}