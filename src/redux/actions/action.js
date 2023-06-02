

import axios from 'axios';
import { GET_CAMERA_DATA, GET_MOBILE_DATA } from '../constants/actiontypes';





const getmobileData=()=>async(dispatch)=>{

    let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=1");
     dispatch({
        type:GET_MOBILE_DATA,
        payload:res.data.data
     })
      
}

const getcameraData=()=>async(dispatch)=>{

    let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=3");
     dispatch({
        type:GET_CAMERA_DATA,
        payload:res.data.data
     })
      
}

export {getmobileData,getcameraData}