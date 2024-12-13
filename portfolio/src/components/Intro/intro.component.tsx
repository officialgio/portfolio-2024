import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";
import "../Intro/intro.styles.scss";
import { IntroConstants } from "../../utils/contants";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Intro = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // pinSection(pinContainerRef, "30%");
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinContainerRef} className="section home-intro about-image">
      <div className="container medium">
        <div className="row">
          {/* Small Intro */}
          <div className="flex-col">
            <h4 className="span-lines animate fs-500 ">
              I'm Giovanny - a Multidisciplinary Engineer with a focus on Web
              and Cloud Engineering
            </h4>
          </div>
          {/* Intro Image */}
          <div className="flex-col">
            <div className="single-about-image once-in">
              <div className="overlay overlay-image">
                <div
                  data-scroll
                  data-scroll-speed="0.1"
                  className="overlay overlay-image"
                >
                  <LazyLoadImage
                    effect="blur"
                    src={IntroConstants.imageUrl}
                    height="1000px"
                    width="800px"
                  />
                </div>
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
