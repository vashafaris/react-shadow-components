import * as React from "react";

import "./Button.scss";

export interface ButtonProps {
  children: React.ReactNode;
  color?: any;
  backgroundColor?: any;
  onClick?: () => any;
}

const Button = ({
  children,
  color = "black",
  backgroundColor = "#90ee90",
  onClick = () => {
    console.log("button is clicked");
  },
}: ButtonProps): JSX.Element => {
  return (
    <button
      className="shdw-button"
      style={{
        color: color,
        backgroundColor: backgroundColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
