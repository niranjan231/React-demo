import { useState } from 'react';
import ListitemCard from './ListitemCard';
import './Youtube.css';

// const user = {
    
//     price: 500,
//     discountprice:800,
//     title: "Title of The Item",
//     image: "https://media.istockphoto.com/id/510010569/vector/shopping-cart.jpg?s=612x612&w=0&k=20&c=105BOQY7WYkkgycnrT-36yIwREBIBzsyDol_uYoKhAg="

//   }
const FormCard = () =>{
// We will declired the function
const [price,setPrice] = useState(0);
const [discountprice,setDiscountprice] = useState(0);
const [title,setTitle] = useState("");
const [image,setImage] = useState("");
const [user,setUser] = useState({
    price: 500,
        discountprice:800,
        title: "Title of The Item",
        image: "https://media.istockphoto.com/id/510010569/vector/shopping-cart.jpg?s=612x612&w=0&k=20&c=105BOQY7WYkkgycnrT-36yIwREBIBzsyDol_uYoKhAg="
})
const handlePrice=(event)=>{
    // This give the live value in live
// console.log(event.target.value);
// Now form is control
setPrice(event.target.value);
}
const handleDiscountprice=(event)=>{
setDiscountprice(event.target.value);
}
const handleTitle=(event)=>{
    setTitle(event.target.value);
    }
    const handleImage=(event)=>{
        setImage(event.target.value);
        }
// Form function
const handleForm= (event) =>{
    // Prevent is do not refresh the page agin
    event.preventDefault();
console.log({price:price,
    discountprice,
    title,
    image});
setUser({price,
    discountprice,
    title,
    image
})
}

    return(
        <div className='wapper'>
            {/* we declired the form submit */}
          <form onSubmit={handleForm}>
            <div>
                <h4>Item card Detales</h4>
            </div>
           
            <br></br>
            <div className='price-form'>
                <label htmlFor='text'>price:</label>
                <input type='text' placeholder='Enter the tittle' value={price} onChange={handlePrice}></input>
            </div>
            <br></br>
            <div className='discount-form'>
                <label htmlFor='text'>discountprice:</label>
                <input type='text' placeholder='Enter the tittle' value={discountprice} onChange={handleDiscountprice} ></input>
            </div>
            <br></br>
            <div className='title-form'>
                <label htmlFor='text'>title:</label>
                <input type='text' placeholder='Enter the tittle' value={title} onChange={handleTitle} ></input>
            </div>
            <br></br>
            <div className='image-form'>
                <label htmlFor='text'>image:</label>
                <input type='text' placeholder='Enter the tittle' value={image} onChange={handleImage} ></input>
            </div>
            <br></br>
            <div>
            <button>Update</button>
            </div>
          </form>
          <br></br>
            <div>
                <ListitemCard data={user}></ListitemCard>
            </div>
        </div>
    )
}
export default FormCard;