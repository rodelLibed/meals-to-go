import React from "react";
import { Star, CircleX } from "lucide-react-native";
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/text-component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  Address,
  Section,
  SectionEnd,
  Icon,
  Info,
} from "./restaurant-info-styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <Star size={20} color="yellow" />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text
                variant="error"
                style={{ color: "red", textTransform: "uppercase" }}
              >
                Closed Temporarily
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <CircleX size={20} color="red" />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
