import { Header } from './components/Header.tsx';
import { PostList } from './components/PostList.tsx';
import { MOCK_POSTS } from './data/post.ts';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <PostList posts={MOCK_POSTS} />
    </div>
  );
}

export default App;
