import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = () => {
  const [enteredBody, setEnteredBody] = useState("Default Body");
  const [enteredAuthor, setEnteredAuthor] = useState("Default Author");

  return (
    <>
      <NewPost
        onChangeBody={(event) => setEnteredBody(event.target.value)}
        onChangeAuthor={(event) => setEnteredAuthor(event.target.value)}
      />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} content={enteredBody} />
        <Post author="Jane Doe" content="This is another post" />
      </ul>
    </>
  );
};

export default PostList;
