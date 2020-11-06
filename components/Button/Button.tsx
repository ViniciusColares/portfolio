import React from "react";

import { ButtonStyle } from "./ButtonStyle";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string | string[];
  isLoading: boolean;
  icon?: string;
  size?: string;
  state?: string;
  fill?: string;
}

const Button = ({ name, type, icon, isLoading, ...restProps }: ButtonProps) => (
  <ButtonStyle type={type} {...restProps}>
    {isLoading ? (
      "carregando"
    ) : (
      <>
        {icon && <img alt={name} src={icon} />}
        {name}
      </>
    )}
  </ButtonStyle>
);

Button.defaultProps = {
  type: "button",
  isLoading: false,
};

export default Button;
