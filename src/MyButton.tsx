import React from "react";

const MyButton = ({
  value,
  style,
  onclick,
  className,
}: {
  value: string;
  style: {};
  className: string;
  onclick: ()=>void;
}) => {
  return (
    <button className={className} style={style} onClick={onclick}>
      {value}
    </button>
  );
};

export default MyButton;
