import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AssetTab from './AssetTab';
import EditorTab from './EditorTab';
import SettingTab from './SettingTab';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string | boolean;
                    if (route.name === 'Edit') {
                        iconName = focused
                            ? 'brush'
                            : 'brush-outline';
                    } else if (route.name === 'Setting') {
                        iconName = focused
                            ? 'options'
                            : 'options-outline';
                    } else if (route.name === 'Asset') {
                        iconName = focused
                            ? 'gift'
                            : 'gift-outline';
                    } else {
                        iconName = "bug";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="Edit" component={EditorTab} />
            <Tab.Screen name="Asset" component={AssetTab} />
            <Tab.Screen name="Setting" component={SettingTab} />
        </Tab.Navigator>
    )
}

export default TabNavigator;