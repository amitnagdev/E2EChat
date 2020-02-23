import React, {Component, useState} from 'react'
import {Text, TextInput, View, Alert} from "react-native";
import {CustomButton} from "./CustomButton";

const CreatAccount = ({swapToPage}) => {
        const [username, setUsername] = useState('')
        const [password1, setPassword1] = useState('')
        const [password2, setPassword2] = useState('')
        const checkPasswords = (password1, password2) =>{
                if(password1 === password2){
                        (async () => {
                                let accountCreationStatus = await fetch('http://3.18.223.203:8080/signup', {
                                        method: 'POST',
                                        headers: {
                                                'Content-Type': 'application/json'
                                                // 'Content-Type': 'application/x-www-form-urlencoded',
                                        },
                                        body: JSON.stringify({"username": username, "password": password1}),
                                });
                                if (accountCreationStatus !== 'success') {
                                        // TODO create an alert that forces user to try again becuase username is taken
                                }
                        });
                }
                else{
                        Alert.alert(
                            'Error',
                            'Passwords do not match',
                            [
                                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                        );
                }
        }

        return(
            <View style={{backgroundColor: "rgba(0,0,0,1.0)", flex: 1, borderTopWidth: 60}}>
                <Text style={{fontWeight: 'bold', color: "white", fontSize: 50, textAlign: 'center', textAlignVertical: 'center'}}>
                    Create Your Account
                </Text>
                <Text style={{color: 'white', fontSize: 20, marginHorizontal:60, marginTop:40}}>Create username</Text>
                <TextInput style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60,}}
                           placeholder={" Type username "}
                           placeholderTextColor={"grey"}
                           onChangeText={(username)=>setUsername(username)}
                />
                <Text style={{color: 'white', fontSize: 20, marginHorizontal:60, marginTop:40}}>Create Password</Text>
                <TextInput secureTextEntry={true} style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60,}}
                           placeholder={" Type password "}
                           placeholderTextColor={"grey"}
                           onChangeText={(password1)=>setPassword1(password1)}
                />
                <Text style={{color: 'white', fontSize: 20, marginHorizontal:60, marginTop:40}}>Re-enter password</Text>
                <TextInput secureTextEntry={true} style={{height: 40, borderBottomColor: 'white', borderWidth: 1, color: "white", marginHorizontal: 60,}}
                           placeholder={" Re-type password "}
                           placeholderTextColor={"grey"}
                           onChangeText={(password2)=>setPassword2(password2)}
                />
                <CustomButton
                    title="Create Your Account"
                    onPress={() => checkPasswords(password1, password2)}
                    style={{borderWidth: 1, marginTop:30, marginHorizontal: 100}}
                    textStyle={{fontSize: 18}}
                />
            </View>
        )
}

export default CreatAccount;