import React from 'react'
import { IconBaseProps } from 'react-icons'
import { VscLoading } from 'react-icons/vsc'
import { Rotate } from '@styles/animations'

import { ButtonStyle } from './ButtonStyle'

const animations = {
  initial: {
    width: 'auto'
  }
}

const Button = ({
  name,
  type = 'button',
  icon: Icon,
  isLoading = false,
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonStyle
      animate={'initial'}
      variants={animations}
      transition={{ type: 'spring' }}
      type={type}
      disabled={isLoading}
      {...restProps}
    >
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
  )
}

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  name: string
  isLoading?: boolean
  size?: 'small' | 'big'
  icon?: React.ComponentType<IconBaseProps>
}

export default Button
