import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type props={
    label:string,
    icono:React.ReactNode,
    color?:string,
    onChangeText:(valor:string)=>void,
}

const Caja = (Props:props) => {
  return (
    <View style={[styles.container,{borderBottomColor:Props.color}]}>
      <Text style={{color:Props.color}} >{Props.label}</Text>
      <View style={styles.caja}>
        {Props.icono}
        <TextInput placeholder={Props.label} style={{color:Props.color}} 
        onChangeText={Props.onChangeText}/>
      </View>
    </View>
  )
}

export default Caja

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:2,
        borderColor:'black'
    },
    caja:{
        flexDirection:'row',
        color:'black'
    },
    label:{
        fontSize:10
    }
})