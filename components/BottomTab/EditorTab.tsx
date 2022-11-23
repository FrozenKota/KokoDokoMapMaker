import React, { ReactNode, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import Header from '../Common/Header';

const EditorTab: React.FC = () => {
    const navigation = useNavigation();
    const right: ReactNode = useMemo(() => {
        return (
            <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => {
                    navigation.goBack();
                }}>
                <Text>戻る😼</Text>
            </TouchableOpacity>
        )
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            {false && (<Header title="編集画面" right={right} />)}
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#CCFFCC',
                }}>
                <Text style={{ textAlign: 'center' }}>編集画面</Text>
            </View>
        </View>
    );
}

export default EditorTab;