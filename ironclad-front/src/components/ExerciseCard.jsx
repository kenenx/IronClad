import Card from "react-bootstrap/Card";

const Exercise = ({ exercise }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{exercise.name}</Card.Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <span>Sets: {exercise.sets}</span>
          <span>Reps: {exercise.reps}</span>
          <span>Weight: {exercise.weight}kg</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Exercise;