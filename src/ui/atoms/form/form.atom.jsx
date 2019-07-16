import React, { forwardRef } from 'react'

export const Form = forwardRef((props, ref) => {
  return (
    <form ref={ref} {...props}>
      {props.children}
    </form>
  )
})
