import { useState } from 'react';

const UseEfect1 = ()=>{ 
    const [islogin,setIslogin] = useState(false)
    const handlelogin = ()=>{
        setIslogin(true)
    }
    const handlelogout = ()=>{
        setIslogin(false)
    }
    return (
      <div>
        <div className='inner'>
          
       <h3>{islogin ? "Welcome User!" : "Plese Login"}</h3>
       {
        islogin ?
        <button onClick={handlelogout}>Logout</button>
        :
        <button onClick={handlelogin}>Login</button>
       }
       </div>
     </div>
    );
  }
  
  export default UseEfect1;
  