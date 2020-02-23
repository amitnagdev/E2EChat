import React, {Component, useState} from 'react'
import {Text, TextInput, View, FlatList, Image, TouchableOpacity} from "react-native";
import {CustomButton} from "./CustomButton";

const RenderBox = ({pic}) => {
   let directories = [
       require("./media/emojis/glassesemoji.png"),
       require("./media/emojis/hearteyesemoji.png"),
       require("./media/emojis/rollingeyesemojifinal.png"),
       require("./media/emojis/scaredemoji.png"),
       require("./media/emojis/tongueemoji.png"),
   ]
    return(
      <View style={{backgroundColor:"blue", height: 100, width: 100, borderWidth: 1, borderColor: 'white'}}>
          <TouchableOpacity onPress={null}>
             <Image source={directories[pic]} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
      </View>
    );

};

const EmojiMenu = ({swapToPage}) => {
    const data = [0,1,2,3,4];
    return(
        <View style={{backgroundColor: "rgba(0,0,0,1.0)", flex: 1, borderTopWidth: 60}}>
            <Text style={{fontWeight: 'bold', color: "white", fontSize: 50, textAlign: 'center', textAlignVertical: 'center'}}>Emoji Menu</Text>
            <FlatList data={data} renderItem={({item}) => <RenderBox pic={item}/>} scrollEnabled={false} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}></FlatList>

        </View>
    )
};
export default EmojiMenu;