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
import images from '../../Asset/asset';

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
    const [cornerRegion, setCornerRegion] = React.useState({
        North_lat: 0,
        East_log: 0,
        West_log: 0,
        South_lat: 0
    })
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
            North_lat: e.latitude + e.latitudeDelta / 2,
            East_log: e.longitude + e.longitudeDelta / 2,
            West_log: e.longitude - e.longitudeDelta / 2,
            South_lat: e.latitude - e.latitudeDelta / 2,
        }
        setCornerRegion(cornerRegionTemp);

        setRegion({
            latitude: e.latitude,
            latitudeDelta: e.latitudeDelta,
            longitude: e.longitude,
            longitudeDelta: e.longitudeDelta
        })
        const imgSize = 0.05; // latitude 10deg, longitude 10deg
        const imgLongitude = 139.6191623993218;
        const imgLatitude = 35.13401895914322;

        setPx1(viewSize.width * Math.abs(imgLongitude - cornerRegionTemp.West_log) / e.longitudeDelta);
        setPy1(viewSize.height * Math.abs(imgLatitude - cornerRegionTemp.North_lat) / e.latitudeDelta);
        setPx2(viewSize.width * (Math.abs(imgLongitude - cornerRegionTemp.West_log) + imgSize) / e.longitudeDelta);
        setPy2(viewSize.height * (Math.abs(imgLatitude - cornerRegionTemp.North_lat) + imgSize) / e.latitudeDelta);
    }

    let i;
    i = 100;
    items.push(
        <Polyline
            key={i += 1}
            coordinates={[
                { latitude: 0, longitude: 179.99 },
                { latitude: 0, longitude: 0 },
                { latitude: 0, longitude: -179.99 }
            ]}
            strokeColor="#F00" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
                '#000000',
                '#000000',
                '#000000',
            ]}
            strokeWidth={3}
        />
    )
    items.push(
        <Polyline
            key={i += 1}
            coordinates={[
                { latitude: 89.99, longitude: 0 },
                { latitude: 0, longitude: 0 },
                { latitude: -89.99, longitude: 0 }
            ]}
            strokeColor="#F00" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
                '#000000',
                '#000000',
                '#000000',
            ]}
            strokeWidth={3}
        />
    )
    items.push(
        <Polyline
            key={i += 1}
            coordinates={[
                { latitude: 89.99, longitude: 90 },
                { latitude: 0, longitude: 90 },
                { latitude: -89.99, longitude: 90 }
            ]}
            strokeColor="#F00" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
                '#000000',
                '#000000',
                '#000000',
            ]}
            strokeWidth={3}
        />
    )
    items.push(
        <Polyline
            key={i += 1}
            coordinates={[
                { latitude: 89.99, longitude: -90 },
                { latitude: 0, longitude: -90 },
                { latitude: -89.99, longitude: -90 }
            ]}
            strokeColor="#F00" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
                '#000000',
                '#000000',
                '#000000',
            ]}
            strokeWidth={3}
        />
    )

    items.push(
        <Polyline
            key={i += 1}
            coordinates={[
                { latitude: 89.99, longitude: 180 },
                { latitude: 0, longitude: 180 },
                { latitude: -89.99, longitude: 180 }
            ]}
            strokeColor="#F00" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
                '#000000',
                '#000000',
                '#000000',
            ]}
            strokeWidth={3}
        />
    )
    items.push(
        <Polyline
            key={i += 1}
            coordinates={[
                { latitude: cornerRegion.North_lat, longitude: cornerRegion.West_log },
                { latitude: cornerRegion.South_lat, longitude: cornerRegion.East_log },
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
                { latitude: cornerRegion.North_lat, longitude: cornerRegion.East_log },
                { latitude: cornerRegion.South_lat, longitude: cornerRegion.West_log },
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
            <Image style={{ position: 'absolute', top: StatusBar.currentHeight + py1, left: px1, width: px2 - px1, height: py2 - py1 }} resizeMode='contain' source={images['white_solt_water3']} />

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
                    key={i + 10}
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