import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ExerciseList from "../components/ExerciseList";

import { getWorkout } from "../services/workout.service.js";

const PreviousWorkout = () => {
  const [workout, setWorkout] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const data = await getWorkout({ id });
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

  return (
    <Container>
      <h1 className="text-center">{workout.name}</h1>
      <ExerciseList exercises={exercises} />
    </Container>
  );
};

export default PreviousWorkout;
