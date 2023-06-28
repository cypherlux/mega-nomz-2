import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/recipes/${recipe._id}`}>
            <Card.Img src={recipe.image} variant="top" />
        </Link>

        <Card.Body>
            <Link to={`/recipes/${recipe._id}`}>
                <Card.Title as="div">
                    <strong>{recipe.name}</strong>

                </Card.Title>
            </Link>
            <Card.Text  as="h4">
                {recipe.description}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Recipe