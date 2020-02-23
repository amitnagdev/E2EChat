import React, {Component, useState} from 'react'
import {Text, TextInput, View} from "react-native";
import {CustomButton} from "./CustomButton";
import MessagesPage from "./MessagesPage";
import CreatAccount from "./CreateAccount";


const Login = ({swapToPage}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
            <View style={{backgroundColor: "rgba(0,0,0,1.0)", flex: 1, borderTopWidth: 60}}>
                    <Text style={{fontWeight: 'bold', color: "white", fontSize: 50, textAlign: 'center', textAlignVertical: 'center'}}>
                        Login
                    </Text>
                    <Text style={{color:'white', fontSize: 20, marginHorizontal: 60, marginTop: 40}}>Username</Text>
                    <TextInput style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60}}
                        placeholder={" Enter username "}
                        placeholderTextColor={"grey"}
                        onChangeText={(username)=>setUsername(username)}
                    />
                    <Text style={{color:'white', fontSize: 20, marginHorizontal: 60, marginTop: 20}}>Password</Text>
                    <TextInput secureTextEntry={true} style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60}}
                               placeholder={" Enter password "}
                               placeholderTextColor={"grey"}
                               onChangeText={(password)=>setPassword(password)}
                    />
                    <CustomButton
                        title="Create Account"
                        onPress={() => {swapToPage(<CreatAccount swapToPage={swapToPage}/>)} }
                        style={{borderWidth: 0, marginTop: 10}}
                        textStyle={{textDecorationLine: 'underline', fontSize: 18}}
                    />
                    <CustomButton
                        title="Login"
                        onPress={() => {swapToPage(<MessagesPage swapToPage={swapToPage}/>)}}
                        style={{borderWidth: 1, marginTop:10, marginHorizontal: 140}}
                        textStyle={{fontSize: 18}}
                     />

            </View>
    );
};

export default Login;




