import {
  StyledFeaturedFood,
  FeaturedFoodFlex
} from './styles/FeaturedFood.styled';
import { Container } from './styles/Container.styled';

import { foods } from '../data/fooditems';

import FoodItem from './FoodItem';

export default function FeaturedFood() {
  return (
    <StyledFeaturedFood>
      <Container>
        <h3>Our Featured Food</h3>
        <FeaturedFoodFlex>
          {foods.map((food, index) => (
            <FoodItem key={index} item={food} />
          ))}
        </FeaturedFoodFlex>
      </Container>
    </StyledFeaturedFood>
  );
}
