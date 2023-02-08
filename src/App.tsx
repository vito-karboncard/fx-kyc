import { Button } from "antd";
import "./style/App.scss";
import Style from "./style/override-antd.global.module.scss";
import classNames from "classnames";
import "./style/tailwind.css";

function App() {
  return (
    <div className={classNames("App", Style.overrideAntd)}>
      <p className={"my-2"}>
        <Button size={"small"}>Antd button</Button>
        <Button size={"middle"} type={"primary"} ghost={true}>
          Antd button
        </Button>
        <Button size={"large"}>Antd button</Button>
      </p>
    </div>
  );
}

export default App;
