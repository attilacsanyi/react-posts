import { useState } from "react";
import classes from "./NewPost.module.css";

const NewPost = ({
  onCancel,
  onAddPost,
}: {
  onCancel: () => void;
  onAddPost: (post: { body: string; author: string }) => void;
}) => {
  const [enteredBody, setEnteredBody] = useState("Default Body");
  const [enteredAuthor, setEnteredAuthor] = useState("Default Author");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);

    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(event) => setEnteredBody(event.target.value)}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={(event) => setEnteredAuthor(event.target.value)}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
