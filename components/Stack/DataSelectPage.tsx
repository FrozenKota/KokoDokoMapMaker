import React, { useMemo, ReactNode } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Platform,
    StatusBar,
    SafeAreaView,
} from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, ThemeProvider, ListItem } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../Common/Header';

const DataSelectPage: React.FC<any> = ({ navigation }) => {
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

    const SwipeableListItem = () => {
        return (
            <ListItem.Swipeable
                leftContent={(reset) => (
                    <Button
                        title="編集"
                        onPress={() => {
                            navigation.navigate('TabNavigator');
                            reset()
                        }}
                        icon={{ name: 'edit', color: 'white' }}
                        buttonStyle={{ minHeight: '100%' }}
                    />
                )}
                rightContent={(reset) => (
                    <Button
                        title="削除"
                        onPress={() => {
                            reset();
                        }}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                )}>
                <Ionicons name='gift' size={30} />
                <ListItem.Content>
                    <ListItem.Title>セーブデータ</ListItem.Title>
                </ListItem.Content>
            </ListItem.Swipeable>
        );
    }

    return (
        <ThemeProvider>
            <SafeAreaView style={styles.container}>
                {false && (<Header title="データ選択画面" left={left} />)}
                <ScrollView>
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                    <SwipeableListItem />
                </ScrollView>
            </SafeAreaView>
        </ThemeProvider >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default DataSelectPage;
