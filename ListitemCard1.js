import './ListitemCard1.css';
import ListItem from "./ListItem";

const ListitemCard1 = ()=>{
    // This is the third way to pass the data as a props from one component to another component
    const item = [
        {
            id: 0,
            price: 500,
    discountprice:800,
    title: "Title of The Item",
    image: "https://media.istockphoto.com/id/510010569/vector/shopping-cart.jpg?s=612x612&w=0&k=20&c=105BOQY7WYkkgycnrT-36yIwREBIBzsyDol_uYoKhAg="

        },
        {
            id: 1,
            price: 200,
    discountprice:600,
    title: "Title of The Item",
    image: "https://www.shutterstock.com/image-vector/icon-vector-illustration-logo-template-260nw-1707649468.jpg"
        },
        {
            id:2,
            price: 100,
            discountprice:300,
            title: "Title of The Item",
            image: "https://c8.alamy.com/comp/C44FJM/3d-rendering-of-golden-trolley-on-white-background-C44FJM.jpg"
        },
        {
            id:3,
            price: 100,
            discountprice:300,
            title: "Title of The Item",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxC7Sb58N84JnQhRRx8XPy5rzrT34rHLFQMhAAHwtIr7gnqIgwSYZfEFr8CwYwlTQDcCI&usqp=CAU"
        }
    ]
    return(
        <div>
            <div>
<ListItem user={item[0]}></ListItem>
<ListItem user={item[1]}></ListItem>
<ListItem user={item[2]}></ListItem>
<ListItem user={item[3]}></ListItem>
</div>
        </div>
    )
}
export default ListitemCard1;