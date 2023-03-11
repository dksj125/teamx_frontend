interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  views: number;
  likes: number;
  tags?: string[];
  location?: string;
  comments?: PostComment[];
}

interface PostComment {
  id: number;
  content: string;
  author: string;
}

export type { Post, PostComment };
