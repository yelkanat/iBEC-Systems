import React from "react";
import "./Dropdowns.css";

export const Dropdowns: React.FC = () => {
  $(".dropdown-submenu > a").on("click", function (e) {
    var submenu = $(this);
    $(".dropdown-submenu .dropdown-menu").removeClass("show");
    submenu.next(".dropdown-menu").addClass("show");
    e.stopPropagation();
  });

  $(".dropdown").on("hidden.bs.dropdown", function () {
    $(".dropdown-menu.show").removeClass("show");
  });
  return (
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li>
        <a className="dropdown-item" href="/#">
          На свой счет внутри банка
        </a>
      </li>
      <li className="dropdown-submenu">
        <a
          className="dropdown-item dropdown-toggle"
          data-toggle="dropdown"
          href="/#"
        >
          На чужой счет внутри банка
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/#">
              На свой счет внутри банка
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              На чужой счет внутри банка
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="dropdown-item" href="/#">
          В другой банк в национальной валюте
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="/#">
          Международные платежи SWIFT
        </a>
      </li>
    </ul>
  );
};
