import React, { useState } from 'react'
import { Form } from './Components/Form'
import Times from './Components/MyTable'
import MyTable from './Components/MyTable'

function App() {

  const [EventsStorage, setEventStorage] = useState([])

  const addNewEvent = (column, startTime, endTime) => {
    setEventStorage([...EventsStorage, {
      id: (EventsStorage + 1),
      value: Math.floor(Math.random() * 10) + 1,
      column,
      startTime,
      endTime
    }])
  }

  const [show, setShow] = useState(false)
  const closeModalHandler = () => setShow(false)

  return (
    <div>
      <div>
        {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
        <button onClick={() => setShow(true)} className="btn-openModal">ADD AVAILABILITY</button>
        <Form show={show} close={closeModalHandler} events={EventsStorage} addEvent={addNewEvent} />
      </div>
      <MyTable events={EventsStorage} addEvent={addNewEvent} />
      <ul>
        {EventsStorage.map(EventsStorage => (
          <li key={EventsStorage.id}>{EventsStorage.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;