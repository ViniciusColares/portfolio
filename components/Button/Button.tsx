import React from "react";

import { ButtonStyle } from "./ButtonStyle";

interface IButton {
  name: string;
  variant: Array<string>;
  action: React.MouseEvent<HTMLElement>;
  type: "button" | "submit" | "reset";
  icon: React.FC;
  isLoading: boolean;
}

const Button = ({
  name,
  variant,
  action,
  type,
  icon,
  ...restProps
}: IButton) => (
  <ButtonStyle variant={variant} onClick={action} type={type} {...restProps}>
    {icon && <img alt={name} src={icon} />}
    {name}
  </ButtonStyle>
);

Button.defaultProps = {
  type: "button",
  name: "Custom Button",
  variant: [],
  isLoading: false,
};

export default Button;
