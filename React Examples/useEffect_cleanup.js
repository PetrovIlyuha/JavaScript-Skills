import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMove = event => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };
  return (
    <div>
      <p>
        X: {mousePosition.x}, Y: {mousePosition.y}
      </p>
    </div>
  );
}

function NewPage() {
  return <div>New Page</div>;
}

ReactDOM.render(<App />, document.querySelector("#root"));

setTimeout(() => {
  ReactDOM.render(<NewPage />, document.querySelector("#root"));
}, 1000);
