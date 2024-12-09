import { Link } from "react-router-dom";
import styles from "./Post.module.css";

type Props = {
  id: string;
  author: string;
  content: string;
};

const Post = ({ id, author, content }: Props) => {
  return (
    <li className={styles.post}>
      <Link to={id}>
        <h3 className={styles.author}>{author}</h3>
        <p className={styles.text}>{content}</p>
      </Link>
    </li>
  );
};

export default Post;
