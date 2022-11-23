import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../BottomTab/TabNavigator';
import DataCreatePage from './DataCreatePage';
import DataSelectPage from './DataSelectPage';
import HomeScreen from './HomeScreen';


const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="DataSelectPage" component={DataSelectPage} />
            <Stack.Screen name="DataCreatePage" component={DataCreatePage} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;