
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../pages/List/List";
import User from "../pages/User/User";
const Tab = createBottomTabNavigator();

export default function BottomRoutes() { 
    return (
        <Tab.Navigator initialRouteName="Login" screenOptions={{headerShown:false,} }>
            <Tab.Screen name="List" component={List} />
            <Tab.Screen name="User" component={User} />

        </Tab.Navigator>
    )
}