import React, { ReactNode } from 'react'
import Head from 'next/head'

import Menu from './Menu'
import * as $ from './style'

const MainPage = ({
  pageTitle,
  children
}: {
  pageTitle?: string
  children: ReactNode | ReactNode[]
}) => {
  return (
    <$.Wrapper>
      <$.Main>
        <Head>
          <title>Vinícius Colares</title>
        </Head>
        <$.MainContent>
          {pageTitle && (
            <$.Header>
              <$.PageTitle>{pageTitle}</$.PageTitle>
            </$.Header>
          )}
          {children}
        </$.MainContent>
        <Menu />
      </$.Main>
    </$.Wrapper>
  )
}

export default MainPage
