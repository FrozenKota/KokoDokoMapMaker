import React, { ReactNode, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import Header from '../Common/Header';

const AssetTab: React.FC = () => {
    const navigation = useNavigation();
    const right: ReactNode = useMemo(() => {
        return (
            <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => {
                    navigation.goBack();
                }}>
                <Text>戻る🐬</Text>
            </TouchableOpacity>
        )
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            {false && (<Header title="素材一覧" right={right} />)}
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#FFCCCC',
                }}>
                <Text style={{ textAlign: 'center' }}>素材選択画面</Text>
                <Text style={{ textAlign: 'center' }}></Text>
            </View>
        </View>
    );
}

export default AssetTab;