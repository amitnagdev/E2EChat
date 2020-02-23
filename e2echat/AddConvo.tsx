import React from "react";
import {TextInput, View, Dimensions, Text, TouchableOpacity} from "react-native";
import {CustomButton} from "./CustomButton";
import MessagesPage from "./MessagesPage";

let {width, height} = Dimensions.get('window');

const AddConvo = ({swapToPage}) => {

    let newName = "Juliana"

    const onTextChange = (text) => {
        newName = text;
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,1.0)'}}>
            <View style={{flex: 1}}/>
            <TextInput style={{height: 60, width: width * 0.85, borderBottomColor: 'white', fontSize: 32, borderWidth: 1, color: "white", marginHorizontal: 60,}}
                       placeholder={"Enter name"}
                       placeholderTextColor={"grey"}
                       onChangeText={text => {onTextChange(text)}}
            />
            <TouchableOpacity onPress={() => {swapToPage(<MessagesPage swapToPage={swapToPage} recipient={{name: newName}}/>)}} style={{display: 'flex',
                height: 40,
                width: width * 0.85,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                borderColor: 'white',
                borderWidth: 1,
                marginTop: 30}}>
                <Text style={{fontSize: 24, color: 'white'}}>Done</Text>
            </TouchableOpacity>
            <View style={{flex: 3}}/>
        </View>
    );
};

export default AddConvo;