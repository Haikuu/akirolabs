import { useState } from "react";
import Actions from "../actions/Actions";
import TokenDisplay from "../token-display/TokenDisplay";
import DigitsSelector from "../digits-selector/DigitsSelector";
import { VALIDATION_STATES } from "../../constants/validation";
import Notifications from '../notifications/Notifications';

function TokenSection() {
  const [token, setToken] = useState('');
  const [validation, setValidation] = useState(VALIDATION_STATES.UNVALIDATED);
  const [digits, setDigits] = useState([]);
  const [serviceError, setServiceError] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div>
      <TokenDisplay 
        token={token} 
        setToken={setToken}
        validation={validation}
        setValidation={setValidation}
      />
      <DigitsSelector 
          digits={digits} 
          setDigits={setDigits}
      />
      <Actions 
          token={token} 
          setToken={setToken}
          setValidation={setValidation}
          digits={digits.join()}
          setServiceError={setServiceError}
          setShowNotification={setShowNotification}
      />
      <Notifications 
        serviceError={serviceError}
        open={showNotification}
        setOpen={setShowNotification}
      />
    </div>
  );
}

export default TokenSection;
