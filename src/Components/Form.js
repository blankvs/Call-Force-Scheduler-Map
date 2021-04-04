import React, { useState, Component } from 'react'
import '../css/Form.css'


export const Form = ({ show, close, events, addEvent }) => {

    console.log(events)

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
                    <select key={events.column} className="filter-column-selector" >
                        <option value="column-one" className="doctor-option">DOCTOR</option>
                        <option value="column-two" className="assistant-option">ASSISTANT</option>
                        <option value="column-three" className="hygienist-option">HYGIENIST</option>
                    </select>
                    <select key={events.startTime} className="select-start-time">
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
                    <select key={events.endTime} className="select-end-time">
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
                    <button onClick={close} onChange={addEvent} className="btn-cancel" >SAVE</button> 
                </div>
            </div>
        </div>
    )
}

export default Form;