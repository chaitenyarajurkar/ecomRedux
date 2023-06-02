import { GET_CAMERA_DATA, GET_MOBILE_DATA } from "../constants/actiontypes";


const initialState ={
        mobileData:[],
        cameraData:[]
};


export default function productStoage(state = initialState,action){

     switch(action.type){
         case GET_MOBILE_DATA:
                return {
                    ...state,
                    mobileData:action.payload
                }
                case GET_CAMERA_DATA:
                    return {
                        ...state,
                        cameraData:action.payload
                    }
    
        default:
          return{
               ...state
          }

     }

}