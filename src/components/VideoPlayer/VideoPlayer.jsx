import React from 'react'
import { useEffect } from 'react';
import './VideoPlayer.css';

function VideoPlayer({show,url, setVideo}) {
    useEffect(()=>{

        let outsideArea = document.getElementById('videoPlayer');
        outsideArea.addEventListener('click',(e)=>{
            if(e.target.id === 'videoPlayer'){
                setVideo(!show)
                console.log('clicked')
            }
        }, );

        return outsideArea.removeEventListener('click', (e)=>{
            if(e.target.id === 'videoPlayer'){
                setVideo(!show)
            }
        })

    },[show])
  return (
    <div id='videoPlayer'>
        <iframe  src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen='1'></iframe>
    </div>
  )
}

export default VideoPlayer