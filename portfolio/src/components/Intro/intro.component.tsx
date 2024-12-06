import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initTricksWords, pinSection } from "../../utils/utils";
import $ from "jquery";
import "../Intro/intro.styles.scss";

const Intro = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      pinSection(pinContainerRef, "30%");
      initTricksWords();
      initScrolltriggerAnimations();
    });
    return () => ctx.revert();
  }, []);

  function initScrolltriggerAnimations() {
    const spanLine = document.querySelector(".span-lines.animate"); // <h4 class="span-lines animate fs-500">
    const homeIntro = document.querySelector(".home-intro"); // <h4 class="span-lines animate fs-500">
    const workGrid = document.querySelector(".work-grid");

    // For Home Intros Section
    if (spanLine && homeIntro) {
      $(".home-intro .span-lines.animate").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(
          ".home-intro .span-lines.animate .span-line-inner"
        );

        let tl;

        if (($(window).width() as number) > 540) {
          // Desktop Animation
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              toggleActions: "play none none reverse",
              start: "-20% 20% ",
              end: "10% 0%",
              // markers: true,
            },
          });
        } else {
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              toggleActions: "play none none reverse",
              start: "-69% 10% ",
              end: "10% 0%",
              // markers: true,
            },
          });
        }

        if (targetElement) {
          tl.from(targetElement, {
            y: "100%", // set visible
            stagger: 0.01,
            ease: "power3.out",
            duration: 1,
            delay: 0,
          });
        }
      });
    }

    // For Work Grid Animation
    if (spanLine && workGrid) {
      $(".work-grid .span-lines.animate").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(
          ".work-grid .span-lines.animate .span-line-inner"
        );

        let tl;

        if (($(window).width() as number) > 540) {
          // Desktop Animation
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              toggleActions: "play none none reverse",
              start: "+=-150% 20% ",
              // end: "10% 0%",
              // markers: true,
            },
          });
        } else {
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              toggleActions: "play none none reverse",
              start: "-69% 10% ",
              end: "10% 0%",
              // markers: true,
            },
          });
        }

        if (targetElement) {
          tl.from(targetElement, {
            y: "100%", // set visible
            stagger: 0.01,
            ease: "power3.out",
            duration: 1,
            delay: 0,
          });
        }
      });
    }
  }

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
