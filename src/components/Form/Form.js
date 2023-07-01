import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import SubmitButton from './SubmitonButton';


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
    <form>
        <PasswordInput 
            value={password} 
            onChange={handlePasswordChange} 
        />
        <ConfirmPasswordInput
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            disabled={!password}
        />
        <SubmitButton />
    </form>
  )
};

export default Form;