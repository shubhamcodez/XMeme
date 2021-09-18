import React from 'react';
import './Home.css'
import FetchMeme from '../../Meme';

function Home() {
  return (
    <>
    <div className='home'>
    <FetchMeme/>
    </div>
    </>
  );
}

export default Home;