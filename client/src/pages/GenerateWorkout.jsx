import UserForm from "../components/UserForm";
import Button from "react-bootstrap/Button"; 
import { NavLink } from "react-router-dom"; 

const GenerateWorkout = () => {
  return (
    <>
      <div className="container text-center">
        <h4>Settings for Workout Generation</h4>
        <UserForm />
      </div>
      <div className="text-center mt-3">
        <NavLink to="/template/66864a15acc73e3c3d962db5">
          <Button variant="secondary" size="lg">
            Generate a workout for me
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default GenerateWorkout;