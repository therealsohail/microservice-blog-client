import { useEffect, useState } from "react";
import axios from "axios";
import AddComment from "./addComment";
import GetComments from "./getComments";

const ShowPosts = () => {
  let [posts, setPosts] = useState([]);
  useEffect(async () => {
    let api = await axios.get("http://localhost:8002/posts");
    let postData = Object.values(api.data);
    setPosts(postData);
  }, []);
  console.log(posts);

  let displayPosts = () => {
    return posts.map((doc) => (
      <div className="col-sm-4">
        <div className="card" key={doc.id}>
          <h5 class="card-body">{doc.title}</h5>
          <p className="container">
            <GetComments comments={doc.comments} />
            <AddComment id={doc.id} />
          </p>
        </div>
      </div>
    ));
  };
  return <div className="row">{displayPosts()}</div>;
};

export default ShowPosts;
