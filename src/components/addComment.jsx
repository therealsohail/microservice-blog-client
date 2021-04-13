import { useState } from "react";
import axios from "axios";

const AddComment = ({ id }) => {
  let [comment, setComment] = useState("");

  let addComment = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8001/posts/${id}/comments`, {
      content: comment,
    });
    window.location.reload();
  };
  return (
    <div>
      <input
        onChange={(e) => setComment(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Comment here"
      />
      <button className="btn btn-primary mt-2" onClick={addComment}>
        Add
      </button>
    </div>
  );
};

export default AddComment;
