import React from 'react'
import '../css/Form.css'


export const Form = ({ show, close }) => {
    return (
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modal-header">
                <p className="modal-title">SET AVAILABILITY</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <select className="filter-column-selector" >
                        <option className="doctor-option">DOCTOR</option>
                        <option className="assistant-option">ASSISTANT</option>
                        <option className="hygienist-option">HYGIENIST</option>
                    </select>
                    <select className="select-start-time" >
                        <option>9AM</option>
                        <option>10AM</option>
                        <option>11AM</option>
                        <option>12AM</option>
                        <option>1PM</option>
                        <option>2PM</option>
                        <option>3PM</option>
                        <option>4PM</option>
                        <option>5PM</option>
                    </select>
                    <select className="select-end-time" placeholder="HI">
                        <option>9AM</option>
                        <option>10AM</option>
                        <option>11AM</option>
                        <option>12AM</option>
                        <option>1PM</option>
                        <option>2PM</option>
                        <option>3PM</option>
                        <option>4PM</option>
                        <option>5PM</option>
                    </select>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">SAVE</button>
                </div>
            </div>
        </div>
    )
}

export default Form;