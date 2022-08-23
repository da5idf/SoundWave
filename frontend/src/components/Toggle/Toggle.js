import React from 'react';

import './Toggle.css'

export default function Toggle({ inputId, checkedColor, val, setter }) {

    return (
        <div className="toggle-container">
            <input
                id={inputId}
                className={`toggle-switch ${checkedColor}-toggle`}
                type="checkbox"
                checked={val}
                onChange={() => setter(!val)}
            />
            <label htmlFor={inputId}></label>
        </div>
    )
}
