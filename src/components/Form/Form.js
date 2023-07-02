import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import SubmitButton from './SubmitButton';
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

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Execute qualquer validação adicional ou lógica de envio aqui
  
    console.log('Formulário enviado!');
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
        <PasswordRequirements password={password} confirmPassword={confirmPassword} />
        <SubmitButton onClick={handleSubmit} />
    </form>
  )
};

export default Form;
