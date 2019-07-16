import React from 'react'

export const Img = props => {
  return (
    <img alt={props.alt} {...props}>
      {props.children}
    </img>
  )
}
