import React, { Fragment } from "react";
import "./Cards.css";

export const MainPageCards: React.FC = () => {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(
      <div className="card-row" key={i}>
        <div className="main-card">
          <div className="lenta"></div>
          <div className="line"></div>
          <div className="card_title">Мои счета</div>
        </div>
        <div className="main-card">
          <div className="lenta"></div>
          <div className="line"></div>
          <div className="card_title">Шаблоны</div>
        </div>
      </div>
    );
  }
  return <Fragment>{cards}</Fragment>;
};
