import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../Detail/Detail";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesByCca2 } from "../../action/countries";

const CountryDetails = () => {
  const dispatch = useDispatch();
  const [countryDetails, setCountryDetails] = useState([]);
  const { id } = useParams();
  console.log(id);
  const countryData = useSelector((state) =>
    id ? state.countries.find((p) => p.cca2 === id) : null
  );

  useEffect(() => {
    const fetchCountryData = () => {
      dispatch(getCountriesByCca2(id));
      setCountryDetails(countryData);
      console.log(countryData);
    };
    fetchCountryData();
  }, [id]);

  return (
    <Box>
      <Detail countryDetails={countryData} />
    </Box>
  );
};
export default CountryDetails;
