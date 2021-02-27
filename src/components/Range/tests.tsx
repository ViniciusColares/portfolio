import { render, screen } from '@testing-library/react'

import Range from '.'

describe('<Range />', () => {
  it('should render the heading', () => {
    const { container } = render(<Range />)

    expect(screen.getByRole('heading', { name: /Range/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
