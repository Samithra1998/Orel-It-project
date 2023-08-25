import Country from "./country/country";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  console.log("Loading posts", countries);

  return !countries.length ? (
    <CircularProgress color="secondary" />
  ) : (
    <Grid container alignItems="stretch" spacing={4}>
      {countries?.map((country, index) => (
        <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
          <Country country={country} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Countries;
