import React from 'react';
import {View, StyleSheet, ScrollView, Image, Text, Dimensions, TouchableOpacity, StatusBar} from 'react-native';
const { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = (StatusBar.currentHeight? StatusBar.currentHeight : 0);
const HEIGHT = height - STATUSBAR_HEIGHT;

const Description = (props: any) => {
    const {closeHandler} = props;

    const CloseButton = () => {
        return (
            <TouchableOpacity style={styles.closeBtn} onPress={()=>{closeHandler()}}>
                <Text style={{fontSize: width*0.06, color: 'white'}}>✕</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.mainLayout} >
            {/* copy and paste from here ****************************** */}

            <ScrollView> 
                <Text style={styles.h1} >使 い 方</ Text>
                <Text> </Text>
                <Text style={styles.h2} >１．セーブデータの作成</ Text>
                <Image style={{width: width,height:367*(width/500)}} source={require('../Asset/HowToUse/1_0_createData.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >「はじめる」をタップします</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Image style={{width: width,height:399*(width/500)}} source={require('../Asset/HowToUse/1_1_inputFileName.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >ファイル名を入力し、「決定」をタップします</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text style={styles.h2} >２．場所を選択</ Text>
                <Image style={{width: width,height:847*(width/500)}} source={require('../Asset/HowToUse/2_1_selectPlace.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >地図を動かし、場所を選択します</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Image style={{width: width,height:261*(width/500)}} source={require('../Asset/HowToUse/2_2_selectPlace.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >「決定」をタップします</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text style={styles.h2} >３．下地レイヤの編集</ Text>
                <Image style={{width: width,height:479*(width/500)}} source={require('../Asset/HowToUse/3_1_editBottomLayer.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >土、海などの下地レイヤを編集します。</ Text>
                <Text style={styles.h3} >「メニュー」をタップしサイドバーを開きます</ Text>
                <Text style={styles.h3} >次に、「下地レイヤ編集」を有効にします</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Image style={{width: width,height:800*(width/500)}} source={require('../Asset/HowToUse/3_2_choseImage.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >「素材」を選択すると素材一覧が開きます</ Text>
                <Text style={styles.h3} >好きな素材を選択します</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Image style={{width: width,height:829*(width/500)}} source={require('../Asset/HowToUse/3_3_placeMaterial.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >画面下に並ぶボタンを使用して画像を配置します</ Text>
                <Text style={styles.h3} >「＋」・・・画像を追加</ Text>
                <Text style={styles.h3} >「ー」・・・画像を削除</ Text>
                <Text style={styles.h3} >「←」・・・左へ移動</ Text>
                <Text style={styles.h3} >「↑」・・・上へ移動</ Text>
                <Text style={styles.h3} >「→」・・・右へ移動</ Text>
                <Text style={styles.h3} >「↓」・・・下へ移動</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text style={styles.h2} >４．上地レイヤの編集</ Text>
                <Image style={{width: width,height:268*(width/500)}} source={require('../Asset/HowToUse/4_1_editTopLayer.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >「下地レイヤ編集」を無効にします</ Text>
                <Text style={styles.h3} >下地レイヤと同様に素材を選択して配置します</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Image style={{width: width,height:709*(width/500)}} source={require('../Asset/HowToUse/4_2_editTopLayer.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >このように、下地レイヤに重ねて配置できます</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text style={styles.h2} >５．データの確認</ Text>
                <Image style={{width: width,height:226*(width/500)}} source={require('../Asset/HowToUse/5_1_checkWork.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >グリッド線を非表示にして作品を確認しましょう</ Text>
                <Text style={styles.h3} >「メニュー」から「グリッド表示」を無効にします。</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text style={styles.h2} >６．スクリーンショット</ Text>
                <Image style={{width: width,height:709*(width/500)}} source={require('../Asset/HowToUse/6_1_checkWork.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >スクリーンショットで作品を撮影して、SNSでシェアしてくださると嬉しいです。私も作品を見てみたいです。</ Text>
                <Text style={styles.h3} >※SNSへの共有機能を実装予定です。</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text style={styles.h2} >７．セーブ</ Text>
                <Image style={{width: width,height:197*(width/500)}} source={require('../Asset/HowToUse/7_saveData.jpg')} resizeMode='contain' />
                <Text style={styles.h3} >「セーブ」または「セーブ&クローズ」でデータを保存します</ Text>
                <Text style={styles.h3} >作品を作りながらのこまめな「セーブ」をオススメします。</ Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                </ScrollView>

            </View>
            <CloseButton />
        </View>
    )
}

export default Description;

const styles = StyleSheet.create({
    mainContainer:{
        position: 'absolute',
        height: '90%',
        width: width,
        backgroundColor: 'black',
        opacity: 0.91,
    },
    mainLayout: {
        height: '95%',
        top: '5%',
        width: '100%',
        paddingLeft: 0,
        paddingRight:0,

    },
    h1: {
        fontSize: width/10,
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',

    },
    h2: {
        fontSize: width/15,
        color: 'white',
    },
    h3: {
        fontSize: width/20,
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    closeBtn: {
        position: 'absolute',
        height: HEIGHT * 0.06,
        width: HEIGHT * 0.06,
        top: 10,
        left: width - (HEIGHT * 0.07),
        backgroundColor: 'darkred',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
    }
})