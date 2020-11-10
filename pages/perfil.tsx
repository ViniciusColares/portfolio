import { GetStaticProps } from "next";
import Image from "next/image";

import PageLayout from "@templates/PageLayout";

import HtmlIcon from "@public/assets/icons/html.svg";
import CssIcon from "@public/assets/icons/css.svg";
import JavascriptIcon from "@public/assets/icons/javascript.svg";
import ReactIcon from "@public/assets/icons/react.svg";
import ReduxIcon from "@public/assets/icons/redux.svg";
import PostgresqlIcon from "@public/assets/icons/postgresql.svg";
import DockerIcon from "@public/assets/icons/docker.svg";
import GitIcon from "@public/assets/icons/git.svg";
import NpmIcon from "@public/assets/icons/npm.svg";
import SassIcon from "@public/assets/icons/sass.svg";
import NodeIcon from "@public/assets/icons/node.svg";
import WebpackIcon from "@public/assets/icons/webpack.svg";
import JestIcon from "@public/assets/icons/jest.svg";
import LinuxIcon from "@public/assets/icons/linux.svg";
import WindowsIcon from "@public/assets/icons/windows.svg";
import Magnifier from "@public/assets/icons/magnifier.svg";
import Talk from "@public/assets/icons/talk.svg";

import Crowns from "@public/assets/duolingo/crowns.svg";
import Streak from "@public/assets/duolingo/streak.svg";
import FlagBR from "@public/assets/duolingo/flag_pt.svg";
import FlagEN from "@public/assets/duolingo/flag_en.svg";
import FlagFR from "@public/assets/duolingo/flag_fr.svg";
import FlagDE from "@public/assets/duolingo/flag_de.svg";

import { Heading, Text } from "@components/Typo";
import { Flex } from "@styles/core/grid";

import {
  Profile,
  Info,
  SectionTitle,
  SectionSubTitle,
  Intro,
  Knowledge,
  Timeline,
  AdditionalInfo,
  DuolingoSection,
  TotalExp,
  LangInfo,
  LangCol,
  ExpCol,
  CrownsCol,
} from "@styles/pageStyles/profileStyle";

interface IPerfil {
  duolingo: {
    totalXp: number;
    streak: number;
    lingots: number;
    courses: IDuolingoCourse[];
  };
}

interface IDuolingoCourse {
  xp: number;
  crowns: number;
  learningLanguage: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const duolingo = await fetch(
    "https://www.duolingo.com/2017-06-30/users/49543102?fields=totalXp,streak,courses"
  ).then((response) => response.json());

  return {
    props: {
      duolingo,
    },
    revalidate: 30,
  };
};

const Perfil = ({ duolingo }: IPerfil) => {
  const langExp = (lang): number => {
    return duolingo.courses.find((course) => course.learningLanguage === lang)
      .xp;
  };

  const langCrowns = (lang) => {
    return duolingo.courses.find((course) => course.learningLanguage === lang)
      .crowns;
  };

  return (
    <PageLayout pageTitle="perfil">
      <Profile my={5}>
        <Image
          className="avatar"
          src="/assets/avatar.png"
          alt="A Vinicius Colares selfie"
          layout="fixed"
          quality={100}
          width={80}
          height={80}
        />
        <Info>
          <Heading tag="h1">Vinícius Colares</Heading>
          <Text mb={0} color="accent">
            Desenvolvedor Web FullStack
          </Text>
          <Text>Jan de 1992, Aracaju-SE, Brasil</Text>
        </Info>
      </Profile>

      <Intro>
        <SectionTitle>Introdução</SectionTitle>
        <Text mb={0}>
          Desenvolvedor web há mais de <span>10 anos</span>, construindo
          soluções em tecnologia, interfaces e uma experiência{" "}
          <span>produtiva e divertida</span> para milhões de usuários. Acredito
          na falta da certeza como melhor guia, me amarro em games, filosofia,{" "}
          <span>bem-estar e autoconhecimento</span> ... antes uma pergunta
          besta, a uma besta que não pergunta.
        </Text>
      </Intro>

      <Knowledge>
        <SectionTitle>Conhecimento</SectionTitle>
        <ul>
          <li>
            <HtmlIcon /> <span>HTML5</span>
          </li>
          <li>
            <CssIcon /> <span>CSS3</span>
          </li>
          <li>
            <JavascriptIcon /> <span>JavaScript</span>
          </li>
          <li>
            <ReactIcon /> <span>React/Native</span>
          </li>
          <li>
            <ReduxIcon /> <span>Redux</span>
          </li>
          <li>
            <PostgresqlIcon /> <span>Postgresql</span>
          </li>
          <li>
            <DockerIcon /> <span>Docker</span>
          </li>
          <li>
            <GitIcon /> <span>Git</span>
          </li>
          <li>
            <NpmIcon /> <span>Npm/Yarn</span>
          </li>
          <li>
            <SassIcon /> <span>SASS</span>
          </li>
          <li>
            <NodeIcon /> <span>Node.js</span>
          </li>
          <li>
            <WebpackIcon /> <span>Webpack</span>
          </li>
          <li>
            <JestIcon /> <span>Jest</span>
          </li>
          <li>
            <LinuxIcon /> <span>Linux</span>
          </li>
          <li>
            <WindowsIcon /> <span>Windows</span>
          </li>
        </ul>
        <Text>E aprendendo cada dia um pouco mais...</Text>
      </Knowledge>

      <Timeline>
        <SectionTitle>Trajetória</SectionTitle>
        <ul>
          <li>
            <Heading tag="h3">Como tudo começou </Heading>
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
              o mais importante, aprendi que nem sempre as pessoas querem o{" "}
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
      </Timeline>

      <AdditionalInfo>
        <SectionTitle>Um pouco mais fundo</SectionTitle>
        <Flex flexDirection="column" mt={2}>
          <SectionSubTitle tag="h2" mb={2}>
            <Magnifier />
            Curioso
          </SectionSubTitle>
          <Text mb={0}>
            Sempre fiquei intrigado com a sensação de <span>não saber</span>{" "}
            como as coisas funcionam e/ou o porquê de{" "}
            <span>não estarem funcionando</span>, ser curioso me abriu
            possibilidades para entender como <span>tudo é feito</span> sem me
            cansar. A curiosidade me ajuda a elaborar as <span>perguntas</span>{" "}
            com as quais eu posso buscar por respostas, que me mantêm na busca
            pelas soluções.
          </Text>
        </Flex>
        <Flex flexDirection="column" mt={2}>
          <SectionSubTitle tag="h2" mb={2}>
            <Talk />
            Comunicativo
          </SectionSubTitle>
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
      </AdditionalInfo>

      <DuolingoSection>
        <header
          onClick={() =>
            window.open(
              "https://www.duolingo.com/profile/ViniciusColares",
              "_blank"
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
            <TotalExp>
              <Text
                tag="span"
                fontSize={2}
                fontWeight={500}
                lineHeight={0.8}
                color="black"
              >
                Total Exp
              </Text>
              <Text
                tag="span"
                fontSize={2}
                fontWeight={600}
                color="primaryDark"
              >
                {duolingo.totalXp}
              </Text>
            </TotalExp>

            <Image
              className="duolingo-avatar"
              src="/assets/avatar.png"
              alt="A Vinicius Colares selfie"
              layout="fixed"
              quality={100}
              width={90}
              height={90}
            />

            <Text tag="span" fontSize={2} fontWeight={600} color="black" mb={1}>
              Vinícius Colares
            </Text>

            <Flex spaceChildren={3}>
              <Flex flexDirection="column" alignItems="center">
                <Crowns height={24} />
                <Text tag="span" fontWeight={600} color="primaryDark">
                  {duolingo.courses.reduce((ac, cv) => ac + cv.crowns, 0)}
                </Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Streak height={24} />
                <Text tag="span" fontWeight={600} color="primaryDark">
                  {duolingo.streak}
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <LangInfo spaceChildren={3}>
            <LangCol flexDirection="column" spaceChildren={1}>
              <Text tag="span">Idioma</Text>
              <FlagBR width={60} height={40} />
              <FlagEN width={60} height={40} />
              <FlagFR width={60} height={40} />
              <FlagDE width={60} height={40} />
            </LangCol>
            <ExpCol flexDirection="column" spaceChildren={1}>
              <Text tag="span">Exp</Text>
              <Text tag="span" color="#78C800 !important">
                nativo
              </Text>
              <Text tag="span">{langExp("en")}</Text>
              <Text tag="span">{langExp("fr")}</Text>
              <Text tag="span">{langExp("de")}</Text>
            </ExpCol>
            <CrownsCol flexDirection="column" spaceChildren={1}>
              <Crowns height={24} />
              <Text tag="span">-</Text>
              <Text tag="span">{langCrowns("en")}</Text>
              <Text tag="span">{langCrowns("fr")}</Text>
              <Text tag="span">{langCrowns("de")}</Text>
            </CrownsCol>
          </LangInfo>
        </Flex>
      </DuolingoSection>
    </PageLayout>
  );
};

export default Perfil;
