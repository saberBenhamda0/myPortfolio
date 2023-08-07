import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

function App() {

  return (
    <>
        <AnimatePresence mode='wait'>
        {React.cloneElement(element, { key: location.pathname })}

        </AnimatePresence>


    </>
  )
}

export default App
