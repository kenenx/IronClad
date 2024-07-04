import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ExerciseList from "../components/ExerciseList";
import { getTemplate } from "../services/template.service";

const Workout = () => {
  const [workout, setWorkout] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
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

  const handleStartWorkout = () => {
    localStorage.setItem("templateId", id);
    navigate("/workout");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const { exercises = [] } = workout;


  return (
    <>
      <Container>
        <div>
          <h1 className="text-center mt-3">{workout.name}</h1>
          <ExerciseList exercises={exercises} />

          <Button
            variant="secondary"
            size="lg"
            className="w-100 mt-4 mb-3"
            onClick={handleStartWorkout}
          >
            Start Workout
          </Button>
        </div>
      </Container>
      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default Workout;