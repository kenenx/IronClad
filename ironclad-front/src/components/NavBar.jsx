import { useLocation } from "react-router-dom"; //

const NavBar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <></>;
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light sticky-bottom">
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
