import React, { useState } from 'react'
import { Form } from './Components/Form'


function App() {

  const [show, setShow] = useState(false)

  const closeModalHandler = () => setShow(false)

  return (
    <div >
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
      <button onClick={() => setShow(true)} className="btn-openModal">ADD AVAILABILITY</button>
      <Form show={show} close={closeModalHandler} />
    </div>
  );
}

export default App;
