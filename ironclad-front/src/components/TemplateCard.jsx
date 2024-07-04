import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";  

const TemplateCard = ({ template }) => {

  return (
    <Link
      to={`/template/${template._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card style={{ borderRadius: "2px" }}>
        <Card.Img variant="top" src={template.image} />
        <Card.Body className="text-center">
          <Card.Title>{template.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default TemplateCard;