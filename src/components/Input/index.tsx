import { MotionProps } from 'framer-motion'
import * as $ from './styles'

const Input = ({
  placeholder,
  name,
  type = 'text',
  ...restProps
}: InputProps & React.HTMLAttributes<HTMLInputElement> & MotionProps) => {
  return (
    <$.Input name={name} type={type} placeholder={placeholder} {...restProps} />
  )
}

export interface InputProps {
  name: string
  type?: string
  placeholder: string
}

export default Input
