import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { getTemplate } from "../services/template.service";

import { createWorkout } from "../services/workout.service";

function CompleteWorkout() {
  const [rpe, setRpe] = useState("");
  const id = localStorage.getItem("templateId");
  const userId = localStorage.getItem("userId");

  const [workout, setWorkout] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const data = await getTemplate({ id });
        setWorkout(data);
        console.log(workout);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWorkout();;
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await createWorkout({ user: userId, name : workout.name, exercises : workout.exercises, rpe });
      console.log(data);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }






  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <h1 className="text-center mb-3">Complete Workout?</h1>
          <div className="mb-3">
            <label htmlFor="rpe" className="form-label">
              RPE (1-10)
            </label>
            <input
              type="number"
              id="rpe"
              className="form-control"
              min="1"
              max="10"
              step="1"
              value={rpe}
              onChange={(event) => setRpe(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mb-2">
            <Button variant="primary" size="lg" onClick={handleSubmit}>
              Submit
            </Button>

            <div className="row">
              <div className="col-auto mx-auto mt-5">
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteWorkout;