import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

let [count ,setCount] = useState(10)
// setcount - ek function hai jo responsible h count k update hone mai harajagah se , isilie usestate use karte hai as 
//UI mai har jagah update karne k lie id call nahi krni hogi
 

  const addValue = () =>{
   if(count <20){
    setCount(count +1)
   }
   
    console.log("clicked"  , count)

  }

  const subValue = () =>{
    if(count>0){
      setCount(count -1)
    }
    
  }


  return (
    <>
      <h1> project 1</h1>
      <h2> counter value is {count} </h2>
      <button onClick={addValue}> add </button>
      <button onClick = {subValue}> minus</button>
    </>
  )
}

export default App
