import React from 'react';

const HardList = (props) => {

    return(
        <div className="veryEasy">
            <h1>{props.name}</h1>
            <p>Number: {props.number}</p>
            <p>Date of Birth: {props.DoB}</p>
        </div>)
}

export default HardList