import React from 'react';
import List from './List';
const Picture = props => {
  let listo=["Asteroids", "Comets", "Moon", "Planets", "Stars", "Sun"]
  return (
    <div className='box picture'>
      <h1>Look at This Picture</h1>
      <img alt='Clever EEs' src={props.src}/>
      <List listo= {listo}/>
    </div>
  )
}

export default Picture;
