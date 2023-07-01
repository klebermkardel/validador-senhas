import React from 'react';

const SubmitButton = ({ onClick }) => {
    return (
        <button type="submit" onClick={onClick}>
            Validar senha
        </button>
    )
}

export default SubmitButton;