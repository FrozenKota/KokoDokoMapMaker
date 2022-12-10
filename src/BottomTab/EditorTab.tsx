import React, { ReactNode, useMemo } from 'react';
import { Dimensions } from 'react-native';
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
    TouchableOpacity,
    Image,
} from 'react-native';
import { dummyDB } from '../Common/dummyDB';
import MapView, { Polyline, Circle } from 'react-native-maps';
import GridLine from '../Editor/GridLine';

const { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = (Platform.OS === "android" && StatusBar.currentHeight != undefined) ? StatusBar.currentHeight : 0;
const HEIGHT = height - STATUSBAR_HEIGHT;

const EditorTab: React.FC = () => {
    console.log("EditorTab");
    const [viewSize, setViewSize] = React.useState({ height: 0, width: 0 });
    const [open, setOpen] = React.useState(false);
    const [region, setRegion] = React.useState({
        latitude: 0,
        latitudeDelta: 0,
        longitude: 0,
        longitudeDelta: 0
    });
    const [cornerRegion, setCornerRegion] = React.useState(
        {
            nw: {
                latitude: 0,
                longitude: 0,
            },
            ne: {
                latitude: 0,
                longitude: 0,
            },
            sw: {
                latitude: 0,
                longitude: 0,
            },
            se: {
                latitude: 0,
                longitude: 0,
            }
        }
    )
    const [px1, setPx1] = React.useState(0);
    const [py1, setPy1] = React.useState(0);
    const [px2, setPx2] = React.useState(0);
    const [py2, setPy2] = React.useState(0);

    const items = [];
    const navigation = useNavigation();

    const Actions = [
        { icon: { name: 'delete', color: '#fff' }, title: "Delete", onPress: () => { console.log('Delete Something') } },
        { icon: { name: 'add', color: '#fff' }, title: "Add", onPress: () => { console.log('Add Something') } },
        { icon: { name: 'save', color: '#fff' }, title: "Add2", onPress: () => { console.log('Save Something') } },
        { icon: { name: 'settings', color: '#fff' }, title: "Add3", onPress: () => { console.log('Setting Something') } },
    ]
    const strokeWidth = 1;

    const onLayout = (e: any) => {
        const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0;
        setViewSize({
            height: e.nativeEvent.layout.height - statusBarHeight,
            width: e.nativeEvent.layout.width
        });
    }
    const onRegionChange = (e: any) => {
        const cornerRegionTemp = {
            nw: {
                latitude: e.latitude + e.latitudeDelta / 2,
                longitude: e.longitude - e.longitudeDelta / 2,
            },
            ne: {
                latitude: e.latitude + e.latitudeDelta / 2,
                longitude: e.longitude + e.longitudeDelta / 2,
            },
            sw: {
                latitude: e.latitude - e.latitudeDelta / 2,
                longitude: e.longitude - e.longitudeDelta / 2,
            },
            se: {
                latitude: e.latitude - e.latitudeDelta / 2,
                longitude: e.longitude + e.longitudeDelta / 2,
            }
        }
        setCornerRegion(cornerRegionTemp);

        setRegion({
            latitude: e.latitude,
            latitudeDelta: e.latitudeDelta,
            longitude: e.longitude,
            longitudeDelta: e.longitudeDelta
        })
        const imgSize = 20; // latitude 10deg, longitude 10deg
        const imgLongitude = 139.6191623993218;
        const imgLatitude = 35.13401895914322;

        setPx1(((imgLongitude - cornerRegionTemp.nw.longitude) * viewSize.width) / e.longitudeDelta);
        setPy1(viewSize.height * (cornerRegionTemp.nw.latitude - imgLatitude) / e.latitudeDelta);
        setPx2(((imgLongitude - cornerRegionTemp.nw.longitude + imgSize) * viewSize.width) / e.longitudeDelta);
        setPy2(viewSize.height * (cornerRegionTemp.nw.latitude - imgLatitude + imgSize) / e.latitudeDelta);
    }

    let i;
    for (i = -90; i <= 90; i += 1) {
        items.push(
            <Polyline
                key={i}
                coordinates={[
                    { latitude: i, longitude: -180 },
                    { latitude: i, longitude: 0 },
                    { latitude: i, longitude: 179.9999999999 },
                ]}
                strokeColor="#F00" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={[
                    '#000000',
                    '#000000',
                ]}
                strokeWidth={strokeWidth}
            />
        )
    }
    items.push(
        <Polyline
            key={i += 1}
            coordinates={[
                { latitude: cornerRegion.nw.latitude, longitude: cornerRegion.nw.longitude },
                { latitude: cornerRegion.se.latitude, longitude: cornerRegion.se.longitude },
            ]}
            strokeColor="#FF0" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
                '#000000',
                '#000000',
            ]}
            strokeWidth={2}
        />
    )
    items.push(
        <Polyline
            key={i += 1}
            coordinates={[
                { latitude: cornerRegion.ne.latitude, longitude: cornerRegion.ne.longitude },
                { latitude: cornerRegion.sw.latitude, longitude: cornerRegion.sw.longitude },
            ]}
            strokeColor="#FF0" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
                '#000000',
                '#000000',
            ]}
            strokeWidth={2}
        />
    )

    return (
        <SafeAreaView style={styles.container} onLayout={(e) => { onLayout(e) }}>
            <MapView
                style={{ height: '100%', width: '100%' }}
                initialRegion={dummyDB.region}
                mapType='standard'
                rotateEnabled={false}
                zoomEnabled={true}
                onRegionChangeComplete={(e) => { onRegionChange(e) }}
            >
                {items}
            </MapView>
            <Image style={{ position: 'absolute', top: StatusBar.currentHeight + py1, left: px1, width: px2 - px1, height: py2 - py1 }} resizeMode='contain' source={require('../../Asset/Asset1/yellow_tail_fish.png')} />

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