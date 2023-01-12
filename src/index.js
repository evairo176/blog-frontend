import React from "react";
import ReactDOM from "react-dom/client";
// import "./styles/tailwind.css";
// import "./index.css";
// import "./styles/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
