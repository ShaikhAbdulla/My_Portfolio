import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, direction}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? `visible from-${direction}` : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
