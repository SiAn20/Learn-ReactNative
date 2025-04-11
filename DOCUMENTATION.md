COMPONENTES
View -> bloque como un div, displey flex por defecto
Text -> Mostrar texxto
Image -> Mostrar imagenes locales
        source={icon}
        style={resizeMode: 'center'}

        Mostrar imagenes
        source={{url:"https:/..."}}
StatusBar -> no es de react native, es un componente de expo, cambia el color del status bar
        style="ligh" o "dark"
Pressable -> commp. mas avanzable, personalizable
Scrollview -> textos estatios, RENDERIZA TODOS LOS ELEMENTOS A LA VEZ, lo hace lento conviene mejor FlatList
FlatList -> 

SafeAreaView -> solo para ios, no android mejor usar en estilos del contenedor principal:
Para cceder a información útil sobre la app y el dispositivo, como el nombre del dispositivo, versión del sistema, entorno de ejecución (desarrollo o producción), y datos del app.json.

```bash
npx expo install expo-constants
```

ejemplo de uso:
        paddingTop: constants.StatusBarHeight,

porque en un componente jsx es solo export function y  export default function no usa {} al importar




    
