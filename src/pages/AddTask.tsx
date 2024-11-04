import {
  Container,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Button,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import LocalizationService from "../utils/store";

const AddTask = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskData = [{ name, dateOfBirth, gender, city }];
    // const existingDataString = localStorage.getItem("taskData1");
    // const existingData = existingDataString && JSON.parse(existingDataString);

    // // Ensure that `existingData` is an array before adding new values
    // const updatedData = Array.isArray(existingData) ? [...existingData, ...taskData] : taskData;
    LocalizationService({ key: "taskData1", value: taskData });
    // localStorage.setItem("taskData1", JSON.stringify(updatedData));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" margin="4rem 0" textAlign="center">
        Add Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          name="dateOfBirth"
          type="date"
          fullWidth
          margin="normal"
          required
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <TextField
          select
          label="City"
          name="city"
          fullWidth
          margin="normal"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <MenuItem value="New Delhi">New Delhi</MenuItem>
          <MenuItem value="Kolkata">Kolkata</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
          <MenuItem value="Bangalore">Bangalore</MenuItem>
        </TextField>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 3, textTransform: "none" }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddTask;
