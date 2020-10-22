import React from "react";

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

import {
  Profile,
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
  return (
    <PageLayout pageTitle="perfil">
      <Profile>
        <Avatar src={avatar} />
        <Info>
          <Heading tag="h1">Vinícius Colares</Heading>
          <Heading tag="h2">
            Desenvolvedor Web na <span>ioasys</span>
          </Heading>
          <Heading tag="h3">Jan de 1992, Aracaju-SE, Brasil</Heading>
        </Info>
      </Profile>

      <Intro>
        <SectionTitle>
          <ArrowRight />
          Introdução
        </SectionTitle>
        <Text>
          Desenvolvedor web há mais de <span>10 anos</span>, trabalhando
          remotamente para a <span>ioasys</span> construindo soluções em
          tecnologia, além de uma experiência <span>produtiva e divertida</span>{" "}
          para o público de cada projeto. Acredito na falta da certeza como
          melhor guia, me amarro em games, filosofia,{" "}
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
            <HtmlIcon /> <span>html5</span>
          </li>
          <li>
            <CssIcon /> <span>css3</span>
          </li>
          <li>
            <JavascriptIcon /> <span>javascript</span>
          </li>
          <li>
            <ReactIcon /> <span>react/native</span>
          </li>
          <li>
            <ReduxIcon /> <span>redux</span>
          </li>
          <li>
            <PostgresqlIcon /> <span>postgresql</span>
          </li>
          <li>
            <DockerIcon /> <span>docker</span>
          </li>
          <li>
            <GitIcon /> <span>git</span>
          </li>
          <li>
            <NpmIcon /> <span>npm/yarn</span>
          </li>
          <li>
            <SassIcon /> <span>sass...</span>
          </li>
          <li>
            <NodeIcon /> <span>node.js</span>
          </li>
          <li>
            <WebpackIcon /> <span>webpack</span>
          </li>
          <li>
            <JestIcon /> <span>jest</span>
          </li>
          <li>
            <LinuxIcon /> <span>linux</span>
          </li>
          <li>
            <WindowsIcon /> <span>windows</span>
          </li>
        </ul>
      </Knowledge>

      <Timeline>
        <SectionTitle>
          <ArrowRight />
          Trajetória
        </SectionTitle>
        <ul>
          <li>
            <Heading tag="h3">Início</Heading>
            <Heading tag="h4">
              R2 Agência Digital - de 01/2010 até 06/2015
            </Heading>
            <Text>
              Acho que comecei como a maioria dos desenvolvedores front-end...
              Desenvolvendo sites, foram muitos sites, só aqui na R2 foram mais
              de 200, aprendi a resolver muitos problemas de interface, a pensar
              na semântica e acessibilidade para os mais variados públicos e
              necessidades.
            </Text>
          </li>
          <li>
            <Heading tag="h3">Próximo passo</Heading>
            <Heading tag="h4">S4B - de 03/2014 até 03/2016</Heading>
            <Text>
              Na S4B eu aprendi um pouco a coordenar um pequeno time de
              desenvolvedores, a como trabalhar em equipe num mesmo projeto com
              código versionado em git e aprendi também que seu chefe nem sempre
              está interessado no seu crescimento.
            </Text>
          </li>
          <li>
            <Heading tag="h3">A era dos softwares</Heading>
            <Heading tag="h4">Connectlead - de 03/2016 até 03/2018</Heading>
            <Text>
              Aqui eu finalmente comecei a fazer parte do mundo do
              desenvolvimento de softwares, metodologias ágeis, histórias de
              usuário, treinamentos, gestão de produto... Foram muitas sprints e
              muitos componentes criados e melhorados para atender às
              necessidades dos usuários. Além da experiência de trabalhar com
              outros vários times em conjunto.
            </Text>
          </li>
          <li>
            <Heading tag="h3">Uma aventura nativa</Heading>
            <Heading tag="h4">Vivi Tech - de 01/2019 até 04/2019</Heading>
            <Text>
              Depois de um bom tempo estudando e praticanto React.js, fui
              convidado a integrar um time com o objetivo de desenvolver uma
              carteira digital, ótima experiência ... Aprendi sobre
              gerenciamento de estado, fluxo de dados, integração de serviços e
              o mais importante, aprendi que nem sempre as pessoas querem o
              melhor para o projeto, se esse melhor não vier delas.
            </Text>
          </li>
          <li>
            <Heading tag="h3">Expansão de horizontes</Heading>
            <Heading tag="h4">ioasys - de 07/2019 até hoje</Heading>
            <Text>
              Depois de quase 10 anos de experiência, finalmente me permiti
              viver o trabalho remoto, a melhor fase ... Aprendi a importância
              de estar sozinho, me auto gerenciar, definir prioridades,
              trabalhar com times distribuídos, e o mais importante ... ainda
              tem muito caminho pela frente.
            </Text>
          </li>
        </ul>
      </Timeline>

      <AdditionalInfo>
        <SectionTitle>
          <ArrowRight />
          Um pouco mais fundo
        </SectionTitle>
        <SectionSubTitle>
          <Magnifier />
          Curioso
        </SectionSubTitle>
        <Text>
          Desenvolvedor web há mais de <span>10 anos</span>, trabalhando
          remotamente para a <span>ioasys</span> construindo soluções em
          tecnologia, além de uma experiência <span>produtiva e divertida</span>{" "}
          para o público de cada projeto. Acredito na falta da certeza como
          melhor guia, me amarro em games, filosofia,{" "}
          <span>bem-estar e autoconhecimento</span> ... antes uma pergunta
          besta, a uma besta que não pergunta.
        </Text>
        <SectionSubTitle>
          <Magnifier />
          Comunicativo
        </SectionSubTitle>
        <Text>
          Desenvolvedor web há mais de <span>10 anos</span>, trabalhando
          remotamente para a <span>ioasys</span> construindo soluções em
          tecnologia, além de uma experiência <span>produtiva e divertida</span>{" "}
          para o público de cada projeto. Acredito na falta da certeza como
          melhor guia, me amarro em games, filosofia,{" "}
          <span>bem-estar e autoconhecimento</span> ... antes uma pergunta
          besta, a uma besta que não pergunta.
        </Text>
      </AdditionalInfo>
    </PageLayout>
  );
};

export default Perfil;
