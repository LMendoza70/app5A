import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Boton from '../components/Boton'

const Pantalla2 = () => {
    const router = useRouter()
  return (
    <View>
      <Text>Pantalla2</Text>
      <Boton titulo='regresar' onPress={()=>{router.back()}}/>
    </View>
  )
}

export default Pantalla2

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})