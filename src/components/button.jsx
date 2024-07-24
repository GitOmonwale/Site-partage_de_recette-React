import React from 'react'

const Button = ({ buttonName }) => {
  return (
        <button type="button" className='py-1 px-4 border-[1px] rounded-sm font-bold border-black '>{ buttonName }</button>
  )
}
export default Button
