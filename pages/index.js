import React from "react";

import { useRouter } from "next/router";

import HomeIllustrations from "@public/assets/home_illustrations.svg";
import Button from "@components/Button";

import { Title, CallToAction } from "@styles/pageStyles/homeStyle";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Title>
        Revolucione seu negócio
        <br />
        <span>com tecnologia</span>
      </Title>
      <HomeIllustrations
        className="illustration"
        style={{
          width: "90%",
          margin: "5vh 0",
        }}
      />
      <CallToAction>
        <p>Como fazer isso?</p>
        <Button
          action={() => router.push("/contato")}
          name="Vamos conversar"
          variant={["big"]}
        />
      </CallToAction>
    </>
  );
};

export default Home;
