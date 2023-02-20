import React from 'react'
import './List.css'

function List() {
  return (
    <div className='list'>
    <ul className='albumList'>
        <li>
          <h3>Album title</h3>
          <p>release date:00/00/0000</p>
          <img src="https://th.bing.com/th/id/OIP.uoN8hRe660Gd8Le0F2pSpQHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7"/>
        </li>
        <li>
          <h3>Album title</h3>
          <p>release date:00/00/0000</p>
          <img src="https://th.bing.com/th/id/OIP.QGjAnR-7DWv9HtdEBJoiDgHaGi?w=208&h=183&c=7&r=0&o=5&pid=1.7"/>
        </li>
        <li>
          <h3>Album title</h3>
          <p>release date:00/00/0000</p>
          <img src="https://th.bing.com/th/id/OIP.F20ccPrcMO768t_sw6uQAwHaGc?w=195&h=180&c=7&r=0&o=5&pid=1.7"/>
        </li>
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