import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/common.scss";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Provider } from "react-redux";
import store from "store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
