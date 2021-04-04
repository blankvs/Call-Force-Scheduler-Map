import { useState } from 'react'
import '../css/MyTable.css'

function Times( events ) {
    return (
        <div className="table-div">
            <table>
                <tr>
                    <th className="clear-0"></th>
                    <th className="column-doctor-1">DOCTOR</th>
                    <th className="column-hygienist-2">HYGIENIST</th>
                    <th className="column-assistant-3">ASSISTANT</th>
                </tr>
                <tr>
                    <th className="nine-row">9:00AM</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>10:00AM</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>11:00AM</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>12:00AM</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>1:00PM</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>2:00PM</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>3:00pm</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </table>
        </div>
    )
}

export default Times 

// const cellWidth = 150;
// const cellHeight = 100;

// const getCellEventHeight = (eventData) => {
//   const multiplyValue = eventData.endTime - eventData.startTime +1;

//   return cellHeight*multiplyValue + 'px';
// }
// // 



// const calenderEvents = [
//   {
//     column: 3,
//     startTime: 1,
//     endTime: 3,
//   },
//   //Store as String
//   {
//     column: 4,
//     startTime: 3,
//     endTime: 5,
//   }
// ];

// // Use Effect
// //Function 
// <table>
//   <thead>
//     <tr>
//       <th></th>
//       <th>Doctor</th>
//       <th>hygienist</th>
//       <th>Vet</th>
//     </tr>
//   </thead>
//   {/* Store as Num */}
//   {/* Arrays */}

//   .1-hour-event::after {
//         content: 'Available';
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 163px;
//         height: 120px;
//         background-color: blue;
//   }
//   .2-hour-event::after {
//         content: 'Available';
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 163px;
//         height: 240px;
//         background-color: blue;
//   }
//   .3-hour-event::after {
//         content: 'Available';
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 163px;
//         height: 380px;
//         background-color: blue;
//   }

// /**
//   .myEl td:nth-child(3) {
//     color: red;
//   }
//  */

//   <tbody style={tableStyles}>
//     <tr>
//       <td>1:00</td>
//       <td></td>
//       <td>x</td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>2:00</td>
//       <td></td>
//       <td className=".3-hour-event">x</td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>3:00</td>
//       <td></td>
//       <td>x</td>
//       <td></td>
//     </tr>
//     {calendarEvents.map(event => (
//       <div></div>
//     ))}
//   </tbody>
// </table>