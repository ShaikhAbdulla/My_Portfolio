import { useEffect, useState } from "react";
import '../App.css'

export const punchlines = [
  "Turning ideas into interactive apps",
  "From design to deployment — I bring ideas to users fingertips.",
  "Crafting smooth, scalable experiences",
  "Writing clean code for real-world impact",
  "Shipping features fast — and stable",
  "Just another JavaScript human... doing native things."

];  

export const Typewriter = ({ phrases=punchlines, speed = 60, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let currentText = phrases[index];
    let isDeleting = false;

    const type = () => {
      setDisplayedText(currentText.substring(0, charIndex));
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          charIndex++;
          setTimeout(type, speed);
        } else {
          isDeleting = true;
          setTimeout(() => type(), pause);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTimeout(type, speed / 2);
        } else {
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timeout = setTimeout(type, speed);
    return () => clearTimeout(timeout);
  }, [index, phrases, speed, pause]);

  return (
    <p className="header-subtitle">
      <span>{displayedText}</span>
      <span className="cursor">|</span>
    </p>
  );
};