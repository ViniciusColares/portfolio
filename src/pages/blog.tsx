import React from 'react'

import MainPage from '@templates/MainPage'
import { Heading } from '@components/Typo'

const Blog = () => {
  return (
    <MainPage pageTitle="blog">
      <hgroup style={{ marginTop: '3vh' }}>
        <Heading fontSize={4} textAlign="center" mb={1}>
          Meu Blog
        </Heading>
      </hgroup>
    </MainPage>
  )
}

export default Blog
