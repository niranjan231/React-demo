
import {BrowserRouter,Routes ,Route} from 'react-router-dom';
const Youtube = () => {
  
return(
   <BrowserRouter>
    <div>
        {/* This path is very crusical becouse this will help for find our text in live server */}
        <Routes>
    <Route path='/hello' element={<h2>Hello This is Router Lecture</h2>} >
        
    </Route>
    </Routes>
    <h2>Deafult Message</h2>
    </div>
    </BrowserRouter>
)
}
export default Youtube;
 