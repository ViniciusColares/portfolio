import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('<Button />', () => {
  it('it should render text inside button', () => {
    render(<Button name="botão" />)
    expect(screen.getByText('botão')).toBeInTheDocument()
  })

  it('it should render a loading button', () => {
    render(<Button name="botão" isLoading />)
    expect(screen.getByText('carregando')).toBeInTheDocument()
  })
})
