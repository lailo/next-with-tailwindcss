import * as React from 'react'
import cn from 'classnames'
import './styles.css'

interface Props {
  type?: 'primary' | 'secondary'
  className?: string | object
  loading?: boolean
  [key: string]: any
}

const ButtonSimple: React.FunctionComponent<Props> = ({
  children,
  className,
  type = 'primary',
  loading = false,
  ...props
}) => {
  const disabled = props.disabled || loading

  const mergedClassName = cn(
    'btn',
    {
      secondary: type === 'secondary',
      loading,
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

export default ButtonSimple
