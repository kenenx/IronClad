import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HistoryCard = ({ workout }) => {

  const formattedDate = new Date(workout.date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <NavLink to={`/workout/${workout._id}`} style={{ textDecoration: "none" }}>
      <Card style={{ borderRadius: "2px" }}>
        <Card.Body className="text-center">
          <Card.Title>{workout.name}</Card.Title>
          <Card.Text>{formattedDate}</Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
};

export default HistoryCard;