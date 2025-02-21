import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const FakeList = () => {
    //definimos la estructura de un producto
    type producto={
        id?: number,
        title: string,
        price: number,
        description?: string,
        category?: string,
        image: string,
        rating?: {
          rate: number,
          count: number
        }
    }
    //estados a utilizar Cargando, Productos 
    const [Cargando,setCargando]=useState<boolean>(true);
    const [Productos, setProductos]=useState<producto[]>([]);
    
    //empleando useeffect gestionamos la carga de datos
    useEffect(()=>{
        const CargaDatos= async ()=>{
            //inicializo el estado cargando en verdadero
            setCargando(true)
            //intentamos hacer nuestra peticion con fetch
            try {
                const respuesta= await fetch('https://fakestoreapi.com/products');
                //si no quiso diosito que el fetch jalara
                if(!respuesta.ok){
                    //termino mi aplicacion y dejo un mensaje de error
                    throw new Error('Error al consultar los datos ${respuesta.status}');
                }
                //en caso de que todo ok, vamos a pasar la respuesta al json
                const datos= await respuesta.json();//con esto ya tenemos los datos en mmemoria
                //asigno a productos lo que trae datos y cambio el estatus de cargando
                setProductos(datos);
                setCargando(false);
            } catch (error) {
                console.log('Error al consultar los datos',error);
            }
        }
        CargaDatos();
    },[]) 
    
    //diseñamos pantalla UnloadScreen
    const UnLoadScreen=()=>{
        return(
            <View>
                <Text>Cargando Datos...</Text>
                <ActivityIndicator/>
            </View>
        )
    }

    //diseñamos el item a mostrar
    const Cart=(props:producto)=>{
        return(
            <View>
                <Text>Producto : {props.title}</Text>
                <Text>Precio : ${props.price}</Text>
                <Image source={{uri:props.image}} 
                style={{height:80,width:80,borderRadius:40}}/>
            </View>
        )
    }

    //diseñamos la pantalla LoadScreen
    const LoadScreen=()=>{
        return(
            <View>
                <Text>Lista de Productos</Text>
                <FlatList data={Productos}
                renderItem={({item})=><Cart title={item.title} price={item.price}
                image={item.image}/>}
                keyExtractor={item=>item.id}
                />
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <Text>FakeList</Text>
      {Cargando?UnLoadScreen():LoadScreen()}
    </View>
  )
}

export default FakeList

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})