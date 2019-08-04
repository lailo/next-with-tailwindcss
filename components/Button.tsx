import * as React from 'react'

const Button: React.FunctionComponent = ({ children }) => {
  return (
    <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 ">
      {children}
    </button>
  )
}

export default Button
