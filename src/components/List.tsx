import * as React from 'react'
import clsx from 'clsx'

export interface Props {
  className?: string | Record<string, unknown>
  ordered?: boolean
  item?: boolean
}

const List: React.FC<Props> = ({
  className,
  item,
  children,
  ordered = false,
}) => {
  const sharedStyles = 'text-base text-gray-700 dark:text-gray-300'

  if (item) {
    return <li className={clsx('', sharedStyles, className)}>{children}</li>
  }

  const Component = ordered ? 'ol' : 'ul'
  return (
    <Component
      className={clsx(
        'list-inside leading-loose',
        { 'list-decimal': ordered, 'list-disc': !ordered },
        sharedStyles,
        className
      )}
    >
      {children}
    </Component>
  )
}

export default List
