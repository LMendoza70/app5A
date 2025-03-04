import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Link href={'../'}>
        regresar a la navegacion simple
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})