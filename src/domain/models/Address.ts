export type Address = {
  id: any;
  country: Country;
  state: State;
  city: City;
};

export type Country = {
  id: string;
  name: string;
};

export type State = {
  id: string;
  name: string;
};

export type City = {
  id: string;
  name: string;
};
