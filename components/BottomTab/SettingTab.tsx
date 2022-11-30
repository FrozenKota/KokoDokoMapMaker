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

const SettingTab: React.FC<any> = ({ navigation }) => {
    const right: ReactNode = useMemo(() => {
        return (
            <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => {
                    navigation.navigate('HomeScreen');
                }}>
                <Text>Save & Quit🐶</Text>
            </TouchableOpacity>
        )
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            {false && (<Header title="Settings" right={right} />)}
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#CCCCFF',
                }}>
                <Text style={{ textAlign: 'center' }}>オプション変更画面です</Text>
                <Button title="Save & Quit" onPress={() => { navigation.navigate('DataSelectPage') }}></Button>
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

export default SettingTab;