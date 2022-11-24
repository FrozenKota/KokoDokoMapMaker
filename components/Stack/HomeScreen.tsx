import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC<any> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>HOME SCREEN</Text>
            <Text></Text>
            <Button title='新 規 作 成' onPress={() => navigation.navigate('DataCreatePage')} />
            <Button title='編　集' onPress={() => navigation.navigate('DataSelectPage')} />
            <Button title='デ ー タ 閲 覧' onPress={() => navigation.navigate('DataSelectPage')} />
        </View>
    );
}

export default HomeScreen;