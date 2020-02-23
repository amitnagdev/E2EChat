import React, { Component } from 'react'
import {Text, TextInput, View} from "react-native";
import {CustomButton} from "./CustomButton";


export default class Login extends React.Component {

    render() {

        return (
            <View style={{backgroundColor: "rgba(0,0,0,1.0)", flex: 1, borderTopWidth: 60}}>
                    <Text style={{fontWeight: 'bold', color: "white", fontSize: 50, textAlign: 'center', textAlignVertical: 'center'}}>
                        Login
                    </Text>
                    <Text style={{color:'white', fontSize: 20, marginHorizontal: 60, marginTop: 40}}>Username</Text>
                    <TextInput style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60,}}
                        placeholder={" Enter username "}
                               placeholderTextColor={"grey"}
                    />
                    <Text style={{color:'white', fontSize: 20, marginHorizontal: 60, marginTop: 20}}>Password</Text>
                    <TextInput style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60}}
                               placeholder={" Enter password "}
                               placeholderTextColor={"grey"}
                    />
                    <CustomButton
                        title="Create Account"
                        onPress={() => null }
                        style={{borderWidth: 0, marginTop: 10}}
                        textStyle={{textDecorationLine: 'underline', fontSize: 18}}
                    />
                    <CustomButton
                        title="Login"
                        onPress={() => null}
                        style={{borderWidth: 1, marginTop:10}}
                        textStyle={{fontSize: 18}}
                     />

            </View>
        )
    }
}




