import { useEffect, useState } from 'react';
import './CreatAp.css';

const CreatAp = ()=>{ 
    const [counter,setCounter] = useState(0)
    // setInterval(()=>{
    //     setCounter(counter+1)
    // },1000)
    //we can use useEfect function
    useEffect(()=>{
      setInterval(()=>{
        // here counter is not increes but exicute value call agin an agin
        // console.log("increes the value");
        setCounter(previousValue => previousValue + 1);
    },1000)
    },[])
    // If We want break this efect then we will use "useEfect" function
    return (
      // use inline css
      <div className='inner' style={{backgroundColor:"red"}}>
         <h2>{counter}Timer!!</h2>
       


     </div>
    );
  }
  
  export default CreatAp;
  