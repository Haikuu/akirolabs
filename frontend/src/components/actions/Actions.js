import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { generateToken } from '../../services/generator-service';
import { validateToken } from '../../services/validator-service';
import { VALIDATION_STATES } from '../../constants/validation';

export function Actions(props) {
  const { token, setToken, setValidation, digits, 
    setServiceError, setShowNotification } = props;
  
  const getToken = async () => {
    setValidation(VALIDATION_STATES.UNVALIDATED);
    const token = await generateToken(digits, handleServiceError);
    setToken(token);
  }

  const validate = async () => {
    const validationResult = await validateToken(token, handleServiceError);
    if(validationResult === VALIDATION_STATES.UNVALIDATED) {
      setValidation(VALIDATION_STATES.UNVALIDATED);
    } else {
      validationResult ? setValidation(VALIDATION_STATES.VALID) : 
      setValidation(VALIDATION_STATES.INVALID);
    }
  }

  const handleServiceError = (message) => {
    setServiceError(message);
    setShowNotification(true);
  } 

  return (
    <Stack direction="row" spacing={5} style={{padding: '5px', paddingLeft:'30px'}}>
      <Button 
        disabled={digits === ''} 
        onClick={getToken} 
        variant="outlined"
      >
        Generate
      </Button>
      <Button 
        onClick={validate} 
        variant="contained"
        disabled={token === ''}
      >
        Validate
      </Button>
    </Stack>
  );
}

export default Actions;