import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>
      
      <Link href={'./screens/Calculadora1'}>
        Practica Calculadora...
      </Link>
      <Link href={'./(stack)/'}>
        pasa de navegacion simple a stack
      </Link>
      <Link href={'./(tabs)/'}>
        pasa de navegacion simple a tabs
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})