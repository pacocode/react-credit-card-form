const CreditCard = ({ formData, side }) => {
  const { name, number, date, cvv } = formData;

  const startState = [
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ];

  const getCardType = () => {
    if (number.slice(0, 2) === "37" || number.slice(0, 2) === "34") {
      return "amex";
    }

    if (number.slice(0, 1) === "4") {
      return "visa";
    }

    if (number.slice(0, 2) === "510" || number.slice(0, 2) === "555") {
      return "mastercard";
    }

    return "mastercard";
  };

  return (
    <>
      <div className="credit-card">
        {side === "front" && (
          <div className={`${getCardType()}-front-side card`}>
            <div className="card-details-container">
              <div className="detail-container">
                <p>Expiry:</p>
                <h2>{date}</h2>
              </div>
              <div className="detail-container">
                <p>Cardholder:</p>
                <h2>{name}</h2>
              </div>
            </div>
            <div className="number-display">
              {/* <h3>{number}</h3> */}
              {startState.map((item, index) => (
                <h3 key={index}>{number[index] || item}</h3>
              ))}
            </div>
          </div>
        )}
        {side === "back" && (
          <div className={`${getCardType()}-back-side card`}>
            <div id="cvv-display">
              <p>{cvv}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreditCard;
