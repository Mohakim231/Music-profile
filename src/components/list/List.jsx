import React from 'react';
import './List.css';
import { Albums } from '../albums/albums';

function List() {
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
    <form>
      <input type="text" name='title' placeholder='Title..'/><br></br>
      <input type="text" name='date' placeholder='Date..'/><br></br>
      <textarea type="text" name='description' placeholder='Description..'></textarea><br></br>
      <button type='submit'>Submit...</button>
    </form>
    </div>
  )
}

export default List