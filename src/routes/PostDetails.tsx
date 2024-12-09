import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import Modal from "../components/layout/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData<{ body: string; author: string }>();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }: LoaderFunctionArgs) {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  const resData = (await response.json()) as {
    post: {
      body: string;
      author: string;
    };
  };
  return resData.post;
}
