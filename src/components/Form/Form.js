import React from 'react';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import SubmitButton from './SubmitonButton';


const Form = () => {
  return (
    <form>
        <PasswordInput />
        <ConfirmPasswordInput />
        <SubmitButton />
    </form>
  )
};

export default Form;