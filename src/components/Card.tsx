import * as React from 'react'
import clsx from 'clsx'

export interface Props {
  className?: string | Record<string, unknown>
}

const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'rounded shadow-md',
        'p-4 sm:p-6 md:p-8',
        'bg-white dark:bg-gray-800',
        'border border-gray-200 dark:border-gray-700',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
