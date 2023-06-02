
import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getmobileData } from '../../redux/actions/action';


//useDispatch()
//useSelector()
const Mobile = () => {
       const dispatch = useDispatch();
       const mobile = useSelector((state)=>state?.reducer?.mobileData); 
       useEffect(()=>{
             dispatch(getmobileData());
       },[])
    // getmobileData();
        console.log(mobile)
    return (
        <div className='container'>
       {/* mobileData.map */}
        </div>
    );
};

export default Mobile;