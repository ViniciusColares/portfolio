import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import UnderConstruction from '@templates/UnderConstruction'
import PageLayout from '@templates/PageLayout'
import Flex from '@components/Flex'
import Button from '@components/Button'
import { Text, Heading } from '@components/Typo'

import * as SC from '@styles/pageStyles/homeStyle'

const Home = () => {
  const router = useRouter()

  return process.env.underConstruction ? (
    <UnderConstruction />
  ) : (
    <PageLayout pageTitle="início">
      <Head>
        <title>Vinicius Colares - Desenvolvedor de sistemas</title>
      </Head>
      <SC.MainHeading>
        <Heading fontSize={1}>Revolucione seu negócio</Heading>
        <Heading fontSize={4} color="accent">
          com tecnologia
        </Heading>
      </SC.MainHeading>

      <Flex my="3.5vh" mx="3vw">
        <Image
          src="/assets/home_illustrations.svg"
          alt="Picture of the author"
          width={450}
          height={450}
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
    </PageLayout>
  )
}

export default Home
