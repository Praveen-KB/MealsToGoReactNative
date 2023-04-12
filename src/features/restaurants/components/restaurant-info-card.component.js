import React from "react";

import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  Cover,
  RatingAndOpen,
  RatingCont,
  Address,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = (props) => {
  const { restaurant = {} } = props;

  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",

    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArr = Array.from(new Array(Math.floor(rating)));

  return (
    <Cover elevation={1}>
      <Card.Cover
        source={{
          uri: photos,
        }}
      />
      <Spacer position="top" size="large">
        <Text variant="label">{name}</Text>
      </Spacer>
      <RatingAndOpen>
        <RatingCont>
          {ratingArr.map((e, i) => (
            <SvgXml key={i} xml={star} width={20} height={20} />
          ))}
        </RatingCont>
        <RatingCont>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          <Spacer position="left" size="medium">
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </Spacer>
          <Spacer position="left" size="medium">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </RatingCont>
      </RatingAndOpen>
      <Address>{address}</Address>
    </Cover>
  );
};

export default RestaurantInfoCard;
