import React, {Component, useState} from 'react'
import {Text, TextInput, View} from "react-native";
import {CustomButton} from "./CustomButton";
import CreatAccount from "./CreateAccount";

const AppStore = ({swapToPage}) => {

    return(
        <View style={{backgroundColor: "rgba(0,0,0,1.0)", flex: 1, borderTopWidth: 60}}>
            <Text style={{fontWeight: 'bold', color: "white", fontSize: 50, textAlign: 'center', textAlignVertical: 'center'}}>AppStore</Text>
            <CustomButton
                title="Icon to be placed here"
                onPress={() => null }
                style={{borderWidth: 1, marginTop: 30, height: 90, width: 90, marginLeft: 30}}
                textStyle={{fontSize: 18}}
            />
            <Text style={{color: 'white', fontSize: 20, marginLeft: 20, marginTop:10}}>Emoji Pack 1</Text>
        </View>
    )
};
export default AppStore;