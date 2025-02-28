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
        backgroundColor: '#EDE0D4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },titulo:{
        fontSize: 24,
        color: "#4B2E1E",
        textAlign: 'center',
        marginBottom: 16
    },subtitulo:{
        fontSize: 18,
        color: "#4B2E1E",
        margin:16
    },cajas:{
        margin: 16,
        padding: 8,
        backgroundColor: "#EDE0D4",
        borderRadius: 8,
        color: "#4B2E1E",
        borderWidth:2,
        borderColor: "#4B2E1E"
    }

})