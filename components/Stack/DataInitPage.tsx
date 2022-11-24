import React, { useMemo, ReactNode } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import Header from '../Common/Header';

const DataInitPage: React.FC<any> = ({ navigation }) => {
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
        <View style={{ flex: 1 }}>
            <Header title="データ初期設定画面" left={left} />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#ff93c9',
                }}>
                <Text style={{ textAlign: 'center' }}>データ初期設定画面</Text>
                <Button title="データ1" onPress={() => { navigation.navigate('TabNavigator') }}></Button>

            </View>
        </View>
    );
}

export default DataInitPage;