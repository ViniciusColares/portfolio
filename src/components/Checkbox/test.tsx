import { screen, render } from '@testing-library/react'

import Checkbox from '.'

describe('Checkbox', () => {
  it('it should render a Checkbox with label', () => {
    const { container } = render(<Checkbox label="remember me" />)
    expect(screen.getByRole('checkbox'))
    expect(container.firstChild).toMatchSnapshot()
  })
})
