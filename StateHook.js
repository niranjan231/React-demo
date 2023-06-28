import './StateHook.css';
// usestate==> This gives us a updated value in the button
import {useState} from "react"

const StateHook = ()=>{ 
    // let message = "Card not add yet";
    // Usestate is a function for updated value
    const [message,setMessage] = useState("card is not add now")
    // We Creat a function and perform some opration in button
    const handleClick =()=> {
        setMessage("card is add now")
console.log("clicked me");
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
       {/* We Will take a small text and change this text from button */}
       <small className="cardmessage">{message}</small>
      {/* In State propertes we creat a function a then function we will control by button  "In This Method we can count our data in live console server "*/}
      
       <button className="btn" onClick={handleClick}><strong>Buy This Product</strong><strong>30%</strong> </button>
       
   </div>
     </div>
    );
  }
  
  export default StateHook;
  