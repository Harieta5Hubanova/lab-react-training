const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const lastDigits = number.slice(-4);
  const cardStyle = { backgroundColor: bgColor, color: color };
  return (
    <div>
      <div className="credit-card" style={cardStyle}>
        <span className="card-type">{type}</span>
        <p className="number"> .... .... .... {lastDigits}</p>
        <div className="cardDetails">
          <span>
            Expires {expirationMonth}/{expirationYear}
          </span>
          <span className="bank">{bank}</span>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
