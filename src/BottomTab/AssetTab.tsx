import React, { ReactNode, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
    Dimensions,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Header from '../Common/Header';
import Images from '../../Asset/asset';

const { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = (StatusBar.currentHeight ? StatusBar.currentHeight : 0);
const HEIGHT = height - STATUSBAR_HEIGHT;

const AssetTab: React.FC = () => {
    const navigation = useNavigation();
    const right: ReactNode = useMemo(() => {
        return (
            <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => {
                    navigation.goBack();
                }}>
                <Text>戻る🐬</Text>
            </TouchableOpacity>
        )
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            {false && (<Header title="素材一覧" right={right} />)}
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#FFCCCC',
                }}>
                <AssetWindow />
            </View>
        </SafeAreaView>
    );
}
const AssetWindow = (props: any) => {
    const data: any = [];
    const COL_ASSET_NUM = 6;
    const rowNum = 6;
    const IMG_KEYS: any = Object.keys(Images);

    for (let i = 0; i < IMG_KEYS.length / COL_ASSET_NUM; i += 1) {
        data.push(
            <View key={i * 2 + 1} style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: width / rowNum, height: width / rowNum }} onPress={() => { console.log(IMG_KEYS[i * COL_ASSET_NUM + 0]) }}>
                    <Image
                        style={{ width: width / rowNum, height: width / rowNum }}
                        resizeMode='contain'
                        source={Images[IMG_KEYS[i * COL_ASSET_NUM + 0]]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: width / rowNum, height: width / rowNum }} onPress={() => { console.log(IMG_KEYS[i * COL_ASSET_NUM + 1]) }}>
                    <Image
                        style={{ width: width / rowNum, height: width / rowNum }}
                        resizeMode='contain'
                        source={Images[IMG_KEYS[i * COL_ASSET_NUM + 1]]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: width / rowNum, height: width / rowNum }} onPress={() => { console.log(IMG_KEYS[i * COL_ASSET_NUM + 2]) }}>
                    <Image
                        style={{ width: width / rowNum, height: width / rowNum }}
                        resizeMode='contain'
                        source={Images[IMG_KEYS[i * COL_ASSET_NUM + 2]]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: width / rowNum, height: width / rowNum }} onPress={() => { console.log(IMG_KEYS[i * COL_ASSET_NUM + 3]) }}>
                    <Image
                        style={{ width: width / rowNum, height: width / rowNum }}
                        resizeMode='contain'
                        source={Images[IMG_KEYS[i * COL_ASSET_NUM + 3]]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: width / rowNum, height: width / rowNum }} onPress={() => { console.log(IMG_KEYS[i * COL_ASSET_NUM + 4]) }}>
                    <Image
                        style={{ width: width / rowNum, height: width / rowNum }}
                        resizeMode='contain'
                        source={Images[IMG_KEYS[i * COL_ASSET_NUM + 4]]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: width / rowNum, height: width / rowNum }} onPress={() => { console.log(IMG_KEYS[i * COL_ASSET_NUM + 5]) }}>
                    <Image
                        style={{ width: width / rowNum, height: width / rowNum }}
                        resizeMode='contain'
                        source={Images[IMG_KEYS[i * COL_ASSET_NUM + 5]]}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.assetView}>
            <ScrollView>
                {data}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00F",
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    assetView: {
        position: 'absolute',
        paddingTop: 0,
        height: '100%',
        width: width,
        opacity: 0.9,
        backgroundColor: 'black',
    }
});

export default AssetTab;