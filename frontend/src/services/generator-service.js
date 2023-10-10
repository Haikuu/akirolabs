import axios from 'axios';
import { SERVICE_ERRORS, SERVICE_PATHS } from '../constants/services';

export async function generateToken(digits, setServiceError) {
   const token = await axios.get(
        SERVICE_PATHS.GENERATOR + '/token?digits=' + digits
    )
    .then(function (response) {
        return response.data.value;
    })
    .catch(function (error) {
        setServiceError(SERVICE_ERRORS.GENERATOR)
        return '';
    })
    
    return token;
}