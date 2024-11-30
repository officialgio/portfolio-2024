import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../LoadingScreen/loading-screen.styles.scss";

const LoadingScreen = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      initLoaderHome();
    });

    return () => ctx.revert();
  }, []);

  function initLoaderHome(): void {
    var tl = gsap.timeline();

    // reset (not needed it is fullscreen by default)
    tl.set(".loading-screen", {
      top: "0", // bottom (full screen)
    });

    if (window.innerWidth > 540) {
      tl.set(".main .once-in", {
        y: "50vh", // up illusion
      });
    } else {
      tl.set(".main .once-in", {
        y: "10vh",
      });
    }

    tl.set(".loading-words", {
      opacity: 1,
      y: -50,
    });

    // initially hide the nav sections (i.e Home, etc)
    tl.set(".loading-words .active", {
      display: "none",
    });

    // take the full width
    tl.set(".loading-words .home-active, .loading-words .home-active-last", {
      display: "block",
      opacity: 0,
    });

    // initially the .home-active-first is revealed 1st.
    tl.set(".loading-words .home-active-first", {
      opacity: 1,
    });

    if (window.innerWidth > 540) {
      tl.set(".loading-screen .rounded-div-wrap.bottom", {
        height: "10vh", // bottom rounded div
      });
    } else {
      tl.set(".loading-screen .rounded-div-wrap.bottom", {
        height: "5vh",
      });
    }

    // set cursor to wait
    tl.set("html", {
      cursor: "wait",
    });

    // Transition to...

    tl.to(".loading-words", {
      duration: 0.8,
      opacity: 1,
      y: -50,
      ease: "Power4.easeOut",
      delay: 0.5,
    });

    tl.to(
      ".loading-words .home-active", // Target elements
      {
        duration: 0.01, // Animation duration (0.01 seconds)
        opacity: 1, // Animate opacity to 1 (fully visible)
        stagger: 0.15, // Delay each element's animation by 0.15 seconds
        ease: "none", // No easing; the animation runs linearly
        onStart: homeActive, // Callback function triggered when the animation starts
      },
      "=-.4" // Adjust timing relative to the previous animation in the timeline
    );

    function homeActive(): void {
      // reset
      gsap.to(".loading-words .home-active", {
        duration: 0.01,
        opacity: 0,
        stagger: 0.15,
        ease: "none",
        delay: 0.15,
      });
    }

    tl.to(".loading-screen", {
      duration: 0.8, // The animation lasts for 0.8 seconds
      top: "-100%", // Moves the element up so it's no longer visible
      ease: "Power4.easeInOut", // Uses a smooth easing effect for acceleration and deceleration
      delay: 0.2, // Waits 0.2 seconds before starting the animation
    });

    tl.to(
      ".loading-screen .rounded-div-wrap.bottom",
      {
        duration: 1,
        height: "0vh", // reset
        ease: "Power4.easeInOut",
      },
      "=-.8" // .8 secs before the animation
    );

    // Remove
    // tl.to(
    //   ".loading-words",
    //   {
    //     duration: 0.3,
    //     opacity: 0,
    //     ease: "linear",
    //   },
    //   "=-.8"
    // );

    // Remove from view
    // tl.set(".loading-screen", {
    //   top: "calc(-100%)",
    // });

    // Extra set (in case of issues)
    // tl.set(".loading-screen .rounded-div-wrap.bottom", {
    //   height: "0vh",
    // });

    // Place back in view
    tl.to(
      ".main .once-in",
      {
        duration: 1.5,
        y: "0vh",
        stagger: 0.07,
        ease: "Expo.easeOut",
        clearProps: true,
      },
      "=-.8" // .8 secs before within html cursor finishes loading
    );

    tl.set(
      "html",
      {
        cursor: "auto",
      },
      "=-1.2"
    );
  }

  return (
    <div className="loading-container">
      <div className="loading-screen">
        {/* Optional Top Rounded Div */}
        <div className="rounded-div-wrap top">
          <div className="rounded-div"></div>
        </div>
        {/* Loading Words */}
        <div className="loading-words">
          <h2 className="home-active home-active-first">
            Hello<div className="dot"></div>
          </h2>
          <h2 className="home-active">
            I'm<div className="dot"></div>
          </h2>
          <h2 className="home-active">
            Giovanny<div className="dot"></div>
          </h2>
          <h2 className="active">
            Home<div className="dot"></div>
          </h2>
          <h2>
            Work<div className="dot"></div>
          </h2>
        </div>
        {/* Bottom rounded div */}
        <div className="rounded-div-wrap bottom">
          <div className="rounded-div"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
