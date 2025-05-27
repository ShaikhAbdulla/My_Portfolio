import { useEffect, useState } from "react";

export const Typewriter2 = ({ text, speed = 80 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

 return <p className="header-title"><span dangerouslySetInnerHTML={{ __html: displayedText }} /><span className="cursor">.</span></p>;

};