import React from 'react'
import withStyles from 'react-jss'
import './icons.style.scss'

export const withIconContainer = Icon =>
  withStyles(styles)(({ classes, ...props }) => (
    <div className={classes.icons} children={Icon} {...props} />
  ))
