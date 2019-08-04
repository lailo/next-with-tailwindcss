import * as React from 'react'
import cn from 'classnames'

interface Props {
  type?: 'primary' | 'secondary'
  className?: string | object
}

const Button: React.FunctionComponent<Props> = ({
  children,
  type = 'primary',
  className,
}) => {
  const mergedClassName = cn(
    'px-4 py-2',
    'text-white',
    {
      'bg-green-700 hover:bg-green-800': type === 'primary',
      'bg-blue-700 hover:bg-blue-800': type === 'secondary',
    },
    className
  )

  return <button className={mergedClassName}>{children}</button>
}

export default Button
