import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage : `url(https://cdn.whats-on-netflix.com/wp-content/uploads/2022/01/14094335/netflix-2021-library-numbers-1.png)`,
        backgroundPosition: 'center center'
    }}>
        <div className='banner-contents'>
            <h1 className='banner-title'>
                Movie Name
            </h1>
            <div className='banner-buttons'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>

            </div>
            <h1 className='banner-description'>this is test description</h1>
        </div>
        <div className='banner-fadebottom'>

        </div>
    </header>
  )
}

export default Banner