import { ReactElement, Dispatch, SetStateAction } from 'react'
import { MotionProps } from 'framer-motion'

import Flex from '@components/Flex'
import { Heading } from '@components/Typo'

import * as $ from './styles'

const Range = ({
  to,
  from,
  value,
  onSlide,
  ...restProps
}: RangeProps & React.HTMLAttributes<HTMLInputElement> & MotionProps) => {
  const renderSteps = (from, to): ReactElement[] => {
    const steps: ReactElement[] = []
    for (let i = Number(from); i <= Number(to); i++) {
      steps.push(<$.Step />)
    }
    return steps
  }

  return (
    <Flex flexDirection="column" mx={3}>
      <Flex justifyContent="space-between" mb={2}>
        <Heading fontSize={1} color="white">
          {from}
        </Heading>
        <Heading fontSize={1} color="white">
          {to}
        </Heading>
      </Flex>
      <Flex justifyContent="space-between" px={2} mx={3} mb={1}>
        {renderSteps(from, to)}
      </Flex>
      <$.Range>
        <$.RangeInput
          type="range"
          min="2010"
          max="2021"
          value={value}
          onChange={(e) => onSlide(e.target.value)}
          {...restProps}
        />
      </$.Range>
    </Flex>
  )
}

export interface RangeProps {
  to: string
  from: string
  value: string
  onSlide: Dispatch<SetStateAction<string>>
}

export default Range
