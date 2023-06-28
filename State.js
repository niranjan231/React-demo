import { useState } from 'react';
import Login from './Login';
import Userlist from './Userlist';



 const State = ()=>{ 
  // in this console you can see live change in server of console
  // console.log("State function is called")
  // In This state we can change our page every 2 second at Browser
  const [isLogined,changeLogined] = useState(false)
  // const [isLogined,changeLogined] = useState(false) 

  const text = ()=>{
    setTimeout(()=>{
      // changeLogined(true);
      changeLogined(!isLogined);
    },1000)
  }
  // This Function will call the agin an agin
  text();
  return (
    <div className='inner'>
      {
        
        isLogined ?<Login/>:<Userlist/>
      }
   </div>
  );
}

export default State;
