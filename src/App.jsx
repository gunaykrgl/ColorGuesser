import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [colorNames, setColorNames] = useState([])
  async function fetchData() {
    const res = await fetch("../../css-color-names.json")
    const data = await res.json()
    setColorNames(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <Card />
  )
}

export default App
