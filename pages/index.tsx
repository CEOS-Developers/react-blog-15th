import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Team Healseer - CRUD app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Div>
        헬시어 화이팅
      </Div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  padding: 0 2rem;
`

const Div = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`