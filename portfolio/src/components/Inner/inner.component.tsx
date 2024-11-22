import { ReactNode } from "react";
import { motion } from "framer-motion";
import "../Inner/inner.styles.scss";
import Navigation from "../../routes/navigation/navigation.component";

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

  /**
   * NOTE: This is buggy - ensure you leave the page div as is. Be careful with nesting <motion.div>
   */
  return (
    <div className="inner">
      <motion.div {...anim(slide)} className="slide"></motion.div>
      <motion.div {...anim(perspective)} className="page"></motion.div>
      <motion.div {...anim(opacity)}>
        <Navigation />
        {children}
      </motion.div>
    </div>
  );
};
