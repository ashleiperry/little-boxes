import React from 'react';
import Picture from './Picture';
import Numbers from './Numbers';

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>
        {props.paragraph}
      </p>
        <Numbers />
        <Picture src= 'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png' />
    </div>

  )
}

export default Wrapper;
