import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
