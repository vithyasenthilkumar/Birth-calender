import React,{useState} from "react";
import "./BirthcalenderComponent.css";


function BirthcalenderComponent() {
  const[date,setdate]=useState()
 
    
  return (
    <div className='date'>
        <h1>Birthday Calender Display</h1>
        <div className='selectdate'>
           <input type="date" onChange={e=>setdate(e.target.value)}/>
           <div> 
            <h1>Selected Date:{date}</h1>
           </div>
           <div>
            <input type='submit' value='submit'></input>
           </div>

           </div>
    </div>
    
   
  );
}


export default BirthcalenderComponent;
