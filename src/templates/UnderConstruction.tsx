import React from 'react'
import Head from 'next/head'

import { linearGradient } from 'polished'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Heading } from 'src/components/Typo'
import { Text } from 'src/components/Typo'
import { theme, medias } from 'src/styles/theme'

import UnderConstructionSVG from '@public/assets/under_construction.svg'

import Flex from '@components/Flex'

export const Template = styled('section')(
  css({
    display: 'flex',
    bg: 'gray',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    ...linearGradient({
      colorStops: [
        `${theme.colors.primary1} 20%`,
        `${theme.colors.primary2} 80%`
      ],
      toDirection: 'to bottom left',
      fallback: theme.colors.primary1
    }),
    [medias('sm')]: {
      '&::before, &::after': {
        content: "''",
        position: 'absolute',
        display: 'block'
      },
      '&::before': {
        top: 0,
        left: 0,
        width: '600px',
        height: '455px',
        zIndex: 0,
        background:
          "url('/assets/bg-top-left-bandage.png') left top no-repeat fixed"
      },
      '&::after': {
        right: 0,
        bottom: 0,
        width: '563px',
        height: '458px',
        zIndex: 0,
        background:
          "url('/assets/bg-bottom-right-bandage.png') right bottom no-repeat fixed"
      }
    }
  })
)

export const Page = styled('section')(
  css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    overflow: 'auto',
    zIndex: 1,
    ...linearGradient({
      colorStops: [
        `${theme.colors.primary1} 20%`,
        `${theme.colors.primary2} 90%`
      ],
      toDirection: 'to bottom',
      fallback: theme.colors.primary1
    }),
    '&::before': {
      content: "''",
      background: "url('/assets/bg.png') center top no-repeat fixed",
      backgroundSize: 'contain',
      backgroundAttachment: 'fixed',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -1
    },
    [medias('sm')]: {
      width: '470px',
      height: '80vh',
      borderWidth: '4px',
      borderStyle: 'solid',
      borderColor: 'white',
      borderRadius: '16px !important',
      boxShadow: '20px 20px 0 rgba(0,0,0,0.4)'
    }
  })
)

const UnderConstruction = () => {
  return (
    <Template>
      <Page>
        <Head>
          <title>Vinicius Colares - Desenvolvedor de sistemas</title>
        </Head>

        <Flex flexDirection="column" mt="8vh">
          <Heading tag="h1" textAlign="center" mt={0}>
            Vinícius <strong>Colares</strong>
          </Heading>
          <Heading tag="h3" textAlign="right" fontSize={1} mt={0}>
            web developer
          </Heading>
        </Flex>

        <Flex flexDirection="column" alignItems="center" mt={5} px={5}>
          <Text textAlign="center">
            Desenvolvendo experiências na internet há mais de{' '}
            <strong>10 anos</strong>, focado em oferecer soluções produtivas e
            divertidas.
          </Text>
          <Text textAlign="center">
            Já gerei tráfego e <strong>conquistei clientes</strong> para
            centenas de empresas, conectei milhares de usuários à serviços,
            diverti e informei <strong>milhões de pessoas</strong>.
          </Text>
          <Text textAlign="center">
            Estou reconstruindo meu portfólio, pra{' '}
            <strong>contar a minha história</strong> com a internet e também pra
            me divertir praticando essa atividade fantástica que é
          </Text>
          <Heading tag="h3" fontSize="4" my={0}>
            <strong>&lt;</strong>programar<strong>/&gt;</strong>
          </Heading>
        </Flex>

        <Flex width={1} justifyContent="center" mt="8vh">
          <UnderConstructionSVG width="100%" />
        </Flex>
      </Page>
    </Template>
  )
}

export default UnderConstruction
