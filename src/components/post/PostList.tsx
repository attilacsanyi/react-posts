import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = () => {
  const posts = useLoaderData<{ id: string; body: string; author: string }[]>();

  return (
    <>
      {/* If there are posts, render them */}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map(({ id, author, body }) => (
            <Post key={id} id={id} author={author} content={body} />
          ))}
        </ul>
      )}

      {/* If there are no posts, render a message */}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
