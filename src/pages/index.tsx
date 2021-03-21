import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import MainPage from '@templates/MainPage'
import Flex from '@components/Flex'
import Button from '@components/Button'
import { Text, Heading } from '@components/Typo'

import * as SC from '@styles/pageStyles/homeStyle'

const Home = () => {
  const router = useRouter()

  return (
    <MainPage pageTitle="início">
      <SC.MainHeading>
        <Heading tag="h2" fontSize={2} textAlign="center">
          Revolucione o seu mundo com
        </Heading>
        <Heading tag="h2" fontSize={6} textAlign="center" color="accent">
          Tecnologia
        </Heading>
      </SC.MainHeading>

      <Flex
        width={[250, 350]}
        height={[250, 350]}
        alignSelf="center"
        my="3vh"
        mx="3vw"
      >
        <Image
          src="/assets/home_illustrations.svg"
          alt="Dummy building a web page"
          layout="fill"
        />
      </Flex>

      <SC.CallToAction>
        <Text tag="span">Como fazer isso?</Text>
        <Button
          onClick={() => router.push('/contato')}
          name="Vamos conversar"
          size="big"
        />
      </SC.CallToAction>
    </MainPage>
  )
}

export default Home
