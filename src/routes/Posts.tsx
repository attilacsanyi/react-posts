import { Outlet } from "react-router-dom";
import PostList from "../components/post/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = (await response.json()) as {
    posts: { body: string; author: string }[];
  };
  return resData.posts;
}
