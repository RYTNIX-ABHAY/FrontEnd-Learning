// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import Count from "./src/count";
import { Provider } from "react-redux";
import store from "./src/store";

function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
