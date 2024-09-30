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
        duration: 0.5,
      },
    },

    exit: {
      opacity: 1,
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
      top: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const perspective = {
    initial: {
      y: "0", // exit
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: "0", // exit
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

  return (
    <div className="inner">
      <motion.div {...anim(slide)} className="slide"></motion.div>
      <motion.div {...anim(perspective)} className="page">
        <motion.div {...anim(opacity)}>
          <Navigation />
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};