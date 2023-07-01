import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ConfirmPasswordInput = ({ value, onChange, disabled }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="confirmPassword">Confirme sua senha:</label>
      <div className="password-input">
        <input
          type={showPassword ? 'text' : 'password'}
          id="confirmPassword"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          disabled={disabled}
        >
          {showPassword ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ConfirmPasswordInput;
