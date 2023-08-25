import * as api from "../Api/index";
import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_CCA2,
} from "../actionTypes/actionTypes";

export const getCountries = () => async (dispatch) => {
  const { data } = await api.fetchCountries();

  dispatch({
    type: GET_COUNTRIES,
    payload: data,
  });
};

export const getCountriesByCca2 = (id) => async (dispatch) => {
  const { data } = await api.fetchCountryDetails(id);

  dispatch({ type: GET_COUNTRIES_BY_CCA2, payload: data });
};
