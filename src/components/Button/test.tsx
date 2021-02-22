import { render, screen } from '@testing-library/react'

import Button from '.'

describe('Button', () => {
  it('it should render text inside button', () => {
    const { container } = render(<Button name="botão" />)
    expect(screen.getByRole('button'))
    expect(container.firstChild).toMatchSnapshot()
  })

  it('it should render a loading button', () => {
    const { container } = render(
      <Button name="botão" isLoading data-testid="svgButton" />
    )
    expect(screen.getByTestId('svgButton'))
    expect(container.firstChild).toMatchSnapshot()
  })
})
