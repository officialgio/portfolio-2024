import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../components/Background/background.styles.scss";
import { highlightWordsSection, pinSection } from "../../utils/utils";

const Background = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  // wait for all elements to be mounted before doing any animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (pinContainerRef) {
        pinSection(pinContainerRef, "0%", "100%");

        highlightWordsSection(pinContainerRef);
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pinContainerRef}
      id="background"
      className="section background flex"
    >
      <div className="section__container fs-700">
        <span className="highlight">
          I'm currently a student at{" "}
          <a className="light" href="" target="_blank">
            SCHOOL_NAME
          </a>
          . My expected graduation date is in 2025.
        </span>
        <span className="highlight">
          As a passionate person who loves CS, I enjoy learning about Software
          Engineering.
        </span>
        <span className="highlight">
          I hope I can take part in the{" "}
          <span className="light">engineering</span> and
          <span className="light"> designing</span> spectrum — a combination of
          technical knowledge with my creative vision to design and implement
          solutions that fit customer needs.
        </span>
      </div>
    </div>
  );
};

export default Background;
