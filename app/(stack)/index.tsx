import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
      <Text>index de la navegacion stack</Text>
      <Link href={'../(stack)/Pantalla2'}>
        Pantalla 2 del stack
      </Link>
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