import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import PageLayout from "@templates/PageLayout";
import Button from "@components/Button";
import { Text } from "@components/Typo";

import UnderConstruction from "@public/assets/under_construction.svg";
import HomeIllustrations from "@public/assets/home_illustrations.svg";

import { Flex } from "@styles/core/grid";
import { Title, CallToAction } from "@styles/pageStyles/homeStyle";

const Home = () => {
  const router = useRouter();

  return process.env.underConstruction ? (
    <PageLayout noHeader>
      <Head>
        <title>Vinicius Colares - Portfólio em construção</title>
      </Head>

      <Flex flexDirection="column" mt="8vh">
        <Title tag="h1" textAlign="center" mt={0}>
          Vinícius <strong>Colares</strong>
        </Title>
        <Title tag="h3" textAlign="right" fontSize="1" mt={0}>
          web developer
        </Title>
      </Flex>

      <Flex flexDirection="column" alignItems="center" mt={5} px={5}>
        <Text textAlign="center">
          Desenvolvendo experiências na internet há mais de{" "}
          <strong>10 anos</strong>, focado em oferecer soluções produtivas e
          divertidas.
        </Text>
        <Text textAlign="center">
          Já gerei tráfego e <strong>conquistei clientes</strong> para centenas
          de empresas, conectei milhares de usuários à serviços, diverti e
          informei <strong>milhões de pessoas</strong>.
        </Text>
        <Text textAlign="center">
          Estou reconstruindo meu portfólio, pra{" "}
          <strong>contar a minha história</strong> com a internet e também pra
          me divertir praticando essa atividade fantástica que é
        </Text>
        <Title tag="h3" fontSize="4" my={0}>
          <strong>&lt;</strong>programar<strong>/&gt;</strong>
        </Title>
      </Flex>

      <Flex width={1} justifyContent="center" mt="8vh">
        <UnderConstruction width="100%" />
      </Flex>
    </PageLayout>
  ) : (
    <PageLayout pageTitle="início">
      <Head>
        <title>Vinicius Colares - Portfólio</title>
      </Head>
      <Title tag="h1" textAlign="center">
        Revolucione seu negócio
        <br />
        <Text tag="span">com tecnologia</Text>
      </Title>
      <Flex width={1} justifyContent="center" my="5vh">
        <HomeIllustrations width="90%" />
      </Flex>
      <CallToAction>
        <Text>Como fazer isso?</Text>
        <Button
          action={() => router.push("/contato")}
          name="Vamos conversar"
          variant={["big"]}
        />
      </CallToAction>
    </PageLayout>
  );
};

export default Home;
