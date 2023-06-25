import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import DashBoard from './components/DashBoard/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <PriceList/>
    <DashBoard/>
    </>
  )
}

export default App
