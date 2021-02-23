import { useRef } from 'react'
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
  const tooltipRef = useRef<HTMLDivElement>(null)

  return (
    <$.Container>
      <$.Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onFocus={() => tooltipRef?.current?.classList.remove('visible')}
        state={state}
        {...restProps}
      />
      {error && (
        <>
          <BiErrorAlt
            size={26}
            color={colors.error}
            onClick={() => tooltipRef?.current?.classList.toggle('visible')}
          />
          <$.Tooltip ref={tooltipRef}>{error}</$.Tooltip>
        </>
      )}
    </$.Container>
  )
}

export interface InputProps {
  value?: string
  name: string
  error?: string
  type?: string
  placeholder: string
  state?: string
}

export default Input
