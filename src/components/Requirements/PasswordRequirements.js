import React from 'react';

import './PasswordRequirements.css'

const PasswordRequirements = ({ password, confirmPassword }) => {
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password);
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  return (
    <div>
      <ul>
        <li className={hasMinLength ? 'valid' : 'invalid'}>
          Pelo menos 8 caracteres
        </li>
        <li className={hasUppercase ? 'valid' : 'invalid'}>
          Pelo menos uma letra maiúscula
        </li>
        <li className={hasLowercase ? 'valid' : 'invalid'}>
          Pelo menos uma letra minúscula
        </li>
        <li className={hasSpecialChars ? 'valid' : 'invalid'}>
          Pelo menos um caractere especial
        </li>
        <li className={passwordsMatch ? 'valid' : 'invalid'}>
          Senha e Confirmar Senha iguais
        </li>
      </ul>
    </div>
  );
};

export default PasswordRequirements;
