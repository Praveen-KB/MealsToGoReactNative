import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantsTransform,
  restaurantsRequest,
} from "./restaurants.service";

export const ResturantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setrestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setrestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
  };

  useEffect(() => {
    retriveRestaurants();
  }, []);

  return (
    <ResturantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </ResturantContext.Provider>
  );
};
