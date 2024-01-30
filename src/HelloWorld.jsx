import { useState } from "react"

function HelloWorld() {
  const [message, setMessage] = useState(""); 

  const agregarMensaje = () =>{
    setMessage(message + "(from changed state)!");
  }

  return (
    <>
      <h1 className="display-3 ms-3">Hello world {message}</h1>
      <button className="btn btn-primary ms-3" onClick={agregarMensaje}>Click me</button>
    </>
  )
}

export default HelloWorld
