import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Recipe from '../components/Recipe';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await axios.get('/api/recipes');
      setRecipes(data);
    };

    fetchRecipes();
  }, [])

  return (
    <>
        <h1>Latest Recipes</h1>
        <Row>
            { recipes.map((recipe) => (
                <Col key={recipe._id} sm={12} md={6} lg={4} xl={3}>
                    <Recipe recipe={recipe} />
                </Col>
            )) }
        </Row>
    </>
  )
}

export default HomeScreen