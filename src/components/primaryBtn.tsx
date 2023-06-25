import { FunctionComponent } from "react";

const PrimaryBtn: FunctionComponent<{
  btnText: string;
}> = (props) => {
  const btnText = props.btnText;
  return (
    <button className=" rounded-lg bg-violet-600 px-4 py-2 text-lg font-medium text-white">
      {btnText}
    </button>
  );
};

export default PrimaryBtn;
