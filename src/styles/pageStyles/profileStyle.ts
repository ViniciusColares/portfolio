import styled from 'styled-components'
import css from '@styled-system/css'
import { rgba } from 'polished'

import Flex from '@components/Flex'
import { Heading } from '@components/Typo'
import { colors } from '@styles/theme'

export const Profile = styled(Flex)(
  css({
    justifyContent: 'center'
  })
)

export const SectionSubTitle = styled(Heading)(
  css({
    display: 'flex',
    fontSize: 3,
    color: 'accent',
    alignItems: 'center',
    '> svg': {
      marginRight: 2
    }
  })
)

export const Info = styled(Flex)(
  css({
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 2,
    '> h1': {
      margin: 0,
      fontSize: 4
    }
  })
)

export const Intro = styled(Flex)(
  css({
    flexDirection: 'column',
    flex: '1 auto',
    mx: 3,
    p: 3,
    borderRadius: '8px',
    bg: rgba(colors.primaryDark, 0.5),
    backdropFilter: 'blur(3px)',
    '> p': {
      paddingRight: 2,
      '> span': {
        color: 'accent'
      }
    }
  })
)

export const Timeline = styled(Flex)(
  css({
    position: 'relative',
    width: '100%'
  })
)

export const Carousel = styled(Flex)(
  css({
    position: 'relative',
    width: '100%',
    height: '230px'
  })
)

export const Step = styled(Flex)<{ visible: boolean }>(
  css({
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    opacity: 0,
    left: 0,
    top: 0,
    h2: {
      fontSize: 3,
      color: 'accent'
    },
    h3: {
      fontSize: 2,
      color: 'primaryDark'
    }
  }),
  ({ visible }) =>
    visible &&
    css({
      opacity: 1
    })
)

export const Knowledge = styled(Flex)(
  css({
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flex: '1 auto',
    bg: rgba(colors.primaryDark, 0.25),
    backdropFilter: 'blur(3px)',
    svg: {
      my: 2,
      mr: 3,
      width: '24px',
      height: '24px'
    }
  })
)

export const AdditionalInfo = styled(Flex)(
  css({
    flexDirection: 'column',
    padding: '0 15px',
    p: {
      m: 0,
      fontSize: 2,
      lineHeight: 1.5
    }
  })
)

export const DuolingoSection = styled(Flex)(
  css({
    flexDirection: 'column',
    alignSelf: 'center',
    width: 'calc(100% - 30px)',
    background: 'rgba(255 255 255 / 90%)',
    boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.35)',
    borderRadius: '6px',
    p: 3,
    mt: 4,
    header: {
      display: 'flex',
      width: 'fit-content',
      alignSelf: 'center',
      alignItems: 'flex-end',
      marginTop: '-55px',
      cursor: 'pointer',
      '> div:first-of-type': {
        zIndex: 1
      },
      '> div:last-of-type': {
        backgroundColor: 'white',
        padding: '10px 25px',
        borderRadius: '50px',
        marginLeft: '-20px',
        boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.15)'
      }
    },
    '.duolingo-avatar': {
      borderRadius: '50%',
      border: '4px solid #78C800 !important'
    },
    span: {
      color: 'gray75'
    }
  })
)

export const DuolingoUser = styled('a')(
  css({
    fontFamily: 'text',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: 3,
    fontWeight: 600,
    color: '#78C800',
    mb: 1
  })
)

export const TotalExp = styled(Flex)(
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    span: {
      mb: 0
    }
  })
)

export const LangInfo = styled(Flex)(
  css({
    mt: 3
  })
)

export const LangCol = styled(Flex)(
  css({
    alignItems: 'center',
    '> span:first-of-type': {
      fontSize: 3,
      fontWeight: 500
    },
    '.trophy': {
      position: 'absolute',
      right: '-10px',
      bottom: 0
    }
  })
)

export const ExpCol = styled(Flex)(
  css({
    alignItems: 'center',
    span: {
      fontWeight: 500,
      '&:first-of-type': {
        fontSize: 3
      },
      '&:not(:first-of-type)': {
        lineHeight: '40px'
      }
    }
  })
)

export const CrownsCol = styled(Flex)(
  css({
    alignItems: 'center',
    '> span': {
      lineHeight: '40px',
      fontWeight: 500
    }
  })
)
