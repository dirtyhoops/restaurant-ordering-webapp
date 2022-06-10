import {
  FeaturedFoodItem,
  FoodImage,
  FoodCalories,
  FoodName,
  FoodDesc
} from './styles/FoodItem.styled';

import { FlexSpaceBetween } from './styles/Flex.styled';

export default function FoodItem({
  item: { id, name, calories, imgPath, price, star }
}) {
  return (
    <FeaturedFoodItem>
      <FoodImage src={imgPath} />
      <FoodName>{name}</FoodName>
      <FlexSpaceBetween>
        <div>
          <p>{star}</p>
          <p>{price}</p>
        </div>
        <div>button</div>
      </FlexSpaceBetween>
    </FeaturedFoodItem>
  );
}
