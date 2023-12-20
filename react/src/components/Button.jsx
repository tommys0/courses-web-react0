import React from 'react';
import '../index.css'

function Button({ label, handleClick }) {
    return (
        <button onClick={handleClick} className={'button'}>{label}</button>
    );
}

export default Button;
