import React, {useState, memo} from 'react';
import {Dimensions, StatusBar, StyleSheet, View, Text, ScrollView, TouchableOpacity, Switch} from 'react-native';

const { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = (StatusBar.currentHeight? StatusBar.currentHeight : 0);
const HEIGHT = height - STATUSBAR_HEIGHT;


const SideBar = memo((props:any) => {
    const {closeMapEditorHandler, toggleGridLineIsOpen, gridLineIsOpen, toggleSelectedLayer, selectedLayerIs} = props;

    const [isEnabled, setIsEnabled]  = useState(true);
    const toggleSwitch = () => {
        toggleGridLineIsOpen();
    }
    const MySwitch = () => {
        return(
            <View>
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#0000ff" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch1}
                />
            </View>
        )
    }

    return (
        <View style={styles.sideBarContainer}>
            <TouchableOpacity style={styles.closeButtonArea} onPress={closeMapEditorHandler}>
                <Text style={styles.closeButtonText}>Save & Close</Text>
            </TouchableOpacity>

            <View style={styles.contentAreaLayout}>
                <ScrollView>
                    <Text style={styles.contentTitle}>グリッド表示</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#0000ff" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={gridLineIsOpen}
                        style={styles.switch1}
                    />
                    <Text style={styles.contentTitle}>下地レイヤ編集</Text>
                    <Text>実装予定</Text>

                    {false && (
                    <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#0000ff" : "#f4f3f4"}
                    onValueChange={toggleSelectedLayer}
                    value={selectedLayerIs==1 ? false : true}
                    style={styles.switch1}
                />
                    )}
                </ScrollView>
            </View>
        </View>
    )
})



export default SideBar;

const styles = StyleSheet.create({
    sideBarContainer: {
        position: 'absolute',
        alignItems: 'center',
        //justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        height: HEIGHT * 0.85,
        width: '60%',
        top: HEIGHT * 0.15,
        backgroundColor: 'black',
        opacity: 0.8
    },
    closeButtonArea: {
        flex: 0.1,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    contentAreaLayout: {
        flex: 0.9,
        width: '95%',
        marginVertical: 10,
        //backgroundColor: 'darkblue',
    },
    closeButtonText: {
        color: 'white',
        fontSize: width/15,
    },
    contentTitle: {
        color: 'white',
        alignSelf: 'center',
        marginBottom: 10,
        fontSize: width/20,
    },
    switch1: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
        alignSelf: 'center',
    }
})