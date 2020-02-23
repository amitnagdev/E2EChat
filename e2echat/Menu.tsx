import React from 'react'
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {Dimensions} from "react-native";
import MessagesPage from "./MessagesPage";
import NavBar, { NavTitle, NavButton } from 'react-native-nav'
import AddConvo from "./AddConvo";

let {width, height} = Dimensions.get("window");

const onAddConvo = ({swapToPage}) => {
    swapToPage(<AddConvo swapToPage={swapToPage}/>);
}

const MenuNavBar = ({swapToPage}) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#f5f5f5' }}>
            <NavBar>
                <NavButton style={{width: 40, height: 40}}>
                    <Image source={require('./media/storeiconlightmode.png')} style={{width: 40, height: 40}}/>
                </NavButton>
                <NavTitle style={{flex: 1}}>
                    Messages
                </NavTitle>
                <NavButton style={{width: 40, height: 40}} onPress={() => {onAddConvo({swapToPage})}}>
                    <Text style={{fontSize: 32}}>+</Text>
                </NavButton>
            </NavBar>
        </SafeAreaView>
    )
}

const MenuItem = ({item, swapToPage}) => {
    return (
        <TouchableOpacity style={{flex: 1, width: width, height: 100}} onPress={() => {swapToPage(<MessagesPage swapToPage={swapToPage} recipient={item}/>)}}>
            <View style={{justifyContent: 'center', flex: 98}}>
                <Text style={{fontSize: 32, color: 'white'}}>{item.name}</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'rgba(150,150,150,1.0)'}}/>
        </TouchableOpacity>
    );
};

const Menu = ({swapToPage}) => {
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
        <View style={{justifyContent: 'center', alignContent: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,1.0)'}}>
            <MenuNavBar swapToPage={swapToPage}/>
            <FlatList data={data} renderItem={({item}) => <MenuItem item={item} swapToPage={swapToPage}/>}/>
        </View>
    );
};

export default Menu;