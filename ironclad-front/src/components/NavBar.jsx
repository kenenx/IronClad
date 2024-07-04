import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="d-flex justify-content-around w-100">
          <a href="/profile" className="nav-link">
            Profile
          </a>
          <div className="border-end"></div>
          <a href="/home" className="nav-link">
            Workout
          </a>
          <div className="border-end"></div>
          <a href="/history" className="nav-link">
            History
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
