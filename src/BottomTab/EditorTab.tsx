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
const STATUSBAR_HEIGHT = (Platform.OS === "android" && StatusBar.currentHeight !== undefined) ? StatusBar.currentHeight : 0;
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
    // const [px1, setPx1] = React.useState(0);
    // const [py1, setPy1] = React.useState(0);
    // const [px2, setPx2] = React.useState(0);
    // const [py2, setPy2] = React.useState(0);

    const items = [];
    const items_img: any = [];

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
        setRegion({
            latitude: e.latitude,
            latitudeDelta: e.latitudeDelta,
            longitude: e.longitude,
            longitudeDelta: e.longitudeDelta
        })

        const cornerRegionTemp = {
            North_lat: e.latitude + e.latitudeDelta / 2,
            East_log: e.longitude + e.longitudeDelta / 2,
            West_log: e.longitude - e.longitudeDelta / 2,
            South_lat: e.latitude - e.latitudeDelta / 2,
        }
        setCornerRegion(cornerRegionTemp);
    }

    const mapDataKeys = Object.keys(dummyDB.mapData);

    mapDataKeys.map((value, index, array) => {
        let imgLongitude = dummyDB.mapData[value].longitude;
        let imgLatitude = dummyDB.mapData[value].latitude;
        let imgRatio = dummyDB.mapData[value].imgRatio;

        let imgLongitudeDelta = imgLongitude - cornerRegion.West_log;
        if (imgLongitudeDelta < 0) {
            imgLongitudeDelta += 360;
        }

        let px1 = viewSize.width * imgLongitudeDelta / region.longitudeDelta;
        let py1 = viewSize.height * Math.abs(imgLatitude - cornerRegion.North_lat) / region.latitudeDelta;
        let px2 = viewSize.width * (Math.abs(imgLongitude - cornerRegion.West_log) + imgRatio) / region.longitudeDelta;
        let py2 = viewSize.height * (Math.abs(imgLatitude - cornerRegion.North_lat) + imgRatio) / region.latitudeDelta;

        //if (dummyDB.mapData[value].longitude <= cornerRegion.East_log) {
        items_img.push(
            <Image
                key={value}
                style={{
                    position: 'absolute',
                    top: STATUSBAR_HEIGHT + py1,
                    left: px1,
                    width: px2 - px1,
                    height: py2 - py1
                }}
                resizeMode='contain'
                source={images['yellow_tail_fish']}
            />
        )
        //}
    })

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
            </MapView>
            {items_img}
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