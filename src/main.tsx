import ReactDOM from "react-dom/client";
import { App } from "~/App.tsx";
import "antd/dist/reset.css";
import "antd-css-utilities/utility.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/app.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
