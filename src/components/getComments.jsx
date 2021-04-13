import axios from "axios";
import { useEffect, useState } from "react";

const GetComments = ({ comments }) => {
  return (
    <>
      {comments.map((doc) => (
        <ul key={doc.id}>
          <li>{doc.content}</li>
        </ul>
      ))}
    </>
  );
};

export default GetComments;
