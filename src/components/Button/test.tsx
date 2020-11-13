import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('<Button />', () => {
  it('it should render text inside button', () => {
    const { container } = render(<Button name="botão" />)
    expect(screen.getByText('botão')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('it should render a loading button', () => {
    const { container } = render(<Button name="botão" isLoading />)
    expect(screen.getByText('carregando')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
