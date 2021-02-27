import { render } from '@testing-library/react'

import Range from '.'

describe('<Range />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Range from="0" to="10" value="5" onSlide={() => console.log()} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
