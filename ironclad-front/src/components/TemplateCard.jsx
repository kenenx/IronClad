import Card from "react-bootstrap/Card";

const TemplateCard = ({ template }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{template.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default TemplateCard;