import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement("h1",{},"hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);