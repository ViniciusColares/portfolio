import React from 'react'

import PageLayout from '@templates/PageLayout'
import { Heading } from '@components/Typo'

const Blog = () => {
  return (
    <PageLayout pageTitle="blog">
      <hgroup style={{ marginTop: '3vh' }}>
        <Heading fontSize={4} textAlign="center" mb={1}>
          Meu Blog
        </Heading>
      </hgroup>
    </PageLayout>
  )
}

export default Blog
