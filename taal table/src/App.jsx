import { useState } from 'react'
import './App.css'

import Navigation from './components/Constants/Navigation'
import SelectTaal from './components/SelectTaal/SelectTaal'

function App() {


  return (
    <div className='app'>
      <Navigation/>
      <SelectTaal />
    </div>
      

  )
}

export default App
