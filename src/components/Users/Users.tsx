import React from "react";
import { IUser } from "../../utilities/interfaces";

const Users = ({ email, id, name, phone, address }: IUser) => {
  return (
    <div className="card" key={id}>
      <div className="card-header">Сотрудник #{id}</div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Телефонный номер: {phone}</p>
        <p className="card-text">Email: {email}</p>
        <p className="card-text">
          Адрес:
          {
            <div>
              город: {address.city}, улица: {address.street}, квартира:
              {address.zipcode}
              {address.suite}
            </div>
          }
        </p>
      </div>
    </div>
  );
};
export default Users;
