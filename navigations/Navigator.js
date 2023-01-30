import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/home';
import PaymentPage from '../screens/payment';
import TablePage from '../screens/table';
import UserDetail from '../screens/home/userDetail';
import PaymentDetail from '../screens/paymentDetail';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStack = () =>{
  return (
    <Stack.Navigator initialRouteName='Users'>

          <Stack.Screen
            name="Users"
            component={HomePage}
          />

          <Stack.Screen
          name="User History"
          component={UserDetail}
          />
        </Stack.Navigator>
  )
}

const PaymentStack = () =>{
  return (
    <Stack.Navigator initialRouteName='Payment'>

          <Stack.Screen
            name="Payment"
            component={PaymentPage}
          />

          <Stack.Screen
          name="Payment Detail"
          component={PaymentDetail}
          />
        </Stack.Navigator>
  )
}

const Navigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
      initialRouteName="Home"
      screenOptions={{
        // tabBarLabelPosition:"below-icon",
        // tabBarIconStyle: { display: "none" },
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}

        options={{ tabBarLabel: 'User', headerShown:false,
        tabBarIcon:({ focused, color, size}) => {
          return <FontAwesome name="user" size={size} color={color}/>
        }
      }}
      />
      <Tab.Screen
        name="PaymentStack"
        component={PaymentStack}

        options={{ tabBarLabel: 'Payment', headerShown:false,
        tabBarIcon:({ focused, color, size}) => {
          return <MaterialIcons name="payment" size={size} color={color}/>
        }
      }}
      />
      <Tab.Screen
        name="TablePage"
        component={TablePage}

        options={{ tabBarLabel: 'Table',
        tabBarIcon:({ focused, color, size}) => {
          return <FontAwesome name="table" size={size} color={color}/>
        }}}
      />
    </Tab.Navigator>
  )
}
export default Navigator;