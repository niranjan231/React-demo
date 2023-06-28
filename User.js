import './User.css';
 var  user =  {
  name: "piter",
  phone: 5676576,
  email:"pitr@gmail.com",
  adress:"Delhi",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk83kVz0zMkeMx39BasEIpteztdiChKS6Xwg&usqp=CAU"
 }
 
 
  
 
 
const User = () =>{
    return(
        <div>
          {/* we can also use the html or css inside the card */}
          <div class="card">
  <img src={user.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{user.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{user.phone}</li>
    <li class="list-group-item">{user.adress}</li>
    <li class="list-group-item">{user.email}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        </div>
    )
}
export default User;