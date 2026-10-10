import type { Post } from '../types/post.ts';

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <div className="post-meta">
        <span className="post-category">{post.category}</span>
        <span className="post-author">{post.author}</span>
      </div>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
    </article>
  );
}
