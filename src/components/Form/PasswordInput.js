import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="password">Digite sua senha:</label>
      <div className="password-input">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={value}
          onChange={onChange}
        />
        <button type="button" onClick={handleTogglePassword}>
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

export default PasswordInput;
