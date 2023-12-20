import $ from "jquery";
import "jquery-mask-plugin";
import Input from "../Input/Index";

const InputMask = (props) => {
  $(() => {
    if (props.mask) {
      $("#" + props.id).mask(props.mask, props.maskConfig);
    }
  });
  return <Input {...props} />;
};

export default InputMask;
