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
        <Heading fontSize={1}>Revolucione seu mundo</Heading>
        <Heading fontSize={5} color="accent">
          com tecnologia
        </Heading>
      </SC.MainHeading>

      <Flex my="3vh" mx="3vw" justifyContent="center">
        <Image
          src="/assets/home_illustrations.svg"
          alt="Dummy building a web page"
          width={350}
          height={350}
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
