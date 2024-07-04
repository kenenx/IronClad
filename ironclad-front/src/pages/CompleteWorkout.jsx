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
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = () => {
    localStorage.removeItem("templateId");
    navigate("/home");
  }

  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <h1 className="text-center mb-3 mt-3">Complete Workout?</h1>
            <div className="mb-3 text-center">
              <label htmlFor="rpe" className="form-label">
                RPE
              </label>
              <input
                type="number"
                id="rpe"
                className="form-control"
                min="1"
                max="10"
                step="1"
                value={rpe}
                placeholder="Enter RPE (1-10)"
                onChange={(event) => setRpe(event.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mb-2">
              <Button variant="secondary" size="lg" onClick={handleSubmit}>
                Submit
              </Button>

              <div className="row">
                <div className="col-auto mx-auto mt-5">
                  <button
                    className="btn btn-danger mb-3"
                    onClick={handleDelete}
                  >
                    Delete Workout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "500px" }}></div>
    </>
  );
}

export default CompleteWorkout;