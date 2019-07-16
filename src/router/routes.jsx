import React, { Fragment } from 'react'
import { PrivateRoute, PublicRoute } from 'app-router'
import { Home, Login } from 'app-pages'
import { ROUTE } from './routes.path'

export const Routes = () => {
  return (
    <Fragment>
      {/* public routes */}
      <PublicRoute exact path={ROUTE.LOGIN} component={Login} />

      {/* private routes */}
      <PrivateRoute exact path={ROUTE.HOME} component={Home} />
    </Fragment>
  )
}
