import React, { useEffect, useRef } from 'react';
import Video from '../../assests/videoo.png.mp4'

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
            <video ref={videoRef} width="500" controls>
               <source src={Video} type='video/mp4' />
               
            </video>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )

};

export default Videoplay;