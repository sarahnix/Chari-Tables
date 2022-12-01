import React from "react";
import "./Contributions.css";
import axios from "axios";
import { useEffect } from "react";

function Contributions() {
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response);
    });
  }, []);
  return <div className="contributions"></div>;
}

export default Contributions;
