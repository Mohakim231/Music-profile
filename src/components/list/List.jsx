import React, { useState } from 'react';
import './List.css';
import { Albums } from '../albums/albums';

function List() {
  const [title, newTitle] = useState('');
  // const [date, newDate] = useState('');
  const [data, setData] = useState('');
  const handleTitle = (e) => {
    newTitle(e.target.value)
  };
  // const handleDate = (e) => {
  //   newDate(e.target.value)
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(title);
    Albums.push(data);
  }
  return (
    <div className='list'>
    <ul className='albumList'>
      {Albums.map((a, index) => {
        return(
          <li key={index}>
          <h3>{a.title}</h3>
          <p>{a.date}</p>
          <img src={a.image}/>
        </li>
        )
      })} 
    </ul>
    <form
      onSubmit={handleSubmit}
    >
      <input type="text" name='title' placeholder='Title..' onChange={handleTitle}/><br></br>
      <input type="text" name='date' placeholder='Date..'/><br></br>
      <button type='submit'>Submit...</button>
    </form>
    </div>
  )
}

export default List