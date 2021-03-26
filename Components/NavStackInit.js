import React from 'react'

import Home from '../Views/Home';
import Settings from '../Views/Settings';
import AddFinances from '../Views/AddFinances';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (

    <NavigationContainer independent={true}>
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#f80759',
                style: {
                    backgroundColor: "#fff",
                }
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                // options={{
                //     tabBarIcon: ({focused}) => {
                //         if(!focused){
                //             return(<OutlineHome color={secColor} height='20' width='20'/>);
                //         }
                //         return(<FilledHome color='#f80759' height='20' width='20'/>);
                //     },
                // }}
            />

            <Tab.Screen
                name="AddFinances"
                component={AddFinances}
                // options={{
                //     tabBarIcon: ({focused}) => {
                //         if(!focused){
                //             return(<OutlineHome color={secColor} height='20' width='20'/>);
                //         }
                //         return(<FilledHome color='#f80759' height='20' width='20'/>);
                //     },
                // }}
            />

            <Tab.Screen
                name="Settings"
                component={Settings}
                // options={{
                //     tabBarIcon: ({focused}) => {
                //         if(!focused){
                //             return(<OutlineHome color={secColor} height='20' width='20'/>);
                //         }
                //         return(<FilledHome color='#f80759' height='20' width='20'/>);
                //     },
                // }}
            />

        </Tab.Navigator>
    </NavigationContainer>
);

export default TabNavigator;