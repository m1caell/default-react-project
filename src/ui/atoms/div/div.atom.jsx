import React, { forwardRef } from 'react'

export const Div = forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props}>
      {props.children}
    </div>
  )
})
