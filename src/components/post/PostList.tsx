import { useState } from "react";
import Modal from "../layout/Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = ({
  isPosting,
  onStopPosting,
}: {
  isPosting: boolean;
  onStopPosting: () => void;
}) => {
  const [posts, setPosts] = useState<{ body: string; author: string }[]>([]);

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={(post) => setPosts((posts) => [post, ...posts])}
          />
        </Modal>
      )}

      {/* If there are posts, render them */}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map(({ author, body }) => (
            <Post key={body} author={author} content={body} />
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
