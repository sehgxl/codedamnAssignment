import { FunctionComponent } from "react";

const SecondaryBtn: FunctionComponent<{
  btnText: string;
  handleClick?: Function;
  state?: boolean;
}> = ({ btnText, handleClick, state }) => {
  return (
    <button
      onClick={() => {
        handleClick ? handleClick() : null;
      }}
      className={`rounded-lg px-4 py-2 ${
        state ? " text-violet-600" : "text-black"
      } `}
    >
      {btnText}
    </button>
  );
};

export default SecondaryBtn;
