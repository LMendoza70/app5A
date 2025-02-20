import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Data=[
    {
        id:'1',
        descripcion: "Café de especialidad tostado artesanalmente con finos granos selectos de Veracruz, México.",
        variedad: "Geisha",
        puntajeSCA: 87.5,
        productor: "Jorge Antonio Morales Alarcón",
        finca: "Finca Santa María",
        ubicacion: "San Pablo Coapan, Nalinco, Veracruz",
        altitud: 1300,
        proceso: "Lavado con fermentación en cereza",
        notasDeCata: "Miel, limón, sutilmente floral y frutas de hueso",
        tostador: "Luis Murillo Mercado",
        imagen: "https://via.placeholder.com/150/0077bb?text=Geisha+Veracruz"
      },
      {
        id:'2',
        descripcion: "Un café excepcional de Chiapas, cultivado en las montañas y tostado para resaltar su dulzura natural.",
        variedad: "Typica",
        puntajeSCA: 86,
        productor: "María Rodríguez Pérez",
        finca: "El Mirador",
        ubicacion: "Unión Juárez, Soconusco, Chiapas",
        altitud: 1600,
        proceso: "Lavado",
        notasDeCata: "Chocolate con leche, avellana, caramelo y un toque de naranja",
        tostador: "Sofía Ramírez Vargas",
        imagen: "https://via.placeholder.com/150/00bb00?text=Typica+Chiapas"
      },
      {
        id:'3',
        descripcion: "Desde Oaxaca, un café con cuerpo y notas especiadas, perfecto para los amantes del café intenso.",
        variedad: "Bourbon",
        puntajeSCA: 85,
        productor: "Pedro Martínez Gómez",
        finca: "La Soledad",
        ubicacion: "Pluma Hidalgo, Oaxaca",
        altitud: 1450,
        proceso: "Natural",
        notasDeCata: "Especias, tabaco dulce, ciruela y cacao amargo",
        tostador: "Carlos Hernández Díaz",
        imagen: "https://via.placeholder.com/150/bb0000?text=Bourbon+Oaxaca"
      },
      {
        id:'4',
        descripcion: "Café Veracruzano de altura, con acidez brillante y un perfil aromático complejo.",
        variedad: "Mundo Novo",
        puntajeSCA: 88,
        productor: "Isabel Sánchez Flores",
        finca: "Los Ángeles",
        ubicacion: "Huatusco, Veracruz",
        altitud: 1200,
        proceso: "Honey",
        notasDeCata: "Manzana verde, jazmín, miel de maple y un final limpio",
        tostador: "Javier Mendoza Ruiz",
        imagen: "https://via.placeholder.com/150/aaff00?text=Mundo+Novo+Veracruz"
      },
      {
        id:'5',
        descripcion: "Un tesoro de Puebla, café de especialidad con notas frutales y florales delicadas.",
        variedad: "Catuaí",
        puntajeSCA: 87,
        productor: "Ricardo López Torres",
        finca: "Bella Vista",
        ubicacion: "Cuetzalan, Puebla",
        altitud: 1100,
        proceso: "Lavado",
        notasDeCata: "Durazno, flor de azahar, té negro y un toque cítrico",
        tostador: "Laura Jiménez Castro",
        imagen: "https://via.placeholder.com/150/ffaa00?text=Catuaí+Puebla"
      },
      {
        id:'6',
        descripcion: "Directo de Guerrero, un café con gran cuerpo y notas dulces que recuerdan al piloncillo.",
        variedad: "Maragogipe",
        puntajeSCA: 84.5,
        productor: "Elena Vargas Chávez",
        finca: "El Paraíso",
        ubicacion: "Atoyac de Álvarez, Guerrero",
        altitud: 1000,
        proceso: "Natural",
        notasDeCata: "Piloncillo, nuez, chocolate oscuro y un final prolongado",
        tostador: "Manuel García Ortega",
        imagen: "https://via.placeholder.com/150/ff00aa?text=Maragogipe+Guerrero"
      },
      {
        id:'7',
        descripcion: "Desde las montañas de Hidalgo, un café balanceado con notas a frutos secos y chocolate.",
        variedad: "Oro Azteca",
        puntajeSCA: 85.5,
        productor: "Gabriel Pérez Herrera",
        finca: "La Esperanza",
        ubicacion: "Zacualtipán, Hidalgo",
        altitud: 1700,
        proceso: "Honey",
        notasDeCata: "Almendra, chocolate, caramelo y un cuerpo sedoso",
        tostador: "Patricia Soto León",
        imagen: "https://via.placeholder.com/150/00aaaa?text=Oro+Azteca+Hidalgo"
      },
      {
        id:'8',
        descripcion: "Un café morelense con acidez jugosa y notas brillantes a cítricos y frutas rojas.",
        variedad: "Caturra",
        puntajeSCA: 86.5,
        productor: "Fernanda Ríos Aguilar",
        finca: "San Rafael",
        ubicacion: "Tetela del Volcán, Morelos",
        altitud: 1500,
        proceso: "Lavado",
        notasDeCata: "Naranja, cereza, mandarina y un final refrescante",
        tostador: "Roberto Díaz Guzmán",
        imagen: "https://via.placeholder.com/150/aa00ff?text=Caturra+Morelos"
      },
      {
        id:'9',
        descripcion: "De Nayarit, un café exótico con notas a frutas tropicales y especias dulces.",
        variedad: "Gesha",
        puntajeSCA: 89,
        productor: "Andrés Castro Mendoza",
        finca: "La Concordia",
        ubicacion: "Tepic, Nayarit",
        altitud: 900,
        proceso: "Natural Anaeróbico",
        notasDeCata: "Mango, piña, canela, clavo y un cuerpo cremoso",
        tostador: "Carolina Vargas Núñez",
        imagen: "https://via.placeholder.com/150/ff00ff?text=Gesha+Nayarit"
      },
      {
        id:'10',
        descripcion: "Un café Queretano con notas herbales y un toque a miel, ideal para comenzar el día.",
        variedad: "Marsellesa",
        puntajeSCA: 83,
        productor: "Daniel Vargas Quiroz",
        finca: "El Retiro",
        ubicacion: "Arroyo Seco, Querétaro",
        altitud: 1800,
        proceso: "Lavado",
        notasDeCata: "Hierbas finas, miel, limón y un final suave",
        tostador: "Víctor Manuel Soto Paredes",
        imagen: "https://via.placeholder.com/150/aaffaa?text=Marsellesa+Queretaro"
      }
];

type producto={
    id:string,
    descripcion:string,
    variedad:string,
    puntajeSCA:number,
    productor:string,
    finca:string,
    ubicacion:string,
    altitud:number,
    proceso:string,
    notasDeCata:string,
    tostador:string,
    imagen:string
}

const Item=(props:producto)=>{
    <View>
        <Image source={require('../../assets/coffee.png')}/>
        <Text>{props.descripcion}</Text>
    </View>
}

const CafeFlat = () => {
  return (
    <View>
      <Text>CafeFlat</Text>
      <FlatList
      data={Data}
      renderItem={(item)=><Item descripcion='hola'/>}
      keyExtractor={item=>item.id}/>
    </View>
  )
}

export default CafeFlat

const styles = StyleSheet.create({})