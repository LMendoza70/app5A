import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const alumnos = () => {
  return (
    <View style={styles.container}>
      <Text>alumnos</Text>
    </View>
  )
}

export default alumnos

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})