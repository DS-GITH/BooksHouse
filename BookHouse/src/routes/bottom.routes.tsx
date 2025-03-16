import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/List/List';
import User from '../pages/User/User';
import CustomTabBar from '../components/NavigatorTabBar';
import Inventory from '../pages/Inventory';
const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (

      <Tab.Navigator
        screenOptions={{headerShown:false}}
        tabBar={props=><CustomTabBar{ ...props}/>}
      >
        <Tab.Screen 
          name="Livros" 
          component={List} 
        />
         <Tab.Screen 
          name="Inventory"
          component={Inventory} 
        />
        <Tab.Screen 
          name="Usuário"
          component={User} 
        />
       
      </Tab.Navigator>
  );
}