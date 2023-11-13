import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import Example from './Example.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Example />
    </NextUIProvider>
  </React.StrictMode>,
)
