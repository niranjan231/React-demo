import './Header.css';
import Listitem1 from '../Listitem1/Listitem1';
// import ListitemCard1 from './ListitemCard1';

const Header = ()=>{
    return(
        <div>
            <header>
         <div className="head">
    <h4>Pintu Cart</h4>
    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" className="image2" />
       </div>
       <div>
        <input className="inp-search" placeholder="Enter product name"></input>
       {/* <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" className="image1" /> */}
       </div>
       <div className="cart">
         <p>Cart</p>
         <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" className="image2" />
       </div>
         </header>
         <div className="panel">
            {/* <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Product</p>
            <p>Order</p> */}
            <a href='#' style={{color:"white"}} >Home</a>
            <a href='#' style={{color:"white"}}>About</a>
            <a href='#' style={{color:"white"}}>Service</a>
            <a href='#' style={{color:"white"}} >Order</a>
         </div>
         <div className="card-content">
        {/* <ListitemCard1></ListitemCard1>
        <ListitemCard1></ListitemCard1>
        <ListitemCard1></ListitemCard1>
        <ListitemCard1></ListitemCard1> */}
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <div className='first-content'>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        <Listitem1></Listitem1>
        </div>
        </div>
        </div>
    )
}
export default Header;