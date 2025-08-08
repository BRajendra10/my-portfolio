import { motion } from "framer-motion";

const overlayVariants = {
  initial: ({ x, y }) => ({
    top: y,
    left: x,
    x: "-50%",
    y: "-50%",
    scale: 0,
    opacity: 0.3,
  }),
  animate: {
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
    scale: 20, // enough to cover entire screen
    opacity: 1,
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function TransitionOverlay({ clickPosition }) {
  return (
    <motion.div
      className="fixed bg-stone-950 z-[999] w-[10rem] h-[10rem] rounded-full"
      custom={clickPosition}
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
  );
}
