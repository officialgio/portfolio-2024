import { Fragment } from "react/jsx-runtime";
import { Inner } from "../../components/Inner/inner.component";
import "../home/home.styles.scss";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "../../components/Intro/intro.component";
import Skills from "../../components/Skills/skills.component";
import Background from "../../components/Background/background.component";
import Recent from "../../components/Recent/recent.component";
import BlockImage from "../../components/BlockImage/block-image.component";

const Home = () => {
  return (
    <Inner>
      <Intro />
      <Background />
      <Skills />
      <Recent />
      <BlockImage
        title="Software Engineering"
        imageUrl="https://a.storyblok.com/f/115416/1920x1080/963897dde6/fsc-1.jpg"
      />
    </Inner>
  );
};

export default Home;
