import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Detail({ countryDetails }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-read-only-input"
          label="Capital"
          defaultValue={countryDetails.capital}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Borders"
          defaultValue={countryDetails.borders}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Area"
          defaultValue={countryDetails.area}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Region"
          defaultValue={countryDetails.region}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Start Of Week"
          defaultValue={countryDetails.startOfWeek}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Status"
          defaultValue={countryDetails.status}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Subregion"
          defaultValue={countryDetails.subregion}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Population"
          defaultValue={countryDetails.population}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
  );
}
