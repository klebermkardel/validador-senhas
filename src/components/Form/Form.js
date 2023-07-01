import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import SubmitButton from './SubmitonButton';


const Form = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <form>
        <PasswordInput />
        <ConfirmPasswordInput />
        <SubmitButton />
    </form>
  )
};

export default Form;