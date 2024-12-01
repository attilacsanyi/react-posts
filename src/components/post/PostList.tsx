import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="John Doe" content="This is a post" />
        <Post author="Jane Doe" content="This is another post" />
      </ul>
    </>
  );
};

export default PostList;
