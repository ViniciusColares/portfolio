import React from 'react'
import { IconBaseProps } from 'react-icons'

import { ButtonStyle } from './ButtonStyle'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string | string[]
  isLoading?: boolean
  icon?: React.ComponentType<IconBaseProps>
  size?: string
  state?: string
  fill?: string
  name: string
}

const Button = ({
  name,
  type = 'button',
  icon: Icon,
  isLoading = false,
  ...restProps
}: ButtonProps) => (
  <ButtonStyle type={type} {...restProps}>
    {isLoading ? (
      'carregando'
    ) : (
      <>
        {Icon && <Icon size="24px" color="#fff" />}
        {name}
      </>
    )}
  </ButtonStyle>
)

export default Button
