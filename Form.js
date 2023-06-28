// import { useState } from 'react';
import { useState } from 'react';
import './Form.css';
 const Form = ()=>{ 
  // onChange Propertes
  const [name,setTitle] = useState("")
  // onClick Propertes
  const [fullName,setFullName] = useState("")


  const handleTitle = (event)=>{
    // Chack live server console
// console.log(event);
// In this case our text repersent one by one
// console.log(event.target.value);
setTitle(event.target.value)
  }
  const onSubmit = ()=>{
    setFullName(name);
    console.log(name);
  }
  return (
    <div className='inner'>
        <h1>Hello {fullName}</h1>
       
        <div className="mb-3">
  <input type="text" placeholder='Enter your name'  className="form-control" id="exampleFormControlInput1" 
  value={name}
  // OnChange propertes
  onChange={handleTitle}/>
</div>
<button onClick={onSubmit}>Update</button>
<div>
  {/* This is our */}
  
</div>
   </div>
  );
}
export default Form;
