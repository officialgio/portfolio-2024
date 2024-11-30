import { ReactNode, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import "../Inner/inner.styles.scss";
import Navigation from "../../routes/navigation/navigation.component";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface InnerProps {
  children: ReactNode;
}

interface Variant {
  [k: string]: object;
}

export const Inner = ({ children }: InnerProps) => {
  const anim = (variants: Variant) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  // Animations below
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5, // Fade-in duration
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5, // Fade-out duration
      },
    },
  };

  const slide = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "-1vh",
      height: "0vh",
      transition: {
        duration: 1.8,
        ease: [0.76, 0.6, 0.24, 1],
      },
    },
  };

  const perspective = {
    initial: {
      y: "0", // start at 0 due to exit animation
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: "0", // exit purpose as well
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      onceInAnimation();
    });
    return () => ctx.revert();
  }, []);

  /**
   * Triggers a one-time animation on elements with the class `.once-in`.
   *
   * This function uses GSAP to animate the `y` position of targeted elements
   * depending on the viewport width:
   * - For widths greater than 540px, the initial position is set to `50vh`.
   * - For widths 540px or smaller, the initial position is set to `10vh`.
   *
   * The animation moves the elements to `0vh` with a smooth easing effect and applies
   * a staggered delay for sequential animations.
   *
   * @returns {void} This function does not return any value.
   */
  function onceInAnimation(): void {
    var tl = gsap.timeline();

    if (window.innerWidth > 540) {
      tl.set(".main .once-in", {
        y: "50vh", // up illusion
      });
    } else {
      tl.set(".main .once-in", {
        y: "10vh",
      });
    }

    tl.to(".main .once-in", {
      duration: 1.5,
      y: "0vh",
      stagger: 0.07,
      ease: "Expo.easeOut",
      clearProps: true,
    });
  }

  /**
   * NOTE: This is buggy - ensure you leave the page div as is. Be careful with nesting <motion.div>
   */
  return (
    <div className="inner main">
      <motion.div {...anim(slide)} className="slide"></motion.div>
      <motion.div {...anim(perspective)} className="page"></motion.div>
      <motion.div {...anim(opacity)}>
        <Navigation />
        {children}
      </motion.div>
    </div>
  );
};
