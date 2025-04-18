import Ball from './Ball';

const Balls = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <Ball key={i} />
      ))}
    </>
  );
};

export default Balls;