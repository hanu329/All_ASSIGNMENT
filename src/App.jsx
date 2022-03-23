import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from "./Button.jsx"
import "./button.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{
      "border":"2px solid teal"
    }}> 
 
   <Button onClick={()=>{
                console.log("hello")
   }} className="btn1">btn</Button>

<Button onClick={()=>{
                console.log("hello")
   }} className="btn2">btn</Button>

<Button onClick={()=>{
                console.log("hello")
   }} className="btn3">btn</Button>


    </div>
  )
}

export default App
