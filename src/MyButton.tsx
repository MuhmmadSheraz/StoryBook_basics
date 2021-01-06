import React from "react";
const MyButton = ({
  value,
  style,
  onclick,
  className,
  customColor,
  buttonTextColor,
}: {
  value: string;
  style: {};
  className: string;
  customColor: string;
  buttonTextColor: string;
  onclick: () => void;
}) => {
  return (
    <div style={{ backgroundColor: customColor, height: "50px" }}>
      <button
        className={className}
        style={{ color: buttonTextColor }} //===>here style = color:custom Style(Only Color)
        // style={style}//===>here style = custom Style( Full)
        onClick={onclick}
      >
        {value}
      </button>
    </div>
  );
};

export default MyButton;
