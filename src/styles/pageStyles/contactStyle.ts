import styled from 'styled-components'
import css from '@styled-system/css'

export const Social = styled.a(
  css({
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'text',
    color: 'white',
    fontSize: 2,
    textDecoration: 'none',
    transition: 'all .3s ease-out',
    svg: {
      transition: 'all .3s ease-out',
      mr: 2
    },
    ':hover': {
      color: 'accent',
      svg: {
        fill: 'accent'
      }
    }
  })
)
