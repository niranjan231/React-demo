import './Userlist.css';
import User from './User';

// We apply Map method
const users = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const Userlist = ()=>{
    return(
        <div>
     {/* Apply Map method */}
     <div className="inner">
{
    users.map(() =>{
        return <User/>
    })
}
</div>
          




            {/* If we want to call multple time user then we call agin and agin user component but we can also add the map method of the javascript */}
{/*<User></User>
<User></User>
<User></User>
<User></User>
<User></User>
<User></User>
<User></User>
<User></User>
<User></User> */}
        </div>
    )
}
export default Userlist;