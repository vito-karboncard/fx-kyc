import "./style/App.scss";
import { RouterProvider } from "react-router-dom";
import Style from "./style/override-antd.global.module.scss";
import classNames from "classnames";
import "./style/tailwind.css";
import route from "./route";
import { useEffect } from "react";

function App() {
  useAntOverrideStyle();
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

export default App;
