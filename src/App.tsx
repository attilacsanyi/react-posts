import { useState } from "react";
import MainHeader from "./components/layout/MainHeader";
import PostList from "./components/post/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <MainHeader onCreatePost={() => setModalIsVisible(true)} />
      <PostList
        isPosting={modalIsVisible}
        onStopPosting={() => setModalIsVisible(false)}
      />
    </>
  );
}

export default App;
