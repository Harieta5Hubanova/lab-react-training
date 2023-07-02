const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="container">
      <p className="random">
        Random value between {min} and {max} => {randomNumber}
      </p>
      <br />
    </div>
  );
};

export default Random;
