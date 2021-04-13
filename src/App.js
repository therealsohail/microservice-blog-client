import PostComponent from "./components/postComponent";
import ShowPosts from "./components/showPosts";

function App() {
  return (
    <div className="container mt-4">
      <h2>Blog App</h2>
      <PostComponent />
      <hr />
      <ShowPosts />
    </div>
  );
}

export default App;
