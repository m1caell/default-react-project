import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const renderPage = (Component, props, loggedUser) => {
  if (!loggedUser) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    )
  }

  return <Component {...props} />
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => renderPage(Component, props)} />
}
