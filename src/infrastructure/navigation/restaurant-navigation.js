import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant-screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail-screen";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ presentation: "modal" }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      ></RestaurantStack.Screen>
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  );
};
