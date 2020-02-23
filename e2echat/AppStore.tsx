import React, {Component, useState} from 'react'
import {Text, TextInput, View, Image, TouchableOpacity} from "react-native";
import {CustomButton} from "./CustomButton";
import Menu from "./Menu";

const AppStore = ({swapToPage}) => {

    return (
        <View style={{backgroundColor: "rgba(0,0,0,1.0)", flex: 1, borderTopWidth: 60}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{flex: 1, width: 50, height: 50}} onPress={() => {swapToPage(<Menu swapToPage={swapToPage}/>)}}>
                    <Image source={require('./media/backbutton-darkmode.png')} style={{width: 50, height: 50}}/>
                </TouchableOpacity>
                <Text style={{flex: 3, fontWeight: 'bold', color: "white", fontSize: 50, textAlign: 'center', textAlignVertical: 'center'}}>AppStore</Text>
                <View style={{flex: 1, width: 50, height: 50}}/>
            </View>
            <CustomButton
                title="Icon to be placed here"
                onPress={() => null }
                style={{borderWidth: 1, marginTop: 30, height: 90, width: 90, marginLeft: 30}}
                textStyle={{fontSize: 18}}
            />
            <Text style={{color: 'white', fontSize: 20, marginLeft: 30, marginTop:10}}>Emoji Pack 1</Text>
        </View>
    )
};
export default AppStore;