import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";

import "antd/dist/reset.css";
import "./app/styles/main.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
