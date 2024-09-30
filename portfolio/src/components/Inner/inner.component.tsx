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

  return (
    <div className="inner">
      <motion.div {...anim(slide)} className="slide"></motion.div>
      <motion.div {...anim(opacity)} className="page">
        <Navigation />
        {children}
      </motion.div>
    </div>
  );
};
