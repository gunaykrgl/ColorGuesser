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

  // Fetch the data, when first loaded
  useEffect(()=>{
    fetchData()
  },[])
  
  function getRandomColor(obj){
    let keys = Object.keys(obj)
    return keys[keys.length * Math.random() << 0]
  }
  
  const randomColor = getRandomColor(colorNames)
  return (
    <Card color={randomColor}/>
  )
}

export default App
