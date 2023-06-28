import './Routpr.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Routpr = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/hello"  element={<h1>Hi, this is leadership learning</h1>} />
        </Routes>
        <h1>Default Message</h1>
      </div>
    </BrowserRouter>
    // How Can We Acess Firstly We will go to Browser and /hello and acess the Router
  );
};

export default Routpr;