import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Range from '.'

export default {
  title: 'Core/Range',
  component: Range
} as Meta

const Template: Story<ComponentProps<typeof Range>> = (args) => (
  <Range {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  from: '0',
  to: '10',
  value: '5'
}
