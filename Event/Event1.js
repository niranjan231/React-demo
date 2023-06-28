import './Event1.css';
 const Event1 = ()=>{ 
      // This way for one card detales if we have multple data the we use the props
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
   {/* We Will perform the some opration in this button */}
   {/* after apply onClick we can see this button will be some opration performe */}
   <button className='add' onClick={()=> console.log("Clicked Me",user)}>
   <div>
    <img className='icon' src='https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-260nw-731433349.jpg' alt=''/>
   </div>
   <h6>Add To Card</h6>
   </button>
   </div>
  )
}

export default Event1;
