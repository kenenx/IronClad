import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Template from "./pages/Template";
import Workout from "./pages/Workout";
import CompleteWorkout from "./pages/CompleteWorkout";
import History from "./pages/History";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/template/:id" element={<Template />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/complete-workout" element={<CompleteWorkout />} />
        <Route path="/history/" element={<History />} />
        <Route path="/profile/" element={<Profile />} />

      </Routes>
      <NavBar />
    </>
  );
}

export default App;
