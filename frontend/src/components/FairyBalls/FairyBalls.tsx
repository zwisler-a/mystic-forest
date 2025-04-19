import FairyBall from './FairyBall';

const FairyBalls = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <FairyBall key={i} />
      ))}
    </>
  );
};

export default FairyBalls;