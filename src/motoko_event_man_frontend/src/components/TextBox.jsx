import React from 'react'

const TextBox = ({ label,
    type,
    placeholder}) => {
    return (
        <div className="grid">
            <label htmlFor={label}>{label}</label>
            <input
                type={type || "text"}
                placeholder={placeholder}
                className="p-2 border-fuchsia-300 outline-fuchsia-300  border-solid border-2"
            />
        </div>
    )
}

export default TextBox
