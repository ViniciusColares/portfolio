import { screen, render } from '@testing-library/react'

import Textarea from '.'

describe('Textarea Component', () => {
  it('it should render a Textarea', () => {
    const { container } = render(
      <Textarea
        name="bio"
        placeholder="type something about you"
        rows={4}
        data-testid="bio"
      />
    )
    expect(screen.getByTestId('bio'))
    expect(container.firstChild).toMatchSnapshot()
  })
})
