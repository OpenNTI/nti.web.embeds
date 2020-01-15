import React from 'react';

const Card = (props) => (
    <div style={{
      backgroundColor: 'white'
    }}> 
      <h4>{props.title}</h4> 
      <div>
        {props.description} 
      </div> 
    </div>
  )

export default Card