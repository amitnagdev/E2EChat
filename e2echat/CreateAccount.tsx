import React, { Component } from 'react'
import {Text, TextInput, View} from "react-native";
import {CustomButton} from "./CustomButton";

const CreatAccount = ({swapToPage}) => {

        return(
            <View style={{backgroundColor: "rgba(0,0,0,1.0)", flex: 1, borderTopWidth: 60}}>
                <Text style={{fontWeight: 'bold', color: "white", fontSize: 50, textAlign: 'center', textAlignVertical: 'center'}}>
                    Create Your Account
                </Text>
                <Text style={{color: 'white', fontSize: 20, marginHorizontal:60, marginTop:40}}>Create username</Text>
                <TextInput style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60,}}
                           placeholder={" Type username "}
                           placeholderTextColor={"grey"}
                />
                <Text style={{color: 'white', fontSize: 20, marginHorizontal:60, marginTop:40}}>Create Password</Text>
                <TextInput secureTextEntry={true} style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60,}}
                           placeholder={" Type password "}
                           placeholderTextColor={"grey"}
                />
                <Text style={{color: 'white', fontSize: 20, marginHorizontal:60, marginTop:40}}>Re-enter password</Text>
                <TextInput secureTextEntry={true} style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60,}}
                           placeholder={" Re-type password "}
                           placeholderTextColor={"grey"}
                />
                <CustomButton
                    title="Create Your Account"
                    onPress={() => null}
                    style={{borderWidth: 1, marginTop:30, marginHorizontal: 100}}
                    textStyle={{fontSize: 18}}
                />
            </View>
        )
}

export default CreatAccount;