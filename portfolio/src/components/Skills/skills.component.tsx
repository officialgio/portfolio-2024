import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pinSection } from "../../utils/utils";
import "../Skills/skills.styles.scss";

const Skills = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  // wait for all elements to be mounted before doing any animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      pinSection(pinContainerRef, "0%", "100%");
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinContainerRef} id="skills" className="section skills">
      <div className="section__title">
        <h1>Worked with</h1>
      </div>
      {/* Container */}
      <div className="section__container">
        <div className="topics">
          <div className="topics__list flex">
            {/* list of topics */}
            <div className="topic flex">
              <figure className="topic__img--wrapper flex html">
                <span className="topic__img fs-600">Fullstack Development</span>
              </figure>
            </div>
            <div className="topic flex">
              <figure className="topic__img--wrapper flex html">
                <span className="topic__img fs-600">Distributed Systems</span>
              </figure>
            </div>
            <div className="topic flex">
              <figure className="topic__img--wrapper flex html">
                <span className="topic__img fs-600">Cloud Engineering</span>
              </figure>
            </div>
            <div className="topic flex">
              <figure className="topic__img--wrapper flex html">
                <span className="topic__img fs-600">Design (UI/UX)</span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
