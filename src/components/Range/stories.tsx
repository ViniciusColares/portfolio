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
  name: 'Range'
}
Basic.argTypes = { onClick: { action: 'clicked' } }

export const Loading = Template.bind({})
Loading.args = {
  name: 'Loading',
  isLoading: true
}
