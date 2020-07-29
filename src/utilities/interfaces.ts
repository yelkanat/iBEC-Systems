export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface IUser {
  id: number;
  username?: string;
  email: string;
  name: string;
  phone: string;
  address: IUserAddress;
}

export interface UsersState {
  users: IUser[];
  error: null | string;
}
