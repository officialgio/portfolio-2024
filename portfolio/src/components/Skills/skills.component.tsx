import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  // wait for all elements to be mounted before doing any animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (pinContainerRef) {
        pinSkills();
      }
    });
    return () => ctx.revert();
  }, []);

  function pinSkills(): void {
    const pinSkills = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainerRef.current,
        start: "top top",
        end: "100%",
        pin: true,
        pinSpacing: false,
      },
    });
  }

  return (
    <div ref={pinContainerRef} id="skills" className="section skills">
      <div className="section__title">
        <h1>Worked with</h1>
      </div>
      {/* Container */}
      <div className="section__container">
        <div>
          Fullstack Development, Distributed Systems, Cloud Engineering, Design
          (UI/UX)
        </div>
      </div>
    </div>
  );
};

export default Skills;
