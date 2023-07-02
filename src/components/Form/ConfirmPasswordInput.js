import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './Input.css'

const ConfirmPasswordInput = ({ value, onChange, disabled }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="InputContainer">
      <label htmlFor="confirmPassword">Confirme sua senha:</label>
      <div className="password-input">
        <input
          type={showPassword ? 'text' : 'password'}
          id="confirmPassword"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <div className="eye-icon" onClick={handleTogglePassword}>
          {showPassword ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmPasswordInput;
