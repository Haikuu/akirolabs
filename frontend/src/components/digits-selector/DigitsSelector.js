import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

export function DigitsSelector({digits, setDigits}) {

  const generateDigits = () => {
    const inputDigits = new Array(10);
    for(let i=0; i<10; i++) {
      inputDigits[i] = i;
    }
    return inputDigits;
  };  
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDigits(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Digits</InputLabel>
        <Select
          multiple
          value={digits}
          onChange={handleChange}
          input={<OutlinedInput label="Select Digits" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {generateDigits().map((num) => (
            <MenuItem key={num} value={num}>
              <Checkbox checked={digits.indexOf(num) > -1} />
              <ListItemText primary={num} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default DigitsSelector;