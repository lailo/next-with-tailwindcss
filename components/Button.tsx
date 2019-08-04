import * as React from 'react'
import cn from 'classnames'

interface Props {
  type?: 'primary' | 'secondary'
  className?: string | object
  disabled?: boolean
  [key: string]: any
}

const Button: React.FunctionComponent<Props> = ({
  children,
  className,
  type = 'primary',
  disabled = false,
  ...props
}) => {
  const mergedClassName = cn(
    'px-4 py-2',
    { 'text-white': !disabled, 'text-gray-500': disabled },
    {
      'bg-green-700 hover:bg-green-800': !disabled && type === 'primary',
      'bg-blue-700 hover:bg-blue-800': !disabled && type === 'secondary',
      'bg-gray-300': disabled,
    },
    {
      'cursor-not-allowed': disabled,
    },
    className
  )

  return (
    <button className={mergedClassName} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
