import React from 'react'
import {FlatList, Text, View} from 'react-native'

const MenuItem = ({item}) => {

};

const Menu = (item) => {
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
            {/*<FlatList data={data} renderItem={({item}) => <MenuItem item={item}/>}/>*/}
        </View>
    );
};

export default Menu;