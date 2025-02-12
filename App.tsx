import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import Header from './app/components/Header';
import Boton from './app/components/Boton';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Header Titulo='Calculadora' 
      nombre='Luis Alberto Mendoza San Juan'
      imagen={require('./assets/guero.png')} />

      <Header Titulo='Agenda fiscal' 
      nombre='Juan Carlos Rivera'
      imagen={require('./assets/otaku.png')}
      color='#3F704D'/>

      <Boton titulo='Hola' 
      onPress={()=>{Alert.alert('Hola soy un boton')}}
      icono={<Fontisto name="coffeescript" size={24} color="white"/>}
      posicionIcono='Derecha'/>

      <Boton titulo='Segundo' variante='Peligro' disable={true}
      onPress={()=>{Alert.alert('Hola soy otro boton')}}
      icono={<Fontisto name='ubuntu' size={24} color={'white'}/>}/>

      <StatusBar style="auto" />
    </View>
  );
}

const coffeePalette = {
  primary: "#4B2E1E", // Café oscuro - Ideal para encabezados, botones principales y branding.
  secondary: "#A67B5B", // Caramelo - Útil para resaltar elementos secundarios o fondos de secciones.
  background: "#EDE0D4", // Beige crema - Para el fondo general de la app, mantiene claridad y elegancia.
  accent: "#3F704D", // Verde hoja - Para resaltar elementos naturales y generar confianza.
  highlight: "#C0A16B" // Dorado suave - Perfecto para detalles llamativos como íconos o bordes de botones.
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: coffeePalette.background,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
