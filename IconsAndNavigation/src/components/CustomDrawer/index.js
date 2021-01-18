import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomerDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        width: '100%',
        height: 77,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
      }}>
        <Image
          source={require('../../assets/profile.png')}
          style={{ width: 65, height: 65 }}
        />
        <Text style={{ color: '#000', fontSize: 17, marginTop: 5, marginBottom: 25 }}>Bem Vindo</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({})
