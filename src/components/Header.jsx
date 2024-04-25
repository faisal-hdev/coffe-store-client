import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/signIn">signIn</NavLink>
      <NavLink to="/signUp">signUp</NavLink>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Header;
