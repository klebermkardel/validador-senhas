import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './Input.css'

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="InputContainer">
      <label htmlFor="password">Digite sua senha:</label>
      <div className="password-input">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={value}
          onChange={onChange}
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

export default PasswordInput;
