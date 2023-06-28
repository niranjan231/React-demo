import MCard from './MCard';
import Form from './Form';

import './Routpr1.css';
import { BrowserRouter, Routes, Route,Switch } from 'react-router-dom';
// Switch==> "Switch use for stop multple component display";

const Routpr1 = () => {
  return (
    <BrowserRouter>
      <div>
        <switch>
        <Routes>
          <Route path="/hello"  element={<h1><MCard></MCard></h1>} />
          <Route path="/hello1"  element={<h1><Form></Form></h1>} />
          {/* Both We Can Not Acess togather we can acess one by one */}
        </Routes>
        </switch>
        <h1>Hi I Am Niranjan Singh</h1>
      </div>
    </BrowserRouter>
  );
};

export default Routpr1;