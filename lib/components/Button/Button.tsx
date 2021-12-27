import React from "react";

import "./Button.scss";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => any;
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className="shdw-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
