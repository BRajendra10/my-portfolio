import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TransitionOverlay from "./TransitionOverlay";

function AnimatedLink({ to, children }) {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    console.log(x, y);

    setClickPosition({ x, y });
    setShowOverlay(true);

    setTimeout(() => {
      navigate(to);
    }, 600);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex justify-center items-center border text-2xl text-stone-700 border-stone-700 hover:text-stone-950 w-full h-full relative overflow-hidden"
      >
        {children}
      </button>
      {showOverlay && <TransitionOverlay clickPosition={clickPosition} />}
    </>
  );
}

export default AnimatedLink;
