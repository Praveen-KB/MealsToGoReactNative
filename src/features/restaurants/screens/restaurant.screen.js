import React from "react";

import { useContext } from "react";
import { FlatList } from "react-native";
import { ResturantContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../utils/space-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";

const RestaurantListCont = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const MyComponent = () => (
  <ActivityIndicator animating={true} color="#457854" />
);

const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(ResturantContext);

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        MyComponent()
      ) : (
        <RestaurantListCont
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantScreen;
