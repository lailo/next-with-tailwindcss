import * as React from 'react'
import clsx from 'clsx'
import { IconType } from 'react-icons/lib/cjs'

export interface Props {
  className?: string | Record<string, unknown>
  startIcon?: IconType
  hasError?: boolean
  label?: string
}

const Input: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({
  className,
  startIcon: StartIcon,
  hasError = false,
  label,
  ...props
}) => {
  return (
    <>
      {label && (
        <label
          className={clsx(
            'block mb-1 pl-2',
            'text-xs text-gray-600 uppercase',
            'font-light'
          )}
        >
          {label}
        </label>
      )}
      <div
        className={clsx(
          'flex items-center',
          'rounded-sm',
          'border',
          props.disabled && 'border-dashed bg-gray-300 dark:bg-gray-800',
          !hasError && [
            'border-gray-400 focus-within:border-gray-600',
            'dark:border-gray-700 dark-focus-within:border-gray-600',
          ],
          hasError && 'border-red-600',
          !hasError && 'text-black dark:text-white',
          hasError && 'text-red-600',
          className
        )}
      >
        {StartIcon && (
          <StartIcon className={clsx('ml-2', hasError && 'text-red-600')} />
        )}
        <input
          {...props}
          className={clsx(
            'bg-transparent w-full py-1 px-2',
            props.disabled && 'cursor-not-allowed'
          )}
        />
      </div>
    </>
  )
}

export default Input
