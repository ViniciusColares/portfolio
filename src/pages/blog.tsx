import React from 'react'

import homeIllustrations from '@public/assets/home_illustrations.svg'
import Button from '@components/Button'
import { Heading, Text } from '@components/Typo'
import Flex from '@components/Flex'

const Blog = () => {
  return (
    <>
      <hgroup style={{ marginTop: '3vh' }}>
        <Heading fontSize={4} textAlign="center" mb={1}>
          Meu Blog
        </Heading>
      </hgroup>
      <img
        style={{ width: '90%', marginTop: '2.5vh', marginBottom: '2.5vh' }}
        alt="Illustration of people working on a tech project"
        src={homeIllustrations}
      />
      <Flex flexDirection="column" alignItems="center">
        <Text mb={2} fontSize={2}>
          Como fazer isso?
        </Text>
        <Button name="Vamos conversar" variant={['big']} />
      </Flex>
    </>
  )
}

export default Blog
