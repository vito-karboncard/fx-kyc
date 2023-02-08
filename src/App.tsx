import "./style/App.scss";
import { RouterProvider } from "react-router-dom";
import Style from "./style/override-antd.global.module.scss";
import classNames from "classnames";
import "./style/tailwind.css";
import route from "./route";

function App() {
  return (
    <div className={classNames("App", Style.overrideAntd)}>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
