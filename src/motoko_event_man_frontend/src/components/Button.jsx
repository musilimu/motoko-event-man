import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button className='bg-fuchsia-500 py-4 px-8 rounded-sm' onClick={onClick}>{children}</button>
  )
}

export default Button
