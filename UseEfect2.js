import { useEffect, useState } from "react";

const UseEfect2 = () => {
    const [counter,setCounter] = useState(0);
    // setInterval(() =>{
    //     setCounter(counter+1);
    // },1000)
    // ==> "After applying this condition counter is incress agin but if we are refreshing the page counter is mute and become the uncontral"

    // ==> "Now we will apply the useEfect"
    useEffect(() =>{
        setInterval(() =>{
            setCounter(previousvalue => previousvalue+1);
        },1000)
    },[])
return(
   
    <div className="inner">
       <h2>{counter}Second</h2>
    </div>
)
}
export default UseEfect2;
 // setIntrvel => This is use for rerender agin and agin
//  useEfect ==>this has two perametar one is function and another is depandancy of array
// useEfect ==> This will count only one time not agin
//setIntreval is count agin every time but useEfect run only one time
// Previousvalue ==> this is perametar of the useEfect