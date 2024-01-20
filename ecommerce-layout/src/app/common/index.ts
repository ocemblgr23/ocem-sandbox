export const usersUrl = 'https://jsonplaceholder.typicode.com/users';
export const fakeStoreProductsUrl = 'https://fakestoreapi.com/products';

export const API = 'https://jsonplaceholder.typicode.com';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}
