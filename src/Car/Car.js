import React from 'react';


// const Car = () => {
//     return (
//         <div>This is car component</div>
//     )
// }
// const Car = () => <div>This is car component</div>

export default props => (
    <div style = {{
      border: '1px solid #ccc',
      marginBottom: '10px',
      display: 'block',
      padding: '10px'
    }}>
      <h3>Car name: {props.name}</h3>  
      <p>Year: <strong>{props.year}</strong></p> 
      <input type= "text" onChange={props.onChangeName} value={props.name}/>
      <button onClick={props.onDelete}>Delete</button>
    </div>
)

