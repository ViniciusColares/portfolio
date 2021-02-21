import { useState, useEffect } from 'react'
import { MotionProps } from 'framer-motion'

import * as $ from './styles'

export const Checkbox = ({
  id,
  checked = false,
  onChange,
  group,
  disabled,
  label
}: CheckboxProps & React.HTMLAttributes<HTMLInputElement> & MotionProps) => {
  const [checkedBox, setCheckedBox] = useState(checked)

  const callAction = (e) => {
    setCheckedBox(!checkedBox)
    onChange && onChange(e)
  }

  useEffect(() => {
    setCheckedBox(checked)
  }, [checked])

  return (
    <$.CheckboxContainer htmlFor={`checkbox${id}`}>
      <$.CheckboxStyle
        id={`checkbox${id}`}
        onChange={(e) => !disabled && callAction(e)}
        name={group}
        value={id}
        checked={checkedBox}
        disabled={disabled}
        type="checkbox"
      />
      <span>{label}</span>
    </$.CheckboxContainer>
  )
}

export interface CheckboxProps {
  checked?: boolean
  group?: string
  disabled?: boolean
  label: string
}

export default Checkbox
