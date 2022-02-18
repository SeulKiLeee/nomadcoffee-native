import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from "../screens/Home";
import Search from "../screens/Search";
import Profile from "../screens/Profile";


const Tab = createMaterialBottomTabNavigator();


export default function LoggedInNav(){
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <Ionicons name="home-outline" color={color} size={26} />
                    ),
                  }}
            />
            <Tab.Screen 
                name="Search" 
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                      <Ionicons name="ios-search-outline" color={color} size={26} />
                    ),
                  }}
                
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                      <Ionicons name="happy-outline" color={color} size={26} />
                    ),
                  }}
            />
        </Tab.Navigator>
    )
}