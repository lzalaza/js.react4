import React, { useEffect, useRef } from 'react';
import Video from '../../assests/videoo.png.mp4'
import './video.css'

function Videoplay() {
    const videoRef = useRef(null);

    useEffect(()=>{
        console.log(videoRef)
    }, [videoRef]

    )

    const handlePlay = () => {
      videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };





    return (
        <div>
           
     <video ref={videoRef}  width="1000" controls>
               <source src={Video} type='video/mp4' />
               
            </video >
            <button className='vidd' onClick={handlePlay}>Play</button>
            <button className='vidd' onClick={handlePause}>Pause</button>
        </div>
    )

};

export default Videoplay;