import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/utility/safe-area-component";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantProvider } from "./src/components/services/restaurants/restaurant-context";

function MapScreen() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === "Restaurant") {
                    iconName = "restaurant-sharp";
                  } else if (route.name === "Settings") {
                    iconName = "settings";
                  } else if (route.name === "Map") {
                    iconName = "map";
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
