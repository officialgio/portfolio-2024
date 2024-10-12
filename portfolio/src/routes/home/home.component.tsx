import { Fragment } from "react/jsx-runtime";
import BackgroundSection from "../../components/Background/background.component";
import { Inner } from "../../components/Inner/inner.component";
import "../home/home.styles.scss";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "../../components/Intro/intro.component";

const Home = () => {
  // wait for all elements to be mounted before doing any animations
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /**
     * Create a GSAP timeline that animates elements with the .highlight class based on scroll position.
     * Start slightly before the next page. Each .highlight needs to transition to clear light color and then reset (tlHRemove).
     * Ensure that each of these highlights go 1 by 1 (i.e stagger)
     */
    const tlH = gsap.timeline({
      scrollTrigger: {
        trigger: ".background",
        markers: true,
        scrub: true,
        start: "-48%",
        end: "48%",
      },
    });

    tlH.fromTo(
      ".highlight",
      { color: "rgba(255, 255, 255, 0.4)" },
      { color: "rgba(255, 255, 255, 1)", stagger: 1 }
    );
  });
  return (
    <Inner>
      <Intro />
      <BackgroundSection />
    </Inner>
  );
};

export default Home;
