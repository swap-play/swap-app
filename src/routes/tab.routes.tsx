import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Screens/Home/Home';
import { Search } from '../Screens/Search/Search';

import FeatherIcon from '@expo/vector-icons/Feather';
import { IconType } from '../utils/iconType';
import { Post } from '../Screens/Post/Post';
import { News } from '../Screens/News/News';
import { Favorites } from '../Screens/Favorites/Favorites';
import { PostButton } from '../Components/PostButton';

const Tab = createBottomTabNavigator();

interface IconProps {
  [screen: string]: IconType;
}

const icons: IconProps = {
  Home: {
    name: 'home',
  },
  Search: {
    name: 'search',
  },
  News: {
    name: 'grid',
  },
  Favorites: {
    name: 'bookmark',
  },
};

export function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Post') {
            return <PostButton onPress={() => navigation.navigate('Post')} />;
          }

          const { name } = icons[route.name];
          return <FeatherIcon name={name} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#8B5FD9',
        tabBarInactiveTintColor: '#2E3E4B',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopEndRadius: 26,
          borderTopLeftRadius: 26,
          height: 66,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}
