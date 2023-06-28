import './ListitemCard.css';
import ListItem from './ListItem';

const ListitemCard = ({data}) =>{
    // This is the Second way to pass dynamic data pas in the card
  
    return(
    <div>
<ListItem user={{
          price: 50,
          discountprice:800,
          title: "Title of The Item",
          image: "https://media.istockphoto.com/id/510010569/vector/shopping-cart.jpg?s=612x612&w=0&k=20&c=105BOQY7WYkkgycnrT-36yIwREBIBzsyDol_uYoKhAg="
}}></ListItem>
{/* <ListItem user={{
          price: 200,
          discountprice:650,
          title: "Title of The Item",
          image: "https://media.istockphoto.com/id/510010569/vector/shopping-cart.jpg?s=612x612&w=0&k=20&c=105BOQY7WYkkgycnrT-36yIwREBIBzsyDol_uYoKhAg="
}}></ListItem> */}
    </div>
    )
}
export default ListitemCard;