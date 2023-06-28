// import './ProjectPart1';
import './ProjectPart1.css';

 const ProjectPart1 = (data)=>{ 
  return (
    <div>
    <div className="itemcard">
        <div>
       <center><img src="https://m.media-amazon.com/images/I/615nnCGWSwL.jpg" alt="some title"/></center>
       </div>
       <div className="title">
        <h3>Title of the Item</h3>
        <b>&#9734;</b>
        <b>&#9734;</b>
        <b>&#9734;</b><b>&#9734;</b><b>&#9734;</b>
       </div>
       {/* <spam>A Beautifull Mirror</spam> */}
       <div className="priceing">
        <spam>Rs-340</spam>
        <small>
            <strike>450</strike>
        </small>
       </div>
       {/*"Handle Event"  ==> If We wiil click the button then some opration perform in live console */}
       {/* we can use also propes method and we can see our all data in server */}
       <button className="btn" onClick={()=>console.log("clicked",data)}><strong>Buy This Product</strong><strong>30%</strong> </button>
       
   </div>
   
   </div>
  );
}

export default ProjectPart1;
