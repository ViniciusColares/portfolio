import { GetStaticProps } from 'next'
import Image from 'next/image'

import MainPage from '@templates/MainPage'

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiPostgresql,
  SiDocker,
  SiNpm,
  SiSass,
  SiNodeDotJs,
  SiWebpack,
  SiJest,
  SiLinux,
  SiWindows,
  SiGit,
  SiGithub,
  SiRuby,
  SiGulp,
  SiStrapi,
  SiTravisci,
  SiMysql,
  SiMongodb,
  SiNextDotJs
} from 'react-icons/si'
import { RiFindReplaceLine, RiKakaoTalkFill } from 'react-icons/ri'

import Crowns from '@public/assets/duolingo/crowns.svg'
import Streak from '@public/assets/duolingo/streak.svg'
import Trophy from '@public/assets/duolingo/trophy.svg'
import FlagBR from '@public/assets/duolingo/flag_pt.svg'
import FlagEN from '@public/assets/duolingo/flag_en.svg'
import FlagFR from '@public/assets/duolingo/flag_fr.svg'
import FlagDE from '@public/assets/duolingo/flag_de.svg'

import { Heading, Text } from '@components/Typo'
import Flex from '@components/Flex'

import * as $ from '@styles/pageStyles/profileStyle'

interface IPerfil {
  duolingo: {
    totalXp: number
    streak: number
    lingots: number
    courses: IDuolingoCourse[]
  }
}

interface IDuolingoCourse {
  xp: number
  crowns: number
  learningLanguage: string
}

export const getStaticProps: GetStaticProps = async () => {
  const duolingo = await fetch(
    'https://www.duolingo.com/2017-06-30/users/49543102?fields=totalXp,streak,courses'
  ).then((response) => response.json())

  return {
    props: {
      duolingo
    },
    revalidate: 60
  }
}

const Perfil = ({ duolingo }: IPerfil) => {
  const { courses } = duolingo

  const findCourse = (lang): IDuolingoCourse | undefined =>
    courses.find((course) => course?.learningLanguage === lang)

  const getExp = (lang): number | undefined => findCourse(lang)?.xp
  const getCrowns = (lang) => findCourse(lang)?.crowns
  const getTotalCrowns = () => courses.reduce((ac, cv) => ac + cv.crowns, 0)

  return (
    <MainPage pageTitle="perfil">
      <$.Profile tag="section" my={5}>
        <Image
          src="/assets/menu/profile.png"
          alt="An illustration of Vinicius Colares' face"
          layout="fixed"
          quality={100}
          width={59}
          height={80}
        />
        <$.Info>
          <Heading tag="h1">Vinícius Colares</Heading>
          <Text mb={0} color="accent">
            Desenvolvedor Web FullStack
          </Text>
          <Text mb={0}>Jan de 1992, Aracaju-SE, Brasil</Text>
        </$.Info>
      </$.Profile>

      <$.Intro tag="section" mb={5}>
        <Text mb={0}>
          Desenvolvedor web há mais de <span>10 anos</span>, apaixonado por {''}
          <span>desenvolvimento de interfaces e experiências</span>, sem abrir
          mão das boas práticas e performance.
        </Text>
      </$.Intro>

      <$.Timeline tag="section" mb={5}>
        <ul>
          <li>
            <Heading tag="h3">O início </Heading>
            <Heading tag="h4">R2 Agência Digital</Heading>
            <Heading tag="h5">04/2010 ... 06/2015</Heading>
            <Text>
              Acho que comecei como a maioria dos desenvolvedores front-end...
              Desenvolvendo sites, foram muitos sites, só aqui na R2 foram mais
              de 200, aprendi a resolver muitos problemas de interface, a pensar
              na <span>semântica e acessibilidade</span> para os mais variados
              públicos e necessidades.
            </Text>
          </li>
          <li>
            <Heading tag="h3">Próximo passo</Heading>
            <Heading tag="h4">S4B</Heading>
            <Heading tag="h5">03/2014 ... 03/2016</Heading>
            <Text>
              Na S4B eu aprendi um pouco a coordenar um pequeno time de
              desenvolvedores, a como trabalhar em equipe num mesmo projeto com
              código versionado em git e aprendi também que seu chefe nem sempre
              está interessado no <span>seu crescimento</span>.
            </Text>
          </li>
          <li>
            <Heading tag="h3">A era dos softwares</Heading>
            <Heading tag="h4">Connectlead</Heading>
            <Heading tag="h5">03/2016 ... 03/2018</Heading>
            <Text>
              Aqui eu finalmente comecei a fazer parte do mundo do
              desenvolvimento de softwares, metodologias ágeis, histórias de
              usuário, treinamentos, gestão de produto... Foram muitas sprints e
              muitos componentes criados e melhorados para atender às
              necessidades dos usuários. Além da experiência de trabalhar com
              outros <span>vários times</span> em conjunto.
            </Text>
          </li>
          <li>
            <Heading tag="h3">Uma aventura nativa</Heading>
            <Heading tag="h4">Vivi Tech</Heading>
            <Heading tag="h5">01/2019 ... 04/2019</Heading>
            <Text>
              Depois de um bom tempo estudando e praticanto React.js, fui
              convidado a integrar um time com o objetivo de desenvolver uma
              carteira digital, ótima experiência ... Aprendi sobre
              gerenciamento de estado, fluxo de dados, integração de serviços e
              o mais importante, aprendi que nem sempre as pessoas querem o{' '}
              <span>melhor para o projeto</span>, se esse melhor não vier delas.
            </Text>
          </li>
          <li>
            <Heading tag="h3">Expansão de horizontes</Heading>
            <Heading tag="h4">ioasys</Heading>
            <Heading tag="h5">07/2019 ... 07/2020</Heading>
            <Text>
              Depois de quase 10 anos de experiência, finalmente me permiti
              viver o <span>trabalho remoto</span>, a melhor fase ... Aprendi a
              importância de estar sozinho, me auto gerenciar, definir
              prioridades, trabalhar com times distribuídos, e o mais importante
              ... ainda tem muito caminho pela frente.
            </Text>
          </li>
        </ul>
      </$.Timeline>

      <$.Knowledge tag="section" mb={5}>
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiRedux />
        <SiPostgresql />
        <SiDocker />
        <SiGit />
        <SiNpm />
        <SiSass />
        <SiNodeDotJs />
        <SiWebpack />
        <SiJest />
        <SiLinux />
        <SiWindows />
        <SiGithub />
        <SiRuby />
        <SiGulp />
        <SiStrapi />
        <SiTravisci />
        <SiMysql />
        <SiMongodb />
        <SiNextDotJs />
      </$.Knowledge>

      <$.AdditionalInfo tag="section" mb={5}>
        <Flex flexDirection="column" mb={2}>
          <$.SectionSubTitle tag="h2" mb={2}>
            <RiFindReplaceLine />
            Curioso
          </$.SectionSubTitle>
          <Text mb={0}>
            Sempre fiquei intrigado com a sensação de <span>não saber</span>{' '}
            como as coisas funcionam e/ou o porquê de{' '}
            <span>não estarem funcionando</span>, ser curioso me abriu
            possibilidades para entender como <span>tudo é feito</span> sem me
            cansar. A curiosidade me ajuda a elaborar as <span>perguntas</span>{' '}
            com as quais eu posso buscar por respostas, que me mantêm na busca
            pelas soluções.
          </Text>
        </Flex>
        <Flex flexDirection="column" mb={2}>
          <$.SectionSubTitle tag="h2" mb={2}>
            <RiKakaoTalkFill />
            Comunicativo
          </$.SectionSubTitle>
          <Text mb={0}>
            Muito foi feito pela humanidade, pra não dizer tudo, graças à
            capacidade que o ser humano tem de <span>se comunicar</span>, não
            apenas relatar o que viveu, mas também poder <span>ouvir</span> com
            atenção o que o outro passou... Acredito que a comunicação seja uma
            das <span>mais importantes</span> habilidades pra qualquer ser
            humano, e que nos permite <span>colaborar</span> e solucionar
            problemas. E então, vamos conversar um pouco?!
          </Text>
        </Flex>
      </$.AdditionalInfo>

      <$.DuolingoSection tag="aside">
        <header
          onClick={() =>
            window.open(
              'https://www.duolingo.com/profile/Viniciuscolares',
              '_blank'
            )
          }
        >
          <Image
            src="/assets/duolingo/duolingo_mascot.png"
            alt="Duolingo mascot"
            quality={100}
            width={72}
            height={64}
          />
          <Flex>
            <Image
              src="/assets/duolingo/duolingo_logo.png"
              alt="Duolingo brand"
              quality={100}
              width={100}
              height={24}
            />
          </Flex>
        </header>
        <Flex justifyContent="space-around">
          <Flex flexDirection="column" alignItems="center" mt={4}>
            <$.TotalExp>
              <Text tag="span" fontSize={3} fontWeight={500} lineHeight={0.8}>
                Total Exp
              </Text>
              <Text
                tag="span"
                fontSize={3}
                fontWeight={600}
                color="#78C800 !important"
              >
                {duolingo.totalXp}
              </Text>
            </$.TotalExp>

            <Image
              className="duolingo-avatar"
              src="/assets/avatar.png"
              alt="A Vinicius Colares selfie"
              layout="fixed"
              quality={100}
              width={90}
              height={90}
            />

            <Text
              tag="span"
              fontSize={3}
              fontWeight={600}
              color="gray100"
              mb={1}
            >
              Vinícius Colares
            </Text>

            <Flex spaceChildren={3}>
              <Flex flexDirection="column" alignItems="center">
                <Crowns title="Habilidades conquistadas" height={24} />
                <Text tag="span" fontWeight={600} color="primaryDark">
                  {getTotalCrowns()}
                </Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Streak title="Dias de estudo consecutivo" height={24} />
                <Text tag="span" fontWeight={600} color="primaryDark">
                  {duolingo.streak}
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <$.LangInfo spaceChildren={3}>
            <$.LangCol flexDirection="column" spaceChildren={1}>
              <Text tag="span">Idioma</Text>
              <FlagBR title="Português(pt-br)" width={60} height={40} />
              <Flex>
                <FlagEN title="Inglês(en)" width={60} height={40} />
                <Trophy
                  className="trophy"
                  title="Troféu"
                  width={35}
                  height={35}
                />
              </Flex>
              <FlagFR title="Francês(fr)" width={60} height={40} />
              <FlagDE title="Alemão(de)" width={60} height={40} />
            </$.LangCol>
            <$.ExpCol flexDirection="column" spaceChildren={1}>
              <Text tag="span">Exp</Text>
              <Text tag="span" color="#78C800 !important">
                nativo
              </Text>
              <Text tag="span">{getExp('en') || '-'}</Text>
              <Text tag="span">{getExp('fr') || '-'}</Text>
              <Text tag="span">{getExp('de') || '-'}</Text>
            </$.ExpCol>
            <$.CrownsCol flexDirection="column" spaceChildren={1}>
              <Crowns height={24} />
              <Text tag="span">-</Text>
              <Text tag="span">{getCrowns('en') || '-'}</Text>
              <Text tag="span">{getCrowns('fr') || '-'}</Text>
              <Text tag="span">{getCrowns('de') || '-'}</Text>
            </$.CrownsCol>
          </$.LangInfo>
        </Flex>
      </$.DuolingoSection>
      <a
        href="https://invite.duolingo.com/BDHTZTB5CWWKTSJQSN5RY2L3EU"
        target="_blank"
        rel="noreferrer"
      >
        Aprenda idiomas com Duolingo você também
      </a>
    </MainPage>
  )
}

export default Perfil
