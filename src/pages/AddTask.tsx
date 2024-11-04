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
import { FormEvent } from "react";

const handleSubmit = (e:FormEvent<HTMLFormElement>):void =>{
  e.preventDefault();
  
}

const AddTask = () => {
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
        />

        <TextField
          name="dateOfBirth"
          type="date"
          fullWidth
          margin="normal"
          required
        />

        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row name="gender">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
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
        >
          <MenuItem value="New Delhi">New Delhi</MenuItem>
          <MenuItem value="Kolkata">Kolkata</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
          <MenuItem value="Banglore">Banglore</MenuItem>
        </TextField>

        <Button
          type="submit" 
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 3, 
            textTransform: "none" }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddTask;
