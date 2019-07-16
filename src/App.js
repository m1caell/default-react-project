import React from 'react'
import AppRoutes from 'app-router'
import './ui/styles/main.scss'
import { AppProvider } from 'app-providers'

function App() {

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
