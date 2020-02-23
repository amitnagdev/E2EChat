import React from 'react'
import {FlatList, Text, View} from 'react-native'
import {Dimensions} from "react-native";

let {width, height} = Dimensions.get("window");

const MenuItem = ({item}) => {

    return (
        <View style={{flex: 1, width: width, height: 100}}>
            <View style={{flex: 1, backgroundColor: 'rgba(50,50,50,1.0)'}}/>
            <View style={{justifyContent: 'center', flex: 98}}>
                <Text style={{fontSize: 32}}>{item.name}</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'rgba(50,50,50,1.0)'}}/>
        </View>
    );
};

const Menu = ({item}) => {
    const data = [
        {
            name: 'Xavi',
        },
        {
            name: 'Matthew'
        },
        {
            name: 'Elena'
        },
        {
            name: 'Marco'
        },
    ];

    return (
        <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
            <FlatList data={data} renderItem={({item}) => <MenuItem item={item}/>}/>
        </View>
    );
};

export default Menu;