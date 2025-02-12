import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Login</Text>
      <Text style={styles.subtitulo}>Usuario</Text>
      <TextInput placeholder='Usuario' style={styles.cajas} />
      <Text style={styles.subtitulo} >Contraseña</Text>
      <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.cajas}/>
      <Button title='Iniciar sesión' 
      onPress={() => console.log('Iniciar sesión')} 
      color={'#3F704D'}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        backgroundColor: coffeePalette.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },titulo:{
        fontSize: 24,
        color: coffeePalette.primary,
        textAlign: 'center',
        marginBottom: 16
    },subtitulo:{
        fontSize: 18,
        color: coffeePalette.primary,
        margin:16
    },cajas:{
        margin: 16,
        padding: 8,
        backgroundColor: coffeePalette.secondary,
        borderRadius: 8,
        color: coffeePalette.primary,
        borderWidth:2,
        borderColor: coffeePalette.primary
    }

})