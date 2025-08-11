import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TransitionOverlay from "./TransitionOverlay";

export default function AnimatedLink({ to, children }) {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

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

export function AnimatedBtn({ to, children }) {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

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
        className="absolute top-5 left-5 px-4 py-2 text-stone-700 border border-stone-700 hover:text-stone-950 hover:border-stone-950 transition-all duration-300"
      >
        {children}
      </button>
      {showOverlay && <TransitionOverlay clickPosition={clickPosition} />}
    </>
  );
}
