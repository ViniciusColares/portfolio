import React from 'react'
import { IconBaseProps } from 'react-icons'
import { VscLoading } from 'react-icons/vsc'
import { Rotate } from '@styles/animations'

import { Container, Shadow, ButtonStyle } from './ButtonStyle'

const Button = ({
  name,
  type = 'button',
  icon: Icon,
  size = 'medium',
  isLoading = false,
  ...restProps
}: ButtonProps) => {
  return (
    <Container>
      <ButtonStyle type={type} size={size} disabled={isLoading} {...restProps}>
        {isLoading ? (
          <Rotate
            animate={{ rotate: 360 }}
            transition={{
              loop: Infinity,
              ease: 'linear',
              duration: 1
            }}
          >
            <VscLoading size="23px" color="#938CA3" />
          </Rotate>
        ) : (
          <>
            {Icon && <Icon size="24px" color="#fff" />}
            {name}
          </>
        )}
      </ButtonStyle>
      <Shadow size={size} />
    </Container>
  )
}

export interface ButtonProps {
  name: string
  onClick: (() => Promise<boolean>) | (() => void)
  isLoading?: boolean
  type?: 'button' | 'submit' | 'reset'
  size?: 'small' | 'medium' | 'big'
  icon?: React.ComponentType<IconBaseProps>
}

export default Button
