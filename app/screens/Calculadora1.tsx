import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Caja from '../components/Caja'
import Boton from '../components/Boton';
import { Link } from 'expo-router';



const Calculadora1 = () => {
//estado de la aplicacion 
  const [Valor1,setValor1]=useState<string>('');
  const [Valor2,setValor2]=useState<string>('');
  const [res,setRes]=useState<number|null>(0)

  //logica de la aplicacion 
  const suma=()=>{
    const v1=parseFloat(Valor1);
    const v2=parseFloat(Valor2);
    setRes(v1+v2);
  }

  const resta=()=>{
    const v1=parseFloat(Valor1);
    const v2=parseFloat(Valor2);
    setRes(v1-v2);
  }

  const multiplicacion=()=>{
    const v1=parseFloat(Valor1);
    const v2=parseFloat(Valor2);
    setRes(v1*v2);
  }

  const division=()=>{
    const v1=parseFloat(Valor1);
    const v2=parseFloat(Valor2);
    setRes(v1/v2);
  }

  //renderizado de la aplicacion 
  return (
    <View>
      <Caja label='Valor 1' 
      icono={<Octicons name="number" size={24} color="black" />}
      onChangeText={(contenido)=>{setValor1(contenido)}}/>

      <Caja label='Valor 2'
      icono={<Octicons name="number" size={24} color="black" />}
      onChangeText={setValor2}/>

      <View style={styles.botonera}>
        <Boton titulo='Suma' onPress={()=>{suma()}}
          icono={<Octicons name="plus-circle" size={24} color="white" />}/>
        <Boton titulo='Resta' onPress={()=>{resta()}}
          icono={<AntDesign name="minuscircleo" size={24} color="white" />}/>
        <Boton titulo='Multiplicacion' onPress={()=>{multiplicacion()}}
          icono={<Octicons name="x-circle" size={24} color="white" />}/>
        <Boton titulo='Division' onPress={()=>{division()}}
          icono={<Feather name="divide-circle" size={24} color="white" />}/>
      </View>

      <Text>El resultado de la operacion es : {res} </Text>
      <Text>Valor 1 : {Valor1} , Valor 2 : {Valor2}</Text>
      <Link href={'../'}>
      regresar...
      </Link>

    </View>
  )
}

export default Calculadora1

const styles = StyleSheet.create({
  botonera:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
})