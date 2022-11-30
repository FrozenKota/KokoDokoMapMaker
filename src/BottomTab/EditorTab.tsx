import React, { ReactNode, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
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
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00F",
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default EditorTab;