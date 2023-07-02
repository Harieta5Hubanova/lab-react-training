const IdCard = (props) => {
  return (
    <div className="idPicture">
      {' '}
      <img src={props.picture} alt="picture" width="200" />
      <div className="idData">
        <hr />
        <p>First Name: {props.firstName}</p>
        <p> Last Name: {props.lastName}</p>
        <p> Gender : {props.gender}</p>
        <p> Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
        <hr />
      </div>
    </div>
  );
};

export default IdCard;
