import { GET_COUNTRIES,GET_COUNTRIES_BY_CCA2 } from "../actionTypes/actionTypes";

const countries = (countries = [], action) => {
  if (action.type === GET_COUNTRIES) {
    return action.payload;
  }
  if(action.type === GET_COUNTRIES_BY_CCA2) {
    return action.payload
  }
  return countries;
};

export default countries;
