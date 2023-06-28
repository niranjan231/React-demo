import { useEffect, useState } from 'react';
import './API1.css';
import axios from 'axios'

const API1 = ()=>{ 
//    we will api call all time in useEfect
useEffect(()=>{
    // const result = fetch('https://jsonplaceholder.typicode.com/posts')
// console.log(result);
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(Response =>Response.json())
// .then(data =>{
//     console.log(data);
// })
// .catch(error =>{
//   console.log(error);
// })


// Another Way fetch api we install axious
// axios get the data
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(Response =>{
  console.log(Response);
})
.catch(error =>{
  console.log(error);
})

},[])
  
    return (
      <div>
        <h3>Hi Everyone</h3>
      </div>
    );
  }
  
  export default API1;
  