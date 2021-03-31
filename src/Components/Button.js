import { useState } from 'react'
import '../css/Button.css'
import Form from './Form'


function Button() {

    const [isFormOpen, setIsFormOpen] = useState(false)

    let menu

    if (isFormOpen) {
        <Form />
    }

    return (
        <div>
            <div className="addAvailability-Switch" onClick
                onClick={() => setIsFormOpen(!isFormOpen)}
            />

        </div>
    )
}

export default Button