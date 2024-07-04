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
  console.log(id);

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
      <Container>
        <h1 className="text-center">{workout.name}</h1>
        <ExerciseList exercises={exercises} />

        <Button variant="primary" size="lg" className="w-100 mt-4" onClick={handleFinishWorkout}>
          Finish Workout
        </Button>
      </Container>
    );
  };



export default Workout;