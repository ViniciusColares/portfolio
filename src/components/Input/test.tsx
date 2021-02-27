import { screen, render } from '@testing-library/react'

import Input from '.'

describe('Input', () => {
  it('it should render a Input with label', () => {
    const { container } = render(
      <Input name="name" placeholder="escreva seu nome" data-testid="name" />
    )
    expect(screen.getByTestId('name'))
    expect(container.firstChild).toMatchSnapshot()
  })
})
