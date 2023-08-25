import React from "react";
import { Card, Typography } from "@material-ui/core/";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Country = ({ country }) => {
  const classes = useStyles();

  return (
    <Link to={`/country/${country.cca2}`}>
      <Card className={classes.card} raised elevation={6}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {country.name.common}
        </Typography>
      </Card>
    </Link>
  );
};

export default Country;
