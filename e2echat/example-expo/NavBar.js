import React from 'react'
import { Text, Platform, SafeAreaView, View, Image } from 'react-native'
import NavBar, { NavTitle, NavButton } from 'react-native-nav'
import Constants from 'expo-constants'
import Menu from '../Menu'

export default function NavBarCustom({swapToPage, title}) {
  if (Platform.OS === 'web') {
    return null
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#f5f5f5' }}>
      <NavBar>
        <NavButton style={{}} onPress={() => {swapToPage(<Menu swapToPage={swapToPage}/>)}}>
          <Image source={require('../media/menu_button_take_2.png')}
          style={{width: 40, height: 40}}/>
        </NavButton>
        <NavTitle style={{flex: 1}}>
          {title}{'\n'}
          <Text style={{ fontSize: 10, color: '#aaa' }}>
            ({Constants.expoVersion})
          </Text>
        </NavTitle>
        <View style={{width:40, height: 40}}/>
      </NavBar>
    </SafeAreaView>
  )
}
