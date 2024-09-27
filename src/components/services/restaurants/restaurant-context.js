import { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurant-service";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const retrieveRestaurant = () => {
      setIsLoading(true);
      setTimeout(() => {
        restaurantsRequest()
          .then(restaurantsTransform)
          .then((results) => {
            setRestaurants(results);
          })
          .catch((err) => {
            setError(err);
          });
      }, 2000);
    };

    retrieveRestaurant();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        isError,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
