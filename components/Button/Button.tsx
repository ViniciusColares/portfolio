import React, { ReactElement } from "react";

import { ButtonStyle } from "./ButtonStyle";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string[];
  isLoading: boolean;
  icon?: string;
}

const Button = ({ name, variant, type, icon, ...restProps }: ButtonProps) => (
  <ButtonStyle variant={variant} type={type} {...restProps}>
    {icon && <img alt={name} src={icon} />}
    {name}
  </ButtonStyle>
);

Button.defaultProps = {
  type: "button",
  isLoading: false,
};

export default Button;
