import { Fragment } from "react/jsx-runtime";
import { Inner } from "../../components/Inner/inner.component";
import "../home/home.styles.scss";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "../../components/Intro/intro.component";
import Skills from "../../components/Skills/skills.component";
import Background from "../../components/Background/background.component";
import Recent from "../../components/Recent/recent.component";
import BlockImage from "../../components/BlockImage/block-image.component";
import BlockDescription from "../../components/BlockDescription/block-description.component";

const Home = () => {
  return (
    <Inner>
      <Intro />
      <Background />
      <Skills />
      <Recent />
      <BlockImage />
      <BlockDescription />
    </Inner>
  );
};

export default Home;
