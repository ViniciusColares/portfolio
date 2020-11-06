import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import UnderConstruction from "@templates/UnderConstruction";
import PageLayout from "@templates/PageLayout";
import Button from "@components/Button";
import { Heading } from "@components/Typo";
import { Text } from "@components/Typo";

import HomeIllustrationsSVG from "@public/assets/home_illustrations.svg";

import { Flex } from "@styles/core/grid";
import { CallToAction } from "@styles/pageStyles/homeStyle";

const Home = () => {
  const router = useRouter();

  return process.env.underConstruction ? (
    <UnderConstruction />
  ) : (
    <PageLayout pageTitle="início">
      <Head>
        <title>Vinicius Colares - Desenvolvedor de sistemas</title>
      </Head>
      <Heading tag="h1" fontSize={3} mt="10%">
        Revolucione seu negócio
      </Heading>
      <Heading tag="h1" color="accent">
        com tecnologia
      </Heading>
      <Flex width={1} maxWidth="500px" justifyContent="center" my="5vh">
        <HomeIllustrationsSVG width="80%" />
      </Flex>
      <CallToAction>
        <Text mb={2}>Como fazer isso?</Text>
        <Button
          onClick={() => router.push("/contato")}
          name="Vamos conversar"
          size="big"
        />
      </CallToAction>
    </PageLayout>
  );
};

export default Home;
