import * as React from 'react'
import clsx from 'clsx'
import { IconType } from 'react-icons/lib/cjs'

export interface Props {
  className?: string | Record<string, unknown>
  startIcon?: IconType
  label?: string
  helpText?: string
  errorMessage?: string
}

const Input: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({
  className,
  startIcon: StartIcon,
  label,
  helpText,
  errorMessage,
  ...props
}) => {
  return (
    <div className={clsx(className)}>
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
          !errorMessage && [
            'border-gray-400 focus-within:border-gray-600',
            'dark:border-gray-700 dark-focus-within:border-gray-600',
          ],
          errorMessage && 'border-red-600',
          !errorMessage && 'text-black dark:text-white',
          errorMessage && 'text-red-600'
        )}
      >
        {StartIcon && (
          <StartIcon className={clsx('ml-2', errorMessage && 'text-red-600')} />
        )}
        <input
          {...props}
          className={clsx(
            'bg-transparent w-full py-1 px-2',
            props.disabled && 'cursor-not-allowed'
          )}
        />
      </div>
      {helpText && (
        <div className="pl-2 mt-1 text-xs text-gray-600 font-light">
          {helpText}
        </div>
      )}
      {errorMessage && (
        <div className="pl-2 mt-1 text-xs text-red-600 font-light">
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default Input
