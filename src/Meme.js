import React from 'react';
import useFetch from "react-fetch-hook";
import './Meme.css';
const API_URL = 'https://memextream.herokuapp.com/memes'; 

export default function FetchMeme(){
    const {data} = useFetch(API_URL);
    return (
        <>
        <div className="img-div">
            <img className='image' src = "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
        </div>
        </>
    )
}
