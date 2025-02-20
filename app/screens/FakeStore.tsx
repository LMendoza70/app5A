import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Boton from '../components/Boton';

const FakeStore = () => {

    type producto={
            id: number,
            title: string,
            price: number,
            description: string,
            category: string,
            image: string,
            rating: {
              rate: number,
              count: number
            }
    }

    const [Producto,setProducto]=useState<producto>();
    const [loadin,setLoading]=useState<boolean>(true);

    

    const loadData= async ()=>{
        setLoading(true);

        try {
            const respuesta = await fetch('https://fakestoreapi.com/products/1');
            //por si ocurre un error al obtener la respuesta de fetch
            if(!respuesta.ok){
                throw new Error('Ocurrio el error : ${respuesta.status}');
            }    
            //si no hubo bronca ....
            const datos= await respuesta.json();
            setProducto(datos);
            setLoading(false);
            console.log(Producto);
            console.log(datos);
        } catch (error) {
            console.log('Ocurrio el error ',error)
        }

    }

    const sceenLoad=()=>
        {
            return(
                <View>
                    <Text>Pantalla lista </Text>
                    <Text>Producto : {Producto?.title}</Text>
                    <Text>descripcion : {Producto?.description}</Text>
                    <Image source={{uri:Producto?.image}} style={{height:100,width:100}}/>
                </View>
            )
        }

    const screenUnload=()=>{
        return(
            <View>
                <Text>Pantalla en preparacion...</Text>
                <ActivityIndicator/>
                <Boton titulo='Cambia estado' onPress={()=>{loadData()}}/>
            </View>
        )
    }
  
  return (
    <View style={styles.container}>
        {loadin?screenUnload():sceenLoad()}
    </View>
  )
}

export default FakeStore

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})