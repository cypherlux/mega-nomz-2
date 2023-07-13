import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/recipe/${recipe._id}`}>
            <Card.Img src={recipe.image} variant="top" />
        </Link>

        <Card.Body>
            <Link to={`/recipe/${recipe._id}`}>
                <Card.Title as="div">
                    <h3><strong>{recipe.name}</strong></h3>

                </Card.Title>
            </Link>

            <Card.Text  as="p">
                <i>{recipe.description}</i>
            </Card.Text>

            <Card.Text  as="p">
                <p>
                    Recipe source: <a href="recipe.sourceURL">{recipe.source}</a>
                </p>
            </Card.Text>

        </Card.Body>
    </Card>
  )
}

export default Recipe