import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../components/Background/background.styles.scss";

const Background = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  // wait for all elements to be mounted before doing any animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (pinContainerRef) {
        // Pins
        pinBackground();

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
      }
    });
    return () => ctx.revert();
  }, []);

  function pinBackground(): void {
    const pinBackground = gsap.timeline({
      scrollTrigger: {
        trigger: ".background",
        pin: true,
        start: "0%",
        end: "100%",
      },
    });
  }

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
