import FairyBall from './FairyBall';
import { useEffect, useState } from 'react';

const FairyBalls = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`fairy-balls${visible ? ' fade-in' : ''}`}>
      {Array.from({ length: 10 }).map((_, i) => (
        <FairyBall key={i} />
      ))}
    </div>
  );
};

export default FairyBalls;