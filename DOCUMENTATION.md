# 📘 Guía de Componentes en React Native (con Expo)

Esta guía resume los componentes nativos más comunes en React Native, con ejemplos claros, comparaciones entre opciones similares, y buenas prácticas para estructurar tus propios componentes.

## 🔧 Componentes Nativos Fundamentales

Estos son los componentes que forman la base de cualquier interfaz en React Native:

| Componente  | Descripción                                                                        | Ejemplo                                                   |
| ----------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `View`      | Contenedor general, similar a un `<div>` en HTML. Usa `display: flex` por defecto. | `<View style={{ flex: 1 }} />`                            |
| `Text`      | Renderiza texto en pantalla.                                                       | `<Text>Hola mundo</Text>`                                 |
| `Image`     | Muestra imágenes locales o remotas.                                                | `<Image source={{ uri: '...' }} />`                       |
| `Pressable` | Botón totalmente personalizable con feedback táctil.                               | `<Pressable onPress={...}><Text>Click</Text></Pressable>` |
| `StatusBar` | Modifica el color/estilo de la barra de estado (vía Expo).                         | `<StatusBar style="light" />`                             |

### 🖼️ Comparación: Image local vs remota

```jsx
// Imagen local
import icon from './assets/icon.png';
<Image source={icon} style={{ width: 100, height: 100 }} />

// Imagen desde URL
<Image source={{ uri: 'https://example.com/image.png' }} style={{ width: 100, height: 100 }} />
```

Ambas opciones usan el mismo componente, pero el source cambia.

## 🔄 Comparación: ScrollView vs FlatList

| C                 | Característica                                | `ScrollView`                                     | `FlatList` |
| ----------------- | --------------------------------------------- | ------------------------------------------------ | ---------- |
| Uso recomendado   | Pocos elementos (contenido estático o corto)  | Listas largas (dinámicas o muchas filas)         |
| Rendimiento       | Renderiza **todo a la vez** (poca eficiencia) | Renderiza solo lo visible (mejor rendimiento)    |
| Personalización   | Muy flexible                                  | Necesita props como `keyExtractor`, `renderItem` |
| Scroll automático | Sí                                            | Sí                                               |

```jsx
// ScrollView
<ScrollView>
{items.map(item => <Text key={item.id}>{item.name}</Text>)}
</ScrollView>

// FlatList
<FlatList
data={items}
keyExtractor={(item) => item.id}
renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

✅ Usa FlatList cuando trabajes con más de 10 elementos.

## 📱 Safe Area y Espaciado superior

Opción iOS-only: SafeAreaView

```jsx
import { SafeAreaView } from "react-native";

<SafeAreaView>{/* contenido */}</SafeAreaView>;
```

Opción multiplataforma con Expo: Constants.statusBarHeight

```bash
npx expo install expo-constants
```

```jsx
import Constants from "expo-constants";

<View style={{ paddingTop: Constants.statusBarHeight }}>
  {/_ contenido _/}
</View>;
```

✅ Esta última opción es más confiable en apps multiplataforma.

## 📤 Exportación

Si es el único componente del archivo, usa export default.

```jsx
export default function Main() {
  return <Text>Main</Text>;
}
```

✅ Se importa sin llaves: import Main from './Main';

Si hay más de un componente o función, usa export con nombre.

```bash
export function suma(a, b) { return a + b; }
```

✅ Se importa con llaves: import { suma } from './utils';
