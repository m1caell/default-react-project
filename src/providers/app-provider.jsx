import React from 'react'

const AppContext = React.createContext()
const AppProvider = ({ children }) => (
  <AppContext.Provider>{children}</AppContext.Provider>
)
const AppConsumer = AppContext.Consumer

export { AppProvider, AppConsumer }
