import React, { Fragment } from "react";
import "./Advertising.css";

export const Advertising: React.FC = () => {
  return (
    <Fragment>
      <div className="cards">
        <div className="adv">
          <div className="title">Курс обмена валют</div>
        </div>
        <div className="cars-title"></div>
      </div>
      <div className="cards">
        <div className="cards deposit"></div>
        <div className="cards-title">
          <p className="text">Кредит Auto</p>
        </div>
      </div>
      <div className="cards">
        <div className="cards img"></div>
        <div className="cards-title">
          <p className="text">Депозиты</p>
        </div>
      </div>
    </Fragment>
  );
};
