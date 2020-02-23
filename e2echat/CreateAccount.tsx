import React, { Component } from 'react'
import {Text, TextInput, View} from "react-native";
import {CustomButton} from "./CustomButton";

export default class CreatAccount extends React.Component {

    render() {
        return(
            <View style={{backgroundColor: "rgba(0,0,0,1.0)", flex: 1, borderTopWidth: 60}}>
                <Text style={{fontWeight: 'bold', color: "white", fontSize: 50, textAlign: 'center', textAlignVertical: 'center'}}>
                    Creat Your Account
                </Text>
            </View>
        )
    }
}