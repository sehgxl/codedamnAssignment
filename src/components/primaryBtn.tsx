import { FunctionComponent } from "react";

const PrimaryBtn: FunctionComponent<{
  btnText: string;
}> = (props) => {
  const btnText = props.btnText;
  return (
    <button className=" sm:base rounded-lg bg-violet-600 px-4 py-2 font-medium text-white sm:text-lg">
      {btnText}
    </button>
  );
};

export default PrimaryBtn;
