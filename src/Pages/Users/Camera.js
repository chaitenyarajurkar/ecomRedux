
import React  from 'react';
import { useSelector } from 'react-redux';


const Camera = () => {
    const mobile  = useSelector((state)=>state.reducer.mobileData)
    console.log(mobile)
    // getCameraData()
    return (
        <div className='container'>
            Camera
        </div>
    );
};

export default Camera;