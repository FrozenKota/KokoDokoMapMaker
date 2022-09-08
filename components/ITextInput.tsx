import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = (StatusBar.currentHeight? StatusBar.currentHeight : 0);
const HEIGHT = height - STATUSBAR_HEIGHT;

const ITextInput = (props: any) => {
    const {setFileNameHandler, closeStorageControlHandler} = props;
    const [text, onChangeText] = useState('');

    const okHandler = () => {
        setFileNameHandler(text);
    }

    const cancelHandler = () => {
        closeStorageControlHandler();
    }

    return(
        <View style={styles.mainContainer} >
            <View style={styles.inputContainer} >
                <View style={styles.titleLayout}>
                    <View style={styles.titleStyle}>
                        <Text style={styles.titleText}>ファイル名を入力</Text>
                    </View>
                </View>
                <View style={styles.inputLayout}>
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}> 
                    </TextInput>
                    <View style={styles.message}>
                        <Text style={{color: '#222222', fontSize: 15}}>※アンダーバー"_"は使用できません。</Text>
                    </View>
                    <View style={styles.buttonLayout}>
                        <TouchableOpacity onPress={cancelHandler} style={styles.Button}>
                            <Text style={styles.ButtonFont}>中断</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={okHandler} style={styles.Button}>
                            <Text style={styles.ButtonFont}>決定</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ITextInput;

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        flex: 1,
        height: HEIGHT,
        width: width,
        backgroundColor: 'black',
        opacity: 0.9,
    },
    inputContainer: {
        flexDirection: 'column',
        height: '30%',
        width: width,
        marginTop: '30%',
    },
    titleLayout: {
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: '#191970',
        opacity: 0.8,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    inputLayout: {
        flex: 0.8,
        flexDirection: 'column',
        backgroundColor: 'white',
        opacity: 0.9,
        width: width,
        justifyContent: 'space-around',

    },
    titleStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText:{
        color: 'white',
        fontSize: width/20,
    },
    buttonLayout: {
        flex: 1,
        flexDirection: 'row',
        height: '30%',
        width: width,
        background: 'yellow',

    },
    Button: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 12,
        width: '100%',
    },
    ButtonFont:{
        color: 'black',
        fontSize: width/18
    },
    input: {
        height: '30%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'black',
      },
    message: {
        marginLeft: 12,
        marginBottom: 12,
        color: 'blue'
    },
});