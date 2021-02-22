import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Textarea from '.'

export default {
  title: 'Core/Textarea',
  component: Textarea
} as Meta

const Template: Story<ComponentProps<typeof Textarea>> = (args) => (
  <Textarea {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  name: 'bio',
  placeholder: 'write your bio',
  rows: 4
}
