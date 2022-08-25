import React from 'react';
import {View, StyleSheet, ScrollView, Image, Text, Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

const Description = (props: any) => {
    const {closeHandler} = props;
    let hoge:any = [];

    for(let i=0; i<50; i++){
        hoge.push(<Text key={i} style={{fontSize: (width/5)*(i/50), color: 'white'}}>説明書　作成中</Text>)
    }

    const CloseButton = () => {
        return (
            <TouchableOpacity>

            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.mainLayout} >
                <ScrollView>
                    {hoge}
                </ScrollView>         
            </View>
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
        top: '0%',
        marginTop: '0%',
        height: '100%',
        width: '100%',
    },
    h1: {
        fontSize: width/10,
        color: 'white',
    },
    h2: {
        fontSize: width/15,
        color: 'white',
    },
    h3: {
        fontSize: width/20,
        color: 'white',
    },
})