import { Row, Col } from 'react-bootstrap';
import Recipe from '../components/Recipe';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetRecipesQuery } from '../slices/recipeSlice';

const HomeScreen = () => {
  const { data: recipes, isLoading, error } = useGetRecipesQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>) : (
        <>
          <h1>All Recipes</h1>
          <Row>
              { recipes.map((recipe) => (
                  <Col key={recipe._id} sm={12} md={6} lg={4} xl={3}>
                      <Recipe recipe={recipe} />
                  </Col>
              )) }
          </Row>
      </>) }

        
    </>
  )
}

export default HomeScreen