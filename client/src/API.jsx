import React, {useState} from "react";
import axios from "axios";

function API() {
    const [text, setText] = useState("");

    const getAPI = () => {
        axios.get(`/api/test`, {crossdomain: true})
        .then(response => {
            setText(response.data);
        })
    }

    return (
        <div>
          <button onClick={getAPI}>
            Button
          </button>
          <h1>{text}</h1>
          <h2>{text}</h2>
        </div>
      )
    }
export default API;