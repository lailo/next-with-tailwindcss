import * as React from 'react'
import { Props as ButtonProps } from '../Button'

interface Props {
  Component: React.FunctionComponent
  title: string
}

const componentPopsList: Partial<ButtonProps>[] = [
  {
    type: 'primary',
    className: 'mr-4',
  },
  {
    type: 'secondary',
    className: 'mr-4',
  },
  {
    type: 'primary',
    className: 'mr-4',
    loading: true,
  },
  {
    type: 'secondary',
    disabled: true,
  },
]

const DemoContainer: React.FunctionComponent<Props> = ({
  Component,
  title,
}) => {
  return (
    <div className="bg-white my-5 p-5 shadow hover:shadow-xl">
      <h2 className="m-w-50 mb-4">{title}</h2>
      <div>
        {componentPopsList.map((props, index) => (
          <Component key={index} {...props}>
            {props.type}
          </Component>
        ))}
      </div>
    </div>
  )
}

export default DemoContainer
