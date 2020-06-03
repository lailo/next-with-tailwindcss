import * as React from 'react'
import clsx from 'clsx'

export interface Props {
  className?: string | Record<string, unknown>
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  p?: boolean
  small?: boolean
  bold?: boolean
}

const Text: React.FC<Props> = ({
  className,
  children,
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  small = false,
  bold = false,
}) => {
  const sharedStyles = 'text-gray-700 dark:text-gray-300'
  const headerStyles = 'text-gray-900 dark:text-gray-100 font-black'

  if (h1) {
    return (
      <h1 className={clsx('text-5xl', headerStyles, className)}>{children}</h1>
    )
  }

  if (h2) {
    return (
      <h2 className={clsx('text-4xl', headerStyles, className)}>{children}</h2>
    )
  }

  if (h3) {
    return (
      <h3 className={clsx('text-3xl', headerStyles, className)}>{children}</h3>
    )
  }

  if (h4) {
    return (
      <h4 className={clsx('text-2xl', headerStyles, className)}>{children}</h4>
    )
  }

  if (h5) {
    return (
      <h5 className={clsx('text-xl', headerStyles, className)}>{children}</h5>
    )
  }

  if (h6) {
    return (
      <h6 className={clsx('text-lg', headerStyles, className)}>{children}</h6>
    )
  }

  if (small) {
    return (
      <small className={clsx('text-xs', sharedStyles, className)}>
        {children}
      </small>
    )
  }

  return (
    <p
      className={clsx(
        'font-light leading-relaxed',
        { 'font-semibold': bold, 'text-xs': small, 'text-base': !small },
        sharedStyles,
        className
      )}
    >
      {children}
    </p>
  )
}

export default Text
