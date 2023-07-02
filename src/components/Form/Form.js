import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import PasswordRequirements from '../Requirements/PasswordRequirements';

const Form = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <form className='Form'>
      <PasswordInput
        value={password}
        onChange={handlePasswordChange}
      />
      <ConfirmPasswordInput
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        disabled={!password}
      />
      <PasswordRequirements
        password={password}
        confirmPassword={confirmPassword}
      />
    </form>
  );
};

export default Form;
