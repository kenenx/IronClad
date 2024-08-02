import { useEffect } from "react"; 
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

import { deleteUser } from "../services/auth.service.js";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("user");
    if (!username) {
      navigate("/"); // Assuming your login route is "/login"
    }
  }, [navigate]);

  const handleDeleteAccount = () => {
    try {
      const username = localStorage.getItem("user");
      deleteUser(username);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="text-center">
        <button onClick={handleDeleteAccount} className="btn btn-danger mt-3">
          Delete Account
        </button>
      </div>
      <div className="card " style={{ margin: "20px" }}>
        <h3 className="text-center pt-3">User Settings</h3>
        <div className="card-body">
          <UserForm />
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleLogout} className="btn btn-secondary mt-2 mb-3">
          Log Out
        </button>
      </div>
      <div style={{ height: "250px" }}></div>
    </>
  );
};

export default Profile;
