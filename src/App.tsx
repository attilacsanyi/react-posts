import NewPost from "./components/post/NewPost";
import Post from "./components/post/Post";
import styles from "./PostList.module.css";

function App() {
  return (
    <>
      <NewPost />
      <div className={styles.posts}>
        <Post author="John Doe" content="This is a post" />
        <Post author="Jane Doe" content="This is another post" />
      </div>
    </>
  );
}

export default App;
