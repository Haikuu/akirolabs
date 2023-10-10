import * as React from 'react';

import TextField from '@mui/material/TextField';
import { VALIDATION_STATES, VALIDATION_MESSAGES } from '../../constants/validation';

export default function TokenDisplay(props) {
  
  const {token, setToken, validation, setValidation} = props;

  const helperText = () => {
    switch (validation) {
      case VALIDATION_STATES.DEFAULT: return VALIDATION_MESSAGES.DEFAULT;
      case VALIDATION_STATES.VALID: return VALIDATION_MESSAGES.VALID;
      case VALIDATION_STATES.INVALID: return VALIDATION_MESSAGES.INVALID;
      default: return VALIDATION_MESSAGES.DEFAULT;
    }
  }

  const handleChange = (value)=> {
    setValidation(VALIDATION_STATES.DEFAULT);
    setToken(value);
  }

  return (
      <TextField 
        fullWidth
        disabled={token === ''}
        error={validation === VALIDATION_STATES.INVALID} 
        label="Token" 
        id="fullWidth" 
        value={token}
        onChange={e => handleChange(e.target.value)}
        helperText={helperText()}
        InputProps={{
          readOnly: true,
        }}
      />
  );
}