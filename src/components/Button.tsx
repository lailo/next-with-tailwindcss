import * as React from 'react'
import clsx from 'clsx'

export interface Props {
  type?: 'primary' | 'secondary'
  className?: string | Record<string, unknown>
  loading?: boolean
}

const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  type = 'primary',
  loading = false,
  ...props
}) => {
  const disabled = props.disabled || loading

  const mergedClassName = clsx(
    'px-4 py-2',
    { 'text-white': !disabled, 'text-gray-500 dark:text-gray-700': disabled },
    {
      'bg-primary hover:bg-primary-darker': !disabled && type === 'primary',
      'bg-secondary hover:bg-secondary-darker':
        !disabled && type === 'secondary',
      'bg-gray-300 dark:bg-gray-800': disabled,
    },
    {
      'cursor-not-allowed': disabled && !loading,
      'cursor-wait': loading,
    },
    className
  )

  return (
    <button className={mergedClassName} disabled={disabled} {...props}>
      {children}
      {loading && '...'}
    </button>
  )
}

export default Button
