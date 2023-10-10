import axios from 'axios';
import { SERVICE_ERRORS, SERVICE_PATHS } from '../constants/services';
import { VALIDATION_STATES } from '../constants/validation';

export async function validateToken(token, setServiceError) { 
   const validationResult = await axios.post(
        SERVICE_PATHS.VALIDATOR + '/token', {value: token}
    )
    .then(function (response) {
        return response.data.valid;
    })
    .catch(function (error) {
        setServiceError(SERVICE_ERRORS.VALIDATOR);
        return VALIDATION_STATES.UNVALIDATED;
    })
    return validationResult;
}