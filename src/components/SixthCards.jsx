import "./SixthCards.css";
const SixthCards = ({ sixthCardsHeading, sixthCardsPara }) => {
  return (
    <div className="sixthCards">
      {/* <h2 classNameName=""></h2>
      <p classNameName="sixthCardsPara"></p>*/}

      <div className="row">
        <div className="col">
          <div className="card w-75 px-4 py-5">
            <div className="card-body">
              <h2 className="card-title sixthCardsHeading fw-semibold">{ sixthCardsHeading }</h2>
              <p className="card-text sixthCardsPara fs-5">
                {sixthCardsPara}
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/*      <div className="card" style="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title sixthCardsHeading">{sixthCardsHeading}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>*/}
    </div>
  );
};

export default SixthCards;
