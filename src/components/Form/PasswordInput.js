import React from 'react';

const PasswordInput = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="password">Digite sua senha: </label>
            <input 
                type="password"
                id="password"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default PasswordInput;