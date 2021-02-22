import { colors } from '@styles/theme'
import { MotionProps } from 'framer-motion'
import { BiErrorAlt } from 'react-icons/bi'

import * as $ from './styles'

const Input = ({
  value,
  name,
  state,
  error,
  placeholder,
  type = 'text',
  ...restProps
}: InputProps & React.HTMLAttributes<HTMLInputElement> & MotionProps) => {
  return (
    <$.Container>
      <$.Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        state={state}
        {...restProps}
      />
      {error && <BiErrorAlt size={26} color={colors.error} />}
    </$.Container>
  )
}

export interface InputProps {
  value: string
  name: string
  error?: string
  type?: string
  placeholder: string
  state?: string
}

export default Input
