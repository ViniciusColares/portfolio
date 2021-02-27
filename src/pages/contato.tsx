import { useState } from 'react'
import confetti from 'canvas-confetti'
import clsx from 'clsx'
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
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [newsletterCheck, setNewsletterCheck] = useState(false)

  const changeName = (evt) => setFirstName(evt.currentTarget.value)
  const changeEmail = (evt) => setEmail(evt.currentTarget.value)
  const filledForm = () =>
    email.length > 0 && firstName.length > 0 && newsletterCheck

  const subscribeNewsletter = async (evt) => {
    evt.preventDefault()

    const form = new FormData()
    form.set('api_key', process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY)
    form.set('first_name', firstName)
    form.set('email', email)
    form.set('tags', process.env.NEXT_PUBLIC_CONVERTKIT_TAG_NEWSLETTER)

    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          mode: 'cors',
          body: form
        }
      ).then((res) => res.json())

      if (response.status !== 'OK') {
        response.message === 'Email address is invalid' && setInvalidEmail(true)
        document
          .querySelector('input[name="email"] ~ div')
          ?.classList.add('visible')
      }

      if (!response.error) {
        setFirstName('')
        setEmail('')
        setNewsletterCheck(false)
        setInvalidEmail(false)

        confetti({
          angle: 270,
          spread: 70,
          particleCount: 260,
          origin: { x: 0.5, y: -0.4 }
        })
      }
    } catch (e) {
      console.log(e)
    }
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

      <form onSubmit={subscribeNewsletter}>
        <Flex flexDirection="column" mt={2} spaceChildren={2} px={4}>
          <Input
            value={firstName}
            onChange={changeName}
            name="firstName"
            placeholder="Primeiro nome ou apelido"
          />
          <Input
            value={email}
            onChange={changeEmail}
            name="email"
            type="email"
            state={clsx({ error: invalidEmail })}
            error={invalidEmail ? 'Endereço de e-mail inválido' : ''}
            placeholder="melhor.conta@email.com.br"
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

            <Button
              disabled={!filledForm()}
              name="Cadastrar"
              type="submit"
              icon={BiMailSend}
            />
          </Flex>
        </Flex>
      </form>

      <Flex flexDirection="column" alignItems="stretch" mt={6}>
        <Heading fontSize={5} color="accent" textAlign="center" mb={4}>
          Me encontre também
        </Heading>

        <Flex flex={1} justifyContent="space-evenly" alignItems="center">
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

          <Image width="212px" height="180px" src="/assets/social.png" />
        </Flex>
      </Flex>
    </MainPage>
  )
}

export default Contato
