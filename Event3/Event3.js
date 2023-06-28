// import './Hook';
import { useState } from 'react';
import './Event3.css';

 const Event3 = ()=>{ 
    // Creat Hook
    const [counter,setCounter] = useState(0)
    // Increes
    const increesCounter = ()=>{
        setCounter(counter+1);
    }
    // decrees
    const decreesCounter = ()=>{
        if(counter<=0){
            return 0;
        }
        setCounter(counter-1);
    }
  return (
    <div>
    <div className="itemcard">
        <div>
       <center><img src="https://m.media-amazon.com/images/I/615nnCGWSwL.jpg" alt="some title"/></center>
       </div>
       <div className="title">
        <h3>Title of the Item</h3>
        <b>&#9734;</b>
        <b>&#9734;</b>
        <b>&#9734;</b><b>&#9734;</b><b>&#9734;</b>
       </div>
       {/* <spam>A Beautifull Mirror</spam> */}
       <div className="priceing">
        <spam>Rs-340</spam>
        <small>
            <strike>450</strike>
        </small>
       </div>
       {/* <button className="btn"><strong>Buy This Product</strong><strong>30%</strong> </button> */}
       {/* Now we add how adding the product by click button */}
       <div className='card-add'>
        <button onClick={decreesCounter}><spam>-</spam></button>
        <spam className="count">{counter}</spam>
        <button onClick={increesCounter}><spam>+</spam></button>

       </div>
       
   </div>
   
   </div>
  );
}

export default Event3;
