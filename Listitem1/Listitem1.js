import { useState } from 'react';
import './Listitem1.css';
 const Listitem1 = ()=>{ 
  const [counter,setCounter] = useState(0);
  const incressCounter=()=>{
    setCounter(counter+1)
  }
  const decressCounter=()=>{
    setCounter(counter-1);
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
   <div>
    <h6><em>{user.title}</em></h6>
   </div>
{
    counter < 1 ?
    <button className='add' onClick={incressCounter}>
   <div>
    <img className='icon' src='https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-260nw-731433349.jpg' alt=''/>
   </div>
   <h6>Add To Card</h6>
   </button>
   :
   <div className='btn'>
    <button className='first-btn' onClick={incressCounter} >+</button>
   <button className='second-btn'>{counter}</button>
   <button className='third-btn' onClick={decressCounter}>-</button>
  </div>  
}

  
   
   </div>
  )
}

export default Listitem1;
