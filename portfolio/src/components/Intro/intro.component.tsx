import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pinSection } from "../../utils/utils";

const Intro = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      pinSection(pinContainerRef, "30%");
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinContainerRef} className="section home-intro about-image">
      <div className="container medium">
        <div className="row">
          {/* Small Intro */}
          <div className="flex-col">
            <h4 className="spna-lines animate fs-500 ">
              Hi, I'm Giovanny! I'm a Software Engineer.
            </h4>
          </div>
          {/* Intro Image */}
          <div className="flex-col">
            <div className="single-about-image once-in">
              <div className="overlay overlay-image blur-load">
                <img
                  data-scroll
                  data-scroll-speed="0.1"
                  className="overlay overlay-image"
                  src="https://freenaturestock.com/wp-content/uploads/freenaturestock-2268-768x1152.jpg"
                  alt="headshot"
                />
              </div>
              {/* <div className="overlay"></div>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
