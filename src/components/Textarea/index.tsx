import { MotionProps } from 'framer-motion'

import * as $ from './styles'

const Textarea = ({
  name,
  placeholder,
  rows,
  ...restProps
}: TextareaProps & React.HTMLAttributes<HTMLTextAreaElement> & MotionProps) => {
  return (
    <$.Textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      {...restProps}
    />
  )
}

export interface TextareaProps {
  name: string
  placeholder: string
  rows: number
}

export default Textarea
