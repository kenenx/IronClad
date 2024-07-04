import { useState } from 'react';
import { NavLink, useNavigate} from "react-router-dom";

import { login } from "../services/auth.service";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(username, password);
      console.log(data.user);
      localStorage.setItem("user", data.user.user.username);
      localStorage.setItem("userId", data.user.user._id);
      localStorage.setItem("accessToken", data.user.accessToken);
      alert("Login successful!");
      // navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row">
        <div className="col-md-10 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Log In
            </button>
          </form>
          <div className="text-center mt-3">
            <NavLink to="/register">Don't have an Account?</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;