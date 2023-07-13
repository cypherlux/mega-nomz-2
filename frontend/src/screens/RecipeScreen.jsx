import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import recipes from "../recipes";

const RecipeScreen = () => {
    const { id: recipeId } = useParams();
    const recipe = recipes.find((r) => r._id === recipeId );

    return (
        <>
        <Link className="btn btn-light my-3" to="/">
            Go Back
        </Link>

        <Row>
            <Col md={5}>
                <Image src={recipe.image} alt={recipe.name} fluid />

                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{recipe.name}</h2>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <p><i>{recipe.description}</i></p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Source:</Col>
                                <Col>
                                <strong><a href="{recipe.sourceURL}">{recipe.source}</a></strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Cuisine:</Col>
                                <Col>
                                <strong>{recipe.cuisine}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Meal:</Col>
                                <Col>
                                <strong>{recipe.mealType}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </Col>

            <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>Instructions:</h3>
                        {recipe.instructions}
                    </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>Ingredients:</h3>
                            {recipe.ingredients}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className="btn-block" type="button">
                                Add to cart
                            </Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
 
            </Col>
        </Row>
        </>
    );
};

export default RecipeScreen;