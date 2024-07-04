import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom"; 
import ExerciseList from "../components/ExerciseList";


import { getTemplate } from "../services/template.service";



function Workout() {
  const [workout, setWorkout] = useState({});
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem('templateId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const data = await getTemplate({ id });
        setWorkout(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWorkout();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { exercises = [] } = workout;

  const handleFinishWorkout = (event) => {
    event.preventDefault();
    navigate("/complete-workout");

  }

    return (
      <div className="pt-3">
        <Container>
          <h1 className="text-center pt-8">{workout.name}</h1>
          <ExerciseList exercises={exercises} />

          <Button
            variant="secondary"
            size="lg"
            className="w-100 mt-4 mb-4"
            onClick={handleFinishWorkout}
          >
            Finish Workout
          </Button>
        </Container>
        <div style={{ height: "200px" }}></div>
      </div>
    );
  };



export default Workout;