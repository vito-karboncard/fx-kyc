import Icon from "src/components/icon/index";
import { FxOptionsPopUp } from "src/components/FxPopup";

function Operations({
  onOperation,
  options,
}: {
  onOperation?: (v: string) => void;
  options: Array<{ label?: string; value: string }>;
}) {
  return (
    <FxOptionsPopUp options={options} onSelect={onOperation}>
      <div>
        <Icon name={"menu-mobile"} />
      </div>
    </FxOptionsPopUp>
  );
}

export default Operations;
