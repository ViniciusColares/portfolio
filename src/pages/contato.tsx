import { useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import {
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiGithub,
  SiDevDotTo
} from 'react-icons/si'

import MainPage from '@templates/MainPage'
import Flex from '@components/Flex'
import Button from '@components/Button'
import { Text, Heading } from '@components/Typo'
import Input from '@components/Input'
import Checkbox from '@components/Checkbox'
import Image from 'next/image'

import * as $ from '@styles/pageStyles/contactStyle'

const Contato = () => {
  const [email, setEmail] = useState('')
  const [newsletterCheck, setNewsletterCheck] = useState(true)

  const subscribeNewsletter = (event) => {
    event.preventDefault()
    alert(
      'Por favor, tente novamente amanhã. Finalizo essa integração ainda hoje.'
    )
  }

  return (
    <MainPage pageTitle="Contato">
      <Flex flexDirection="column" alignItems="center" mt={4}>
        <Heading fontSize={3} textAlign="center">
          Gostou? Quer mais?!
        </Heading>
        <Heading fontSize={5} color="accent" textAlign="center">
          Mando pra onde?
        </Heading>
      </Flex>

      <Text textAlign="center" mt={2} px={2}>
        <span>Escreva seu melhor endereço de e-mail.</span> <br />
        Espero que meu conteúdo te ajude de alguma forma.
      </Text>

      <form action="post" onSubmit={subscribeNewsletter}>
        <Flex flexDirection="column" mt={2} spaceChildren={2} px={4}>
          <Input
            defaultValue={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            name="email"
            type="email"
            placeholder="sua.melhor.conta@email.com.br"
          />
          <Flex
            justifyContent="space-between"
            alignItems="center"
            spaceChildren={2}
            mt={1}
          >
            <Checkbox
              checked={newsletterCheck}
              onChange={(e) => setNewsletterCheck(e.currentTarget.checked)}
              label="Eu aceito receber conteúdo sobre novidades e outras atividades."
            />

            <Button name="Cadastrar" type="submit" icon={BiMailSend} />
          </Flex>
        </Flex>
      </form>

      <Flex flexDirection="column" alignItems="center" mt={6}>
        <Heading fontSize={5} color="accent" textAlign="center" mb={4}>
          Me encontre também
        </Heading>

        <Flex justifyContent="center" alignItems="center" spaceChildren={4}>
          <Flex flexDirection="column" spaceChildren={3}>
            <$.Social
              href="https://www.instagram.com/viniciuscolares.dev/"
              target="blank"
            >
              <SiInstagram size={22} color="white" /> Instagram
            </$.Social>
            <$.Social
              href="https://www.linkedin.com/in/viniciuscolares/"
              target="blank"
            >
              <SiLinkedin size={22} color="white" /> LinkedIn
            </$.Social>
            <$.Social href="https://twitter.com/viniciuscoIares" target="blank">
              <SiTwitter size={22} color="white" /> Twitter
            </$.Social>
            <$.Social href="https://github.com/ViniciusColares" target="blank">
              <SiGithub size={22} color="white" /> Github
            </$.Social>
            <$.Social href="https://dev.to/viniciuscolares" target="blank">
              <SiDevDotTo size={22} color="white" /> Dev.to
            </$.Social>
          </Flex>

          <Image width={212} height={180} src="/assets/findMe.png" />
        </Flex>
      </Flex>
    </MainPage>
  )
}

export default Contato
