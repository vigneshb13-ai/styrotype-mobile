import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CategoriesScreen } from "../screens/Categories";
import { HomeScreen } from "../screens/Home";
import { FolderHeart, HomeIcon, List, TvIcon, User } from "lucide-react-native";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { useTheme } from "../providers/ThemeProvider/ThemeProvider";
import { BottomTabsParamList } from "./types";
import WishlistScreen from "../screens/Wishlist/WishlistScreen";
import { View } from "react-native";
import CartScreen from "../screens/Cart/CartScreen";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const TabBarIcon = ({
  focused,
  color,
  size,
  icon: Icon,
}: {
  focused: boolean;
  color: string;
  size: number;
  icon: any;
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: focused ? theme.colors.colors.primary : "transparent",
        borderRadius: 30,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon color={focused ? theme.colors.colors.surface : color} size={20} />
    </View>
  );
};

const HomeTabIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => (
  <TabBarIcon focused={focused} color={color} size={size} icon={HomeIcon} />
);

const CategoriesTabIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <TabBarIcon focused={focused} color={color} size={size} icon={List} />;

const CartTabIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.colors.white,
        borderRadius: 35,
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
      }}
    >
      <TvIcon
        color={
          focused ? theme.colors.colors.error : theme.colors.colors.primary
        }
        size={24}
      />
    </View>
  );
};

const WishlistTabIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => (
  <TabBarIcon focused={focused} color={color} size={size} icon={FolderHeart} />
);

const ProfileTabIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <TabBarIcon focused={focused} color={color} size={size} icon={User} />;

export default function BottomTabNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.colors.primaryLight,
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          bottom: 30,
          marginHorizontal: 20,
          borderRadius: 20,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          top: 6,
        },
        tabBarIconStyle: {
          padding: 3,
        },
        tabBarShowLabel: true,

        tabBarActiveTintColor: theme.colors.colors.text,
        tabBarInactiveTintColor: theme.colors.colors.textPrimary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: CategoriesTabIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: CartTabIcon,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: WishlistTabIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}
