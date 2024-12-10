import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../components/Background/background.styles.scss";
import {
  highlightWordsSection,
  pinComponent,
  pinSection,
} from "../../utils/utils";

const Background = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  // wait for all elements to be mounted before doing any animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      pinComponent(pinContainerRef, "0%", "100%");
      highlightWordsSection(pinContainerRef);
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
          A combination of {/* sample text here, */}
        </span>

        <span className="highlight">
          <span className="light"> engineering</span> and
          <span className="light"> design</span>, and
          <span className="light"> business</span> I have vision of solving
          real-world problems, lead, and implement solutions that will benefit
          the customer needs.
        </span>
      </div>
    </div>
  );
};

export default Background;
