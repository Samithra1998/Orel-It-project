import { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grid,
  Grow,
  TextField,
  Button,
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import makeStyles from "./styles";
import Countries from "../countries/countries";
import { getCountries } from "../../action/countries";

const Home = () => {
  const dispatch = useDispatch();
  const classes = makeStyles();
  const [currentId, setCurrentId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch, currentId]);

  return (
    <Container maxWidth="xl">
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            className={classes.gridContainer}
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={8}>
              <Countries setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
