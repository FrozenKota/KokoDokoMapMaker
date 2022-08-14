import React from 'react';
import Images from '../Asset/asset';
import { Dimensions, StatusBar, StyleSheet, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import MyAdmob from '../components/MyAdmob'

const { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = (StatusBar.currentHeight? StatusBar.currentHeight : 0);
const HEIGHT = height - STATUSBAR_HEIGHT;


const AssetWindow = (props :any) => {
    const data:any = [];
    const COL_ASSET_NUM = 6;

    const {closeAssetHandler, rowNum} = props;
    const IMG_KEYS: any = Object.keys(Images);

    for(let i = 0; i < IMG_KEYS.length/COL_ASSET_NUM; i+=1){
        console.log(i%6);
        if((i%6) === 0)
            data.push(
                <View key={i*2+0}>
                    <MyAdmob />
                </View>
            )
        
        data.push(
            <View key={i*2+1} style={{flex:1, flexDirection: 'row'}}>
                <TouchableOpacity  style={{width: width/rowNum, height: width/rowNum}} onPress={() => closeAssetHandler(IMG_KEYS[i*COL_ASSET_NUM+0])}>
                    <Image
                    style={{width: width/rowNum, height: width/rowNum}}
                    resizeMode='contain'
                    source={Images[IMG_KEYS[i*COL_ASSET_NUM+0] ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{width: width/rowNum, height: width/rowNum}} onPress={() => closeAssetHandler(IMG_KEYS[i*COL_ASSET_NUM+1])}>
                    <Image
                    style={{width: width/rowNum, height:width/rowNum}}
                    resizeMode='contain'
                    source={Images[IMG_KEYS[i*COL_ASSET_NUM+1] ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{width: width/rowNum, height: width/rowNum}} onPress={() => closeAssetHandler(IMG_KEYS[i*COL_ASSET_NUM+2])}>
                    <Image
                    style={{width: width/rowNum, height:width/rowNum}}
                    resizeMode='contain'
                    source={Images[IMG_KEYS[i*COL_ASSET_NUM+2] ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{width: width/rowNum, height: width/rowNum}} onPress={() => closeAssetHandler(IMG_KEYS[i*COL_ASSET_NUM+3])}>
                    <Image
                    style={{width: width/rowNum, height:width/rowNum}}
                    resizeMode='contain'
                    source={Images[IMG_KEYS[i*COL_ASSET_NUM+3] ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{width: width/rowNum, height: width/rowNum}} onPress={() => closeAssetHandler(IMG_KEYS[i*COL_ASSET_NUM+4])}>
                    <Image
                    style={{width: width/rowNum, height:width/rowNum}}
                    resizeMode='contain'
                    source={Images[IMG_KEYS[i*COL_ASSET_NUM+4] ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{width: width/rowNum, height: width/rowNum}} onPress={() => closeAssetHandler(IMG_KEYS[i*COL_ASSET_NUM+5])}>
                    <Image
                    style={{width: width/rowNum, height:width/rowNum}}
                    resizeMode='contain'
                    source={Images[IMG_KEYS[i*COL_ASSET_NUM+5] ]}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={styles.assetView}>
            <ScrollView>
                {data}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    assetView: {
        position: 'absolute',
        top: height*0.15,
        height: height*0.7,
        width: width,
        opacity: 0.9,
        backgroundColor: 'black',  
    }
})

export default AssetWindow;