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
        const { latitude, latitudeDelta, longitude, longitudeDelta } = e;
        const cornerRegionTemp = {
            nw: {
                latitude: latitude - latitudeDelta / 2,
                longitude: longitude - longitudeDelta / 2,
            },
            ne: {
                latitude: latitude - latitudeDelta / 2,
                longitude: longitude + longitudeDelta / 2,
            },
            sw: {
                latitude: latitude + latitudeDelta / 2,
                longitude: longitude - longitudeDelta / 2,
            },
            se: {
                latitude: latitude + latitudeDelta / 2,
                longitude: longitude + longitudeDelta / 2,
            }
        }
        setCornerRegion(cornerRegionTemp);

        setRegion({
            latitude: e.latitude,
            latitudeDelta: e.latitudeDelta,
            longitude: e.longitude,
            longitudeDelta: e.longitudeDelta
        })
        const imgSize = 1; // latitude 10deg, longitude 10deg

        //setPx1((e.longitude - cornerRegionTemp.nw.longitude) * ((viewSize.width / e.longitudeDelta)));
        //setPy1((e.latitude - cornerRegionTemp.nw.latitude) * ((viewSize.height / e.latitudeDelta)));
        //setPx2((e.longitude - cornerRegionTemp.nw.longitude + imgSize) * ((viewSize.width / e.longitudeDelta)));
        //setPy2((e.latitude - cornerRegionTemp.nw.latitude + imgSize) * ((viewSize.height / e.latitudeDelta)));
        setPx1(((e.longitude - cornerRegionTemp.nw.longitude) * viewSize.width) / e.longitudeDelta);
        setPy1(((e.latitude - cornerRegionTemp.nw.latitude) * viewSize.height) / e.latitudeDelta);
        setPx2((e.longitude - cornerRegionTemp.nw.longitude + imgSize) * ((viewSize.width / e.longitudeDelta)));
        setPy2((e.latitude - cornerRegionTemp.nw.latitude + imgSize) * ((viewSize.height / e.latitudeDelta)));
        console.log('py1:', py1);
        console.log('px1:', px1);
        console.log('px2:', py2);
        console.log('py2:', px2);
        console.log('onReg:', e);
        console.log('cornerReg:', cornerRegionTemp);
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
        <Circle
            key={i += 1}
            center={{ latitude: cornerRegion.nw.latitude, longitude: cornerRegion.nw.longitude }}
            radius={20000}
            strokeWidth={2}
            strokeColor='#F00'
            fillColor='#0FF'
        />
    )
    items.push(
        <Circle
            key={i += 1}
            center={{ latitude: cornerRegion.ne.latitude, longitude: cornerRegion.ne.longitude }}
            radius={20000}
            strokeWidth={2}
            strokeColor='#F00'
            fillColor='#0FF'
        />
    )
    items.push(
        <Circle
            key={i += 1}
            center={{ latitude: cornerRegion.se.latitude, longitude: cornerRegion.se.longitude }}
            radius={20000}
            strokeWidth={2}
            strokeColor='#F00'
            fillColor='#0FF'
        />
    )
    items.push(
        <Circle
            key={i += 1}
            center={{ latitude: cornerRegion.sw.latitude, longitude: cornerRegion.sw.longitude }}
            radius={20000}
            strokeWidth={2}
            strokeColor='#F00'
            fillColor='#0FF'
        />
    )
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
            <Image style={{ position: 'absolute', top: StatusBar.currentHeight + py1, left: px1, width: 50, height: 50 }} resizeMode='contain' source={require('../../Asset/Asset1/yellow_tail_fish.png')} />
            <View style={{ position: 'absolute', top: StatusBar.currentHeight + py1, left: px1, height: 500, width: 10, backgroundColor: 'red' }}></View>

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