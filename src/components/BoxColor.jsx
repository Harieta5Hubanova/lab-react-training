const BoxColor = ({ r, g, b }) => {
  const boxStyle = {
    backgroundColor: `rgb(${r},${g},${b}`,
    width: '400px',
    height: '100px',
    border: '2 px solid black',
  };

  return <div className="boxColor" style={boxStyle}></div>;
};

export default BoxColor;
