import React from 'react';

const List = props => {
  let list= props.listo.map(item => {
      return <li>{item}</li>
  })

  return (
    <div className='box list'>
      <h1>Here Is a List</h1>
      <ul>
      {list}
      </ul>
    </div>
  )
}

export default List;
