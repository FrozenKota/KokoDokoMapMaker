import React, { useMemo, ReactNode } from 'react';
import { Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../Common/Header';

const DataCreatePage: React.FC<any> = ({ navigation }) => {
    const left: ReactNode = useMemo(() => {
        return (
            <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => {
                    navigation.goBack();
                }}>
                <Text>戻る</Text>
            </TouchableOpacity>
        );
    }, [navigation])

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Header title="データ作成画面" left={left} />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#EEEEEE',
                }}>
                <Text style={{ textAlign: 'center' }}>ファイル名を入力</Text>
                <TextInput style={{ width: '80%', backgroundColor: 'gray', alignSelf: 'center' }}></TextInput>
                <Text></Text>
                <Button title="決定" onPress={() => { navigation.navigate('TabNavigator') }}></Button>
                <Button title="中止" onPress={() => { navigation.navigate('HomeScreen') }}></Button>
            </View>
        </View>
    );
}

export default DataCreatePage