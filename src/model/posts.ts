interface USERS_ADDRESS {
  street: String;
  suite: String;
  city: String;
  zipcode: String;
  geo: USERS_ADDRESS_GEO;
}

interface USERS_ADDRESS_GEO {
  lat: String;
  lng: String;
}

interface USERS_COMPANY {
  name: String;
  catchPhrase: String;
  bs: String;
}

export interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: USERS_ADDRESS;
  phone: String;
  website: String;
  company: USERS_COMPANY;
  isLoading: Boolean;
  data: any;
  success: Boolean;
}
