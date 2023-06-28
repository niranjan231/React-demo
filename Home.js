import { NavLink } from "react-router-dom";
import MCard from "./MCard";

const Home = () => {
  return (
    <div>
      <nav>
        <h1>Hi, This is my Home Page</h1>
        {/* Use NavLink instead of Link */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mcard">Clicked Me</NavLink>
      </nav>
    </div>
  );
}

export default Home;