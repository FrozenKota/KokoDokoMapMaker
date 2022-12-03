import React, { ReactNode, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
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
import MapView from 'react-native-maps';

const Actions = [
    { icon: { name: 'delete', color: '#fff' }, title: "Delete", onPress: () => { console.log('Delete Something') } },
    { icon: { name: 'add', color: '#fff' }, title: "Add", onPress: () => { console.log('Add Something') } },
    { icon: { name: 'save', color: '#fff' }, title: "Add2", onPress: () => { console.log('Save Something') } },
    { icon: { name: 'settings', color: '#fff' }, title: "Add3", onPress: () => { console.log('Setting Something') } },
]

const EditorTab: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <MapView

                style={{ height: '100%', width: '100%' }}
                mapType='standard'
                rotateEnabled={false}
                zoomEnabled={true}
                onRegionChangeComplete={(e) => { console.log(e) }}
            />
            <SpeedDial
                isOpen={open}
                size='large'
                placement='right'
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                {Actions.map((v, i) => (<SpeedDial.Action
                    key={i}
                    icon={{ name: Actions[i].icon.name, color: Actions[i].icon.color }}
                    title={Actions[i].title}
                    onPress={Actions[i].onPress}
                />))}
            </SpeedDial>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default EditorTab;