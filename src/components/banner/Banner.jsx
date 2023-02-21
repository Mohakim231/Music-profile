import React from 'react'
import { Albums } from '../albums/albums'
import './Banner.css'

function Banner() {
  {Albums[Math.floor(Math.random()*Albums.length)]}
  return (
    <>
    <img id='bannerimg' src='https://th.bing.com/th/id/OIP.C8m6gQaFFp5_hZYfeZIUPAHaDt?w=340&h=175&c=7&r=0&o=5&pid=1.7' alt='singer image'/>
    <h2 className='description'>Nancy Nabil Ajram is a Lebanese singer, television personality and businesswoman, dubbed by Spotify as the "Queen of Arab Pop".</h2>
    <div className='randomAlbum'>
      <h2 className='randomTitle'>random name</h2>
      <p className='randomDate'>random date</p>
      <img id='randomImage' src='https://th.bing.com/th/id/OIP.uoN8hRe660Gd8Le0F2pSpQHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7'/>
      <button id='randomButton' type='submit'>Randomise</button>
    </div>
    </>
  )
}

export default Banner