import { Row, Col } from 'react-bootstrap';
import Recipe from '../components/Recipe';
import { useGetRecipesQuery } from '../slices/recipeSlice';

const HomeScreen = () => {
  const { data: recipes, isLoading, error } = useGetRecipesQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>) : (
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