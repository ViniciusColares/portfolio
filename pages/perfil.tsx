import { useEffect, EffectCallback } from "react";

import PageLayout from "@templates/PageLayout";

import avatar from "@public/assets/avatar.png";
import ArrowRight from "@public/assets/icons/arrowRight.svg";
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

import { Heading, Text } from "@components/Typo";
import { Flex } from "@styles/core/grid";

import {
  Avatar,
  Info,
  SectionTitle,
  SectionSubTitle,
  Intro,
  Knowledge,
  Timeline,
  AdditionalInfo,
} from "@styles/pageStyles/profileStyle";

const Perfil = () => {
  useEffect(async (): Promise<any> => {
    await fetch(
      "https://www.duolingo.com/2017-06-30/users/49543102?fields=totalXp,streak,courses,lingots"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <PageLayout pageTitle="perfil">
      <Flex my={5}>
        <Avatar src={avatar} />
        <Info>
          <Heading tag="h1">Vinícius Colares</Heading>
          <Text mb={0} fontWeight="bold" color="accent">
            Desenvolvedor Web FullStack
          </Text>
          <Text>Jan de 1992, Aracaju-SE, Brasil</Text>
        </Info>
      </Flex>

      <Intro>
        <SectionTitle>
          <ArrowRight />
          Introdução
        </SectionTitle>
        <Text>
          Desenvolvedor web há mais de <span>10 anos</span>, construindo
          soluções em tecnologia, interfaces e uma experiência{" "}
          <span>produtiva e divertida</span> para milhões de usuários. Acredito
          na falta da certeza como melhor guia, me amarro em games, filosofia,{" "}
          <span>bem-estar e autoconhecimento</span> ... antes uma pergunta
          besta, a uma besta que não pergunta.
        </Text>
      </Intro>

      <Knowledge>
        <SectionTitle>
          <ArrowRight />
          Conhecimento
        </SectionTitle>
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
        <Text ml={3}>E aprendendo cada dia um pouco mais...</Text>
      </Knowledge>

      <Timeline>
        <SectionTitle>
          <ArrowRight />
          Trajetória
        </SectionTitle>
        <ul>
          <li>
            <Heading tag="h3">Início </Heading>
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
        <SectionTitle>
          <ArrowRight />
          Um pouco mais fundo
        </SectionTitle>
        <SectionSubTitle tag="h2" my={2}>
          <Magnifier />
          Curioso
        </SectionSubTitle>
        <Text>
          Sempre fiquei intrigado com a sensação de <span>não saber</span> como
          as coisas funcionam e/ou o porquê de{" "}
          <span>não estarem funcionando</span>, ser curioso me abriu
          possibilidades para entender como <span>tudo é feito</span> sem me
          cansar. A curiosidade me ajuda a elaborar as <span>perguntas</span>{" "}
          com as quais eu posso buscar por respostas, que me mantêm na busca
          pelas soluções.
        </Text>
        <SectionSubTitle tag="h2" mt={4} mb={2}>
          <Magnifier />
          Comunicativo
        </SectionSubTitle>
        <Text>
          Muito foi feito pela humanidade, pra não dizer tudo, graças à
          capacidade que o ser humano tem de <span>se comunicar</span>, não
          apenas relatar o que viveu, mas também poder <span>ouvir</span> com
          atenção o que o outro passou... Acredito que a comunicação seja uma
          das <span>mais importantes</span> habilidades pra qualquer ser humano,
          e que nos permite <span>colaborar</span> e solucionar problemas. E
          então, vamos conversar um pouco?!
        </Text>
      </AdditionalInfo>
    </PageLayout>
  );
};

export default Perfil;
