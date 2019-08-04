import * as React from 'react'
import cn from 'classnames'

interface Props {
  type?: 'primary' | 'secondary'
}

const Button: React.FunctionComponent<Props> = ({
  children,
  type = 'primary',
}) => {
  const className = cn('px-4 py-2', 'text-white', {
    'bg-green-700 hover:bg-green-800': type === 'primary',
    'bg-blue-700 hover:bg-blue-800': type === 'secondary',
  })

  return <button className={className}>{children}</button>
}

export default Button
