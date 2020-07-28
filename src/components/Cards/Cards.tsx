import React, { Fragment } from "react";
import "./Cards.css";

export const MainPageCards: React.FC = () => {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(
      <div className="card-row" key={i}>
        <div className="main-card">
          <div className="main-card__lenta"></div>
          <div className="main-card__line"></div>
          <div className="main-card__title">Мои счета</div>
        </div>
        <div className="main-card">
          <div className="main-card__lenta"></div>
          <div className="main-card__line"></div>
          <div className="main-card__title">Шаблоны</div>
        </div>
      </div>
    );
  }
  return <Fragment>{cards}</Fragment>;
};
