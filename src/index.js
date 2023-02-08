import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/store";
import ThemeContextWrapper from "./utils/ThemeContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextWrapper>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeContextWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
