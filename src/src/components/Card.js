import React from 'react';

const Card = (props) => (
    <div style={{
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: props.direction == 'row' ? 'row' : 'column',
      width: props.direction == 'row' ? '225px' : 'min-content'
    }}>
      <div>
        <h4 style={{backgroundColor: 'orange', color: 'white', width: 'fit-content', padding: 4}}>Preview</h4> 
        <div>
          <img src="https://alpha.nextthought.com/content/sites/alpha.nextthought.com/Courses/DefaultAPICreated/OUCS-1/presentation-assets/webapp/v1/contentpackage-landing-232x170.png"/>
        </div>
      </div>
      <div>
        <p>{props.id}</p>
        <h5>{props.title}</h5>
      </div>
    </div>
  )

export default Card