import styled from 'styled-components'
import css from '@styled-system/css'

export const CallToAction = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    span: {
      marginBottom: 2
    }
  })
)

export const MainHeading = styled('hgroup')(
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4vh'
  })
)
