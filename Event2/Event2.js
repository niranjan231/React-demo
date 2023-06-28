import { useState } from 'react';
import './Event2.css';


 const Event2 = ()=>{ 
// Now we will use the State
const [message,setMesage] = useState("Card is not Add yet");
const clickHandle = () =>{
  setMesage("Card Add Succesfully");
  console.log("Clicked Me");
}






  const user = {
    price: 500,
    discountprice:800,
    title: "Title of The Item",
    image: "https://media.istockphoto.com/id/510010569/vector/shopping-cart.jpg?s=612x612&w=0&k=20&c=105BOQY7WYkkgycnrT-36yIwREBIBzsyDol_uYoKhAg="
  }
  return (
    <div className="card">
     <img src={user.image}alt='Card Tittle'/>
   <div>
    <span><em>{user.price}</em> </span>
    <small>
      <strike>{user.discountprice}</strike>
    </small>
   </div>
   {/* We Will use the message and setMessage use hare */}
   <span>{message}</span>
   <div>
    <h6><em>{user.title}</em></h6>
   </div>
   {/* We Will perform the some opration in this button */}
   {/* This function can we chhange the value of any title in this card */}
   <button className='add' onClick={clickHandle}>
   <div>
    <img className='icon' src='https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-260nw-731433349.jpg' alt=''/>
   </div>
   <h6>Add To Card</h6>
   </button>
   </div>
  )
}

export default Event2;
