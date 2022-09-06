import React, {memo, useState} from 'react';
import { StyleSheet, Dimensions, StatusBar, View, Text, TouchableOpacity, Image} from 'react-native';
//import { isArgumentsObject } from 'util/types';

const { width, height} = Dimensions.get('window');
const STATUSBAR_HEIGHT = (StatusBar.currentHeight? StatusBar.currentHeight : 0);
const HEIGHT = height - STATUSBAR_HEIGHT;


const TopAreaComponents = (props:any) => {
  const {fileName, closeHandler, saveData, closeSideBar} = props;
  console.log("TopAreaComponents");

  const InitLocationMenu = () => {
    return(
      <View style={styles.menuLayout}>
        <View style={{...styles.initMenu, backgroundColor: 'black'}}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: width/16}}>好きな場所へ移動して決定🐟</Text>
        </View>
      </View> 
    )
  }
  const InitDivNumMenu = () => {
    return(
      <View style={styles.menuLayout}>
        <View style={{...styles.menuButtons, backgroundColor: 'brown'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'darkblue',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={props.countup}
          >
            {/* Divide Button*/}
            <Image style={{resizeMode: 'contain', height: '90%', width: '90%'}} source={require('../../Asset/Buttons/Divide.png')} />
          </TouchableOpacity>
          <TouchableOpacity
          style={{
            flex:1,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
          }}
              onPress={props.countdown}>
            <Image style={{resizeMode: 'contain', height:'90%', width: '90%'}} source={require('../../Asset/Buttons/Combine.png')} />
          </TouchableOpacity>
        </View>
        <View style={{...styles.menuButtons, backgroundColor: 'black'}}><Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>分割数設定</Text></View>
      </View>
    )
  }
  const EditMapMode = () => {
    return(
      <View style={styles.menuLayout}>
        <TouchableOpacity style={styles.saveButton} onPress={()=>{saveData(),closeHandler()}}>
          <Text style={{color:'white', fontSize:(width*0.25)/5}}>SAVE &</Text>
          <Text style={{color:'white', fontSize:(width*0.25)/5}}>CLOSE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={saveData}>
          <Text style={{color:'white', fontSize:(width*0.25)/5}}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={closeSideBar}>
          <Text style={{color:'white', fontSize:(width*0.25)/5}}>メニュー</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if(props.initStatus.location){
    console.log("#init Location Mode")
    return(
      <><InitLocationMenu /></>
    )
  }else if(props.initStatus.divNum){
    console.log("#init DivNum Mode")
    return(
      <><InitDivNumMenu /></>
    )
  }else{
    console.log("#edit Map Mode")
    return (
      <><EditMapMode /></>
    )
  }
}

export default TopAreaComponents;

const styles = StyleSheet.create({
    // メニュー（戻る、保存など）
    menuLayout: {
      width: '100%',
      height: HEIGHT * 0.15,
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'row',
    },
    menuButtons: {
      flex: 1,
      height: '100%',
      borderRadius: 10,
      alignContent: 'center',
      justifyContent: 'center',
    },
    initMenu: {
      flex: 3,
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    saveButton: {
      flex: 1,
      height: '100%',
      color: 'white',
      borderColor: 'gray',
      borderWidth: 3,
      backgroundColor: 'darkblue',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 1,
    },
    closeButton: {
      flex: 1,
      height: '100%',
      color: 'white',
      borderColor: 'gray',
      borderWidth: 2,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 1,
    },
  });