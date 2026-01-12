import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "../providers/ThemeProvider/ThemeProvider";

import { AppStackParamList } from "./types";
import { Navigations } from "../constants/navigation";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import CartScreen from "../screens/Cart/CartScreen";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  const theme = useTheme();

  const screenOptions = {
    headerShown: false,
    contentStyle: { backgroundColor: theme.colors.colors.background },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
      <Stack.Screen
        name={Navigations.ProfileScreen}
        component={ProfileScreen}
      />
      <Stack.Screen name={Navigations.CartScreen} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
