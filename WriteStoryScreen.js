import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();   
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 30, backgroundColor: 'cyan'}}>Story Hub Part 1</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputBox}
                    placeholder="Title of the Story"/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputBox}
                    placeholder="Author of the Story"/>
                </View>
                
                    <TextInput
                    style={styles.storyBox}
                    placeholder="Write Your Story Here"/>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    },
    inputView: {
        flexDirection: 'row',
        margin: 20
    },
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 25,
        backgroundColor: 'white'
    },
    storyBox:{
        width: 200,
        height: 200,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 15,
        backgroundColor: 'lightgreen'
    }
})