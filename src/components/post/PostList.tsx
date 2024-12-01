import { useState } from "react";
import Modal from "../Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("Default Body");
  const [enteredAuthor, setEnteredAuthor] = useState("Default Author");

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={() => setModalIsVisible(false)}>
          <NewPost
            onChangeBody={(event) => setEnteredBody(event.target.value)}
            onChangeAuthor={(event) => setEnteredAuthor(event.target.value)}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author={enteredAuthor} content={enteredBody} />
        <Post author="Jane Doe" content="This is another post" />
      </ul>
    </>
  );
};

export default PostList;
