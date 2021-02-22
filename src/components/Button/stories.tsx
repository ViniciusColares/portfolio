import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '.'

export default {
  title: 'Core/Button',
  component: Button
} as Meta

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  name: 'Button'
}
Basic.argTypes = { onClick: { action: 'clicked' } }

export const Loading = Template.bind({})
Loading.args = {
  name: 'Loading',
  isLoading: true
}
