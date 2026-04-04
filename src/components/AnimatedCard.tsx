import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ $visible: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity 0.55s ease, transform 0.55s ease;
`;

const AnimatedCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} $visible={visible}>
      {children}
    </Wrapper>
  );
};

export default AnimatedCard;
