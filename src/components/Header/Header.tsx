import React, { Fragment } from "react";
import { Dropdowns } from "../Dropdowns/Dropdowns";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <Fragment>
      <div className="nav-wrapper">
        <div className="navbar-logo"></div>
        <div className="navbar-main_block">
          <div className="navbar-text">My Account</div>
          <nav className="navbar navbar-expand-md navbar-light bg-light rounded">
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-container" id="navbarMenu">
              <ul className="navbar-nav">
                <li className="nav-item border-right">
                  <Link className="nav-link" to="/">
                    Главная
                  </Link>
                </li>
                <li className="nav-item border-right">
                  <Link className="nav-link" to="/about">
                    О нас
                  </Link>
                </li>
                <li className="nav-item border-right">
                  <Link className="nav-link" to="/#">
                    Счета
                  </Link>
                </li>
                <li className="nav-item border-right">
                  <Link className="nav-link" to="/#">
                    Платежи
                  </Link>
                </li>
                <li className="nav-item dropdown border-right">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    to="/#"
                    role="button"
                    id="dropdownMenuLink"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Переводы
                  </Link>
                  <Dropdowns />
                </li>
                <li className="nav-item border-right">
                  <Link className="nav-link" to="/#">
                    Купля/ продажа валюты
                  </Link>
                </li>
                <li className="nav-item border-right">
                  <Link className="nav-link" to="/#">
                    Заявки
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/map">
                    Наши контакты
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};
