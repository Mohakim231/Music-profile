import React from 'react'
import './List.css'

function List() {
  return (
    <div className='list'>
    <ul className='albumList'>
        <li>
          <h2>Album title</h2><span>release date:00/00/0000</span>
          <p>description</p>
        </li>
        <li>
          <h2>Album title</h2>
          <p>description</p>
          <p>release date:00/00/0000</p>
        </li>
        <li>
          <h2>Album title</h2>
          <p>description</p>
          <p>release date:00/00/0000</p>
        </li>
        <li>
          <h2>Album title</h2>
          <p>description</p>
          <p>release date:00/00/0000</p>
        </li>
    </ul>
    <form>
      <label for="title">Title</label>
      <input type="text" name='title'/>
      <label for="date">Release date</label>
      <input type="text" name='date'/>
      <label for='description'>Description</label>
      <input type="text" name='description'/>
      <button type='submit'></button>
    </form>
    </div>
  )
}

export default List