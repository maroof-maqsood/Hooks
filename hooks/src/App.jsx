import React, { useState, useEffect } from 'react'
// import Home from '../src/Home'

import './App.css';

function App() {

  // const [Name, setName] = useState("Maroof Maqsood")
  // const [Email, setEmail] = useState("maroofmaqsood355@gmail.com")

  // const handleClick = () => {
  //   setName("Maroof Chamdia")
  //   setEmail("Maroofchamdia1441@gmail.com")
  // }

  // Set Array , Object

  // const [arr, setArray] = useState(["Car"])
  // const [obj, setObj] = useState({
  //   name: "Hammad",
  //   email: "Hammad121@gmail.com"
  // })

  // const Array = () => {
  // setArray([...arr , "Bike" , "Truck" , "Chinchi"])

  // setObj({
  //   name: "Farukh",
  //   email: "farukh121@gmail.com",
  //   school: "Saylani Walfafe"
  // })
  //   setObj({
  //     ...obj,
  //     School: "Saylani Walfare",
  //     name: "Maroof Maqsood",
  //     email: "Maroofmaqsood@gmail.com"
  //   })
  // }

  // Use Effect 

  const [name, setName] = useState("Hello How Are You")

  useEffect(() => {
    console.log("I Will Run On Every Render")
  })

  useEffect(() => {
    console.log("I Will Run Only On First Render")
  }, [])

  useEffect(() => {
    console.log("I Will Run Everytime When Name Update")
  }, [name])

  useEffect(() => {
    return () => {
      console.log("UN_MOUNT")
    }
  })



  return (
    <div className="App">

      {/* <h1>React Hooks </h1>
      
      <h2>Hello {Name} </h2>
      <h2>Email: {Email} </h2>
      <button className="updatebutt"
        onClick={() => handleClick ()} >UPDATE</button> */}

      {/* Set Array */}

      {/* <h1>React Hooks </h1> */}

      {/* Obj */}

      {/* <h1> {obj.name} </h1>
      <h1> {obj.email} </h1>
      <h1>{obj.School}</h1> */}

      {/* Array Map */}
      {/* <ul>    
        {arr.map((v, i) => {
          return <li key={i} > {v} </li>
        })}
      </ul> */}

      {/* <button className="updatebutt"
        onClick={() => Array()} >Array</button> */}

      {/* Hooks Use Effect */}

      {/* <Home name  = "Maroof Maqsood" /> */}

      <h1>Use Effect Life Cycle</h1>
      <h1> {name} </h1>
      <button className="updatebutt" onClick={() => setName("I Am Fine ")}>Use Effect</button>

    </div>
  );
}

export default App;