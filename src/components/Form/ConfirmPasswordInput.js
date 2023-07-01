import React from 'react';

const ConfirmPasswordInput = ({value, onChange, disabled}) => {
    return (
        <div>
            <label htmlFor="confirmPassword">Confirme sua senha: </label>
            <input 
                type="password"
                id="confirmPassword"
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    )
}

export default ConfirmPasswordInput;