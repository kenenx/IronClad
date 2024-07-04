import { Card } from "react-bootstrap";

const HistoryCard = ({ workout }) => {

  const formattedDate = new Date(workout.date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Card style={{ borderRadius: "2px" }}>
      <Card.Body className="text-center">
        <Card.Title>{workout.name}</Card.Title>
        <Card.Text>{formattedDate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HistoryCard;