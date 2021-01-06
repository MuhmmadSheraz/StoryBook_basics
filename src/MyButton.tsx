import React from "react";
const MyButton = ({
  value,
  style,
  onclick,
  className,
  customColor,
}: {
  value: string;
  style: {};
  className: string;
  customColor: string;
  onclick: () => void;
}) => {
  return (
    <button className={className} style={style} onClick={onclick}>
      {value}
    </button>
  );
};

export default MyButton;
