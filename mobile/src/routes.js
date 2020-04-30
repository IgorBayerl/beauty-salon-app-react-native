import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Home from './pages/home';
import Schedules from './pages/schedules';


export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='home' component={Home} />
                <AppStack.Screen name='schedules' component={Schedules} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}