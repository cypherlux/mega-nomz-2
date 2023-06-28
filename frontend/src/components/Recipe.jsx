import { Card } from "react-bootstrap";
import recipes from "../recipes";

const Recipe = ({ recipe }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={`/recipes/${recipe._id}`}>
            <Card.Img src={recipe.image} variant="top" />
        </a>

        <Card.Body>
            <a href={`/recipes/${recipe._id}`}>
                <Card.Title as="div">
                    <strong>{recipe.name}</strong>

                </Card.Title>
            </a>
            <Card.Text  as="h4">
                {recipe.description}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Recipe