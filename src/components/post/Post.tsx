import styles from "./Post.module.css";

interface Props {
  author: string;
  content: string;
}

const Post = ({ author, content }: Props) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.author}>{author}</h3>
      <p className={styles.text}>{content}</p>
    </div>
  );
};

export default Post;
