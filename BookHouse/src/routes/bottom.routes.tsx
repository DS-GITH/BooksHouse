import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/List/List';
import User from '../pages/User/User';
import CustomTabBar from '../components/NavigatorTabBar';
const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (

      <Tab.Navigator
        screenOptions={{headerShown:false}}
        tabBar={props=><CustomTabBar{ ...props}/>}
      >
        <Tab.Screen 
          name="List" 
          component={List} 
        />
        <Tab.Screen 
          name="User"
          component={User} 
        />
      </Tab.Navigator>
  );
}