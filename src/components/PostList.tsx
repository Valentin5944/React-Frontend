import type { Post } from '../types/post.ts';
import { PostCard } from './PostCard.tsx';

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <main className="post-list-container">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
