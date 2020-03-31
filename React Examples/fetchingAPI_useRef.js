import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const baseUrl = "https://api.github.com/users/";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState("");
  const searchInput = useRef();

  useEffect(() => {
    getUser(username);
  }, []);

  const handleClearInput = () => {
    searchInput.current.value = "";
    searchInput.current.focus();
  };
  async function getUser() {
    const response = await fetch(`${baseUrl}${username}`);
    const data = await response.json();
    setData(data);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Find github users"
        onChange={event => setUsername(event.target.value)}
        ref={searchInput}
      />
      <button onClick={() => getUser(username)}>Search</button>
      <button onClick={handleClearInput}>Clear</button>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <img
            alt="User Profile"
            src={data.avatar_url}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <h4>Type: {data.type}</h4>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
