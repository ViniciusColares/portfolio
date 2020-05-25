import React from "react";

import avatar from "@public/assets/avatar.png";
import arrowRight from "@public/assets/icons/arrowRight.svg";
import htmlIcon from "@public/assets/icons/html.svg";
import cssIcon from "@public/assets/icons/css.svg";
import javascriptIcon from "@public/assets/icons/javascript.svg";
import reactIcon from "@public/assets/icons/react.svg";
import reduxIcon from "@public/assets/icons/redux.svg";
import postgresqlIcon from "@public/assets/icons/postgresql.svg";
import dockerIcon from "@public/assets/icons/docker.svg";
import gitIcon from "@public/assets/icons/git.svg";
import npmIcon from "@public/assets/icons/npm.svg";
import sassIcon from "@public/assets/icons/sass.svg";
import nodeIcon from "@public/assets/icons/node.svg";
import webpackIcon from "@public/assets/icons/webpack.svg";
import jestIcon from "@public/assets/icons/jest.svg";
import linuxIcon from "@public/assets/icons/linux.svg";
import windowsIcon from "@public/assets/icons/windows.svg";

import {
  Profile,
  Avatar,
  Info,
  SectionTitle,
  Intro,
  Knowledge,
  Timeline,
} from "@styles/pageStyles/profileStyle";

const Perfil = () => {
  return (
    <>
      <Profile>
        <Avatar src={avatar} />
        <Info>
          <h1>Vinícius Colares</h1>
          <h2>
            Desenvolvedor Web na <span>ioasys</span>
          </h2>
          <h3>Jan de 1992, Aracaju-SE, Brasil</h3>
        </Info>
      </Profile>
      <Intro>
        <SectionTitle>
          <img src={arrowRight} />
          Introdução
        </SectionTitle>
        <p>
          Desenvolvedor web há mais de <span>10 anos</span>, trabalhando
          remotamente para a <span>ioasys</span> construindo soluções em
          tecnologia, além de uma experiência <span>produtiva e divertida</span>{" "}
          para o público de cada projeto. Acredito na falta da certeza como
          melhor guia, me amarro em games, filosofia,{" "}
          <span>bem-estar e autoconhecimento</span> ... antes uma pergunta
          besta, a uma besta que não pergunta.
        </p>
      </Intro>
      <Knowledge>
        <SectionTitle>
          <img src={arrowRight} />
          Conhecimento
        </SectionTitle>
        <ul>
          <li>
            <img src={htmlIcon} /> html5
          </li>
          <li>
            <img src={cssIcon} /> css3
          </li>
          <li>
            <img src={javascriptIcon} /> javascript
          </li>
          <li>
            <img src={reactIcon} /> react/native
          </li>
          <li>
            <img src={reduxIcon} /> redux
          </li>
          <li>
            <img src={postgresqlIcon} /> postgresql
          </li>
          <li>
            <img src={dockerIcon} /> docker
          </li>
          <li>
            <img src={gitIcon} /> git
          </li>
          <li>
            <img src={npmIcon} /> npm/yarn
          </li>
          <li>
            <img src={sassIcon} /> sass...
          </li>
          <li>
            <img src={nodeIcon} /> ndoe.js
          </li>
          <li>
            <img src={webpackIcon} /> webpack
          </li>
          <li>
            <img src={jestIcon} /> jest
          </li>
          <li>
            <img src={linuxIcon} /> linux
          </li>
          <li>
            <img src={windowsIcon} /> windows
          </li>
        </ul>
      </Knowledge>

      <Timeline>
        <SectionTitle>
          <img src={arrowRight} />
          Trajetória
        </SectionTitle>
        <ul>
          <li>
            <h3>Início</h3>
            <h4>R2 Agência Digital - de 01/2010 até 06/2015</h4>
            <p>
              Acho que comecei como a maioria dos desenvolvedores front-end...
              Desenvolvendo sites, foram muitos sites, só aqui na R2 foram mais
              de 200, aprendi a resolver muitos problemas de interface, a pensar
              na semântica e acessibilidade para os mais variados públicos e
              necessidades.
            </p>
          </li>
          <li>
            <h3>Início</h3>
            <h4>R2 Agência Digital - de 01/2010 até 06/2015</h4>
            <p>
              Acho que comecei como a maioria dos desenvolvedores front-end...
              Desenvolvendo sites, foram muitos sites, só aqui na R2 foram mais
              de 200, aprendi a resolver muitos problemas de interface, a pensar
              na semântica e acessibilidade para os mais variados públicos e
              necessidades.
            </p>
          </li>
          <li>
            <h3>Início</h3>
            <h4>R2 Agência Digital - de 01/2010 até 06/2015</h4>
            <p>
              Acho que comecei como a maioria dos desenvolvedores front-end...
              Desenvolvendo sites, foram muitos sites, só aqui na R2 foram mais
              de 200, aprendi a resolver muitos problemas de interface, a pensar
              na semântica e acessibilidade para os mais variados públicos e
              necessidades.
            </p>
          </li>
          <li>
            <h3>Início</h3>
            <h4>R2 Agência Digital - de 01/2010 até 06/2015</h4>
            <p>
              Acho que comecei como a maioria dos desenvolvedores front-end...
              Desenvolvendo sites, foram muitos sites, só aqui na R2 foram mais
              de 200, aprendi a resolver muitos problemas de interface, a pensar
              na semântica e acessibilidade para os mais variados públicos e
              necessidades.
            </p>
          </li>
          <li>
            <h3>Início</h3>
            <h4>R2 Agência Digital - de 01/2010 até 06/2015</h4>
            <p>
              Acho que comecei como a maioria dos desenvolvedores front-end...
              Desenvolvendo sites, foram muitos sites, só aqui na R2 foram mais
              de 200, aprendi a resolver muitos problemas de interface, a pensar
              na semântica e acessibilidade para os mais variados públicos e
              necessidades.
            </p>
          </li>
        </ul>
      </Timeline>
    </>
  );
};

export default Perfil;
