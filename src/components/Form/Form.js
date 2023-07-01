import React from 'react';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';


const Form = () => {
  return (
    <form>
        <PasswordInput />
        <ConfirmPasswordInput />
    </form>
  )
};

export default Form;