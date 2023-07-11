export type Address = {
  id: any;
  country: Country;
  state: State;
  city: City;
};

type Country = {
  id: string;
  name: string;
};

type State = {
  id: string;
  name: string;
};

type City = {
  id: string;
  name: string;
};
