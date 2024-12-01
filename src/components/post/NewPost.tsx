import classes from "./NewPost.module.css";

const NewPost = (props: {
  onChangeBody: React.ChangeEventHandler<HTMLTextAreaElement>;
  onChangeAuthor: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onChangeBody} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onChangeAuthor} />
      </p>
    </form>
  );
};

export default NewPost;
