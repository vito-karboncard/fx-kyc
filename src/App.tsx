import "./style/App.scss";
import "./style/common.scss";
import "./style/tailwind.css";
import { RouterProvider } from "react-router-dom";
import Style from "./style/override-antd.global.module.scss";
import classNames from "classnames";
import route from "./route";
import { useEffect } from "react";

function App() {
  useAntOverrideStyle();
  useTailwindPriorityStyle();
  return (
    <div className={classNames("App", Style.overrideAntd)}>
      <RouterProvider router={route} />
    </div>
  );
}

const useAntOverrideStyle = () => {
  useEffect(() => {
    if (!document.body.classList.contains(Style.overrideAntd)) {
      document.body.classList.add(Style.overrideAntd);
    }
  }, []);
};

const useTailwindPriorityStyle = () => {
  useEffect(() => {
    if (!document.body.classList.contains("tailwind-high-level")) {
      document.body.classList.add("tailwind-high-level");
    }
  }, []);
};

export default App;
