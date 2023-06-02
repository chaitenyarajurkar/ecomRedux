import React, { useState } from 'react';
import { useContext } from 'react';
import { Appcart } from '../../App';

const Addincrement = () => {
    const[num , setNum] = useState(0);
    const{increaseqty} = useContext(Appcart); 
   
    const incAddnum =()=>{
        if(num>=0){
            setNum(num+1);
            increaseqty(num+1)
        }
    }
    const decSubnum =()=>{
        if(num>0){
            setNum(num-1);
            increaseqty(num-1)
        }
    }
    const onchangeHandler =(e)=>{
        setNum(e.target.value)
        console.log(setNum);
    }
    return (
        <div>
            <div className="btn-group mt-1" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-danger" onClick={()=> decSubnum()} >-</button>
                <input type='text' className='control-form ' style={{width:'25px'}} value={num} onChange={(e)=>onchangeHandler()}></input>
                <button type="button" className="btn btn-success" onClick={()=>incAddnum()}>+ </button>
            </div>
        </div>
    );
};

export default Addincrement;