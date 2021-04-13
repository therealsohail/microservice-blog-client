import { useState } from "react";
import axios from "axios";

const PostComponent = () => {
  let [postTitle, setPostTitle] = useState("");

  let addPost = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/post", {
      title: postTitle,
    });
    window.location.reload();
  };
  return (
    <div>
      <div className="mb-3 mt-3">
        <label htmlFor="Post" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="Post"
          placeholder="Write Post title"
          onChange={(e) => setPostTitle(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={addPost}>
        Save
      </button>
    </div>
  );
};

export default PostComponent;
