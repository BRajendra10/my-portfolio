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

export function Highlight({ children }) {
  return (
    <span className="relative inline-block">
      <motion.span
        className="absolute inset-0 z-0 bg-yellow-300 rounded-lg"
        style={{
          originX: 0,
          clipPath: 'polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)', // makes it uneven
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <span className="relative px-2 py-0 z-10 text-stone-50 font-semibold">{children}</span>
    </span>
  );
}

export function BoldText({ children }) {

  return (
    <motion.span
      initial={{ fontVariationSettings: '"wght" 400' }}
      animate={{ fontVariationSettings: '"wght" 700' }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  );
}

export function UnderlineHighlight({ children, duration = 0.6, delay = 0 }) {
  return (
    <span className="relative inline-block whitespace-nowrap"> 
      <span className="relative z-10">{children}</span>

      <motion.span
        className="absolute left-0 right-0 bottom-1 h-[5px] bg-yellow-300 rounded-sm pointer-events-none z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration, ease: "easeOut", delay }}
        style={{ transformOrigin: "0 50%" }}
      />
    </span>
  );
}