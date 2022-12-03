import React, { ReactNode, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import ISpeedDial from "../Common/ISpeedDial"
import { SpeedDial } from '@rneui/themed';

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
    const [open, setOpen] = React.useState(false);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ISpeedDial
                size='small'
                placement='right'
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                Actions={[
                    { icon: { name: 'edit', color: '#fff' }, title: 'edit', onPress: () => { console.log('edit something') } },
                    { icon: { name: 'edit', color: '#fff' }, title: 'erase', onPress: () => { console.log('edit something') } },
                    { icon: { name: 'edit', color: '#fff' }, title: 'size', onPress: () => { console.log('change size') } },
                ]}
            />
            <ISpeedDial
                size='large'
                placement='left'
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                Actions={[
                    { icon: { name: 'edit', color: '#fff' }, title: 'edit', onPress: () => { console.log('edit something') } },
                    { icon: { name: 'edit', color: '#fff' }, title: 'erase', onPress: () => { console.log('edit something') } },
                    { icon: { name: 'edit', color: '#fff' }, title: 'size', onPress: () => { console.log('change size') } },
                ]}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "fff",
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default EditorTab;