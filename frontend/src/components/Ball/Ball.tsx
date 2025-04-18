import React, { useEffect, useRef } from 'react';
import './Ball.css';

const COLORS = ['glow-pink', 'glow-orange'];

const RandomBall = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const colorClass = useRef(COLORS[Math.floor(Math.random() * COLORS.length)]);
  const position = useRef({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
  });

  useEffect(() => {
    const move = () => {
      const ball = ballRef.current;
      const { innerWidth: w, innerHeight: h } = window;
      const pos = position.current;

      pos.x += pos.dx;
      pos.y += pos.dy;

      // Ränder checken
      if (pos.x <= 0 || pos.x >= w) pos.dx *= -1;
      if (pos.y <= 0 || pos.y >= h) pos.dy *= -1;

      if (ball) {
        ball.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }

      requestAnimationFrame(move);
    };

    move();
  }, []);

  return (
    <div
      ref={ballRef}
      className={`glow-ball ${colorClass.current}`}
    />
  );
};

export default RandomBall;
