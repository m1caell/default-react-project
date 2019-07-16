import React, { forwardRef } from 'react'

export const Video = forwardRef((props, ref) => {
  return (
    <video ref={ref} {...props}>
      {props.children}
    </video>
  )
})
