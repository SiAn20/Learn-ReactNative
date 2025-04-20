# `Learn-ReactNative`

# React Native ⚛️

Plataforma de desarrollo para desarrollar app en cualquier dispositivo incluido web.

## Origen

Desarrollado por Facebook (Meta) en 2015, React Native permite crear aplicaciones móviles multiplataforma con JavaScript/TypeScript y React, reutilizando código en iOS y Android.

## Características

- **Multiplataforma**: Código compartido entre iOS y Android.
- **Componentes Nativos:** Usa elementos nativos en lugar de WebViews.
- **Hot Reloading:** Recarga cambios en tiempo real sin recompilar.
- **Ecosistema React:** Compatible con librerías de React.
- **Puente Nativo:** Permite escribir código nativo en Java/Kotlin y Swift/Objective-C cuando es necesario.

## Uso de React Native

### Cuando SI usar React Native

- Aplicaciones multiplataforma con alta reutilización de código.
- Proyectos con equipos de desarrollo web que usan React.
- Aplicaciones con interfaces dinámicas y actualizaciones frecuentes.
- MVPs o startups que requieren un rápido desarrollo.

### Cuando SI usar React Native

- Apps que necesitan máximo rendimiento y optimización(juegos o gráficos intensivos).
- Aplicaciones que dependen de muchas funciones nativas (Bluetooth avanzado, AR, VR).
- Proyectos con requisitos específicos de plataforma que ya tienen equipos nativos.

## Expo

Framework y conjunto de herramientas para desarrollar aplicaciones móviles con React Native. Ssimplifica el desarrollo, prueba y despliegue de aplicaciones sin necesidad de configurar entornos nativos de Android o iOS.

# Instalación y Creación 🔓

## Instalar

Instala Node.js, Git, Watchman y Expo CLI o React Native CLI:

```bash
npm install
```

Para tamaño de pantalla:

```bash
npx expo install react-native-safe-area-context
```

Para utilizar svg:

```bash
npx expo install react-native-svg
```
Para navegación con [React navigation:](https://reactnavigation.org/docs/getting-started):
```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context #si se usa expo
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs #navegacion inferior
```

### Tailwind

```bash
npx expo install nativewind
```

```bash
npm install --save-dev --save-exact tailwindcss@3.3.2
```

```bash
npx tailwindcss init
```

Configurar `taiwind.config.js` agregando en content lo siguiente:

```js
module.export = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
};
```

Configurar `babel.config.js` agregando dentro el return lo siguiente:

```js
plugins: ["nativewind/babel"],
```

### Opcional para codigo limpio

Instalar sus respectivas extensiones en VSC.
Para ejecutar ESLint en tu proyecto Expo, analizar tu código y detectar errores o malas prácticas. Es útil para mantener un código limpio y estandarizado, instalar:

```bash
npx expo lint
```

Para instalar Prettier y sus configuraciones en tu proyecto y asegurarte de que el código tenga un formato consistente.

```bash
npx expo install -- --save -dev prettier eslint-config-prettier eslint-plugin-prettier
```

configurar en `.eslintrc.js`:

```bash
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
```

## Crear nuevo proyecto

Con Expo (recomendado para principiantes):

```bash
npx create-expo-app nombre-App
cd MyApp
npm start
```

Con expo pero iniciando solo con lo necesario (Usado en este proyecto) usar cualquiera de los siguientes:

```bash
npx create-expo-app nombre-App --template blank
cd MyApp
npm start
```


`npx expo install react-dom@18.3.1 react-native-web@~0.19.13 @expo/metro-runtime@~4.0.1` para web si no se tiene.

Crear con React Native CLI (más control, pero más configuración):

```bash
npx react-native init MyApp
cd MyApp
npx react-native run-android  # Para Android
npx react-native run-ios      # Para iOS (requiere Mac)
```

# Estructura del proyecto ⚙️

La estructura inicial despues de crear el proyecto con expo `npx create-expo-app nombre-App --template blank` es:

```bash
Learn-ReactNative/
│── assets/             # Carpeta para imágenes, fuentes y otros archivos estáticos
│── node_modules/       # Dependencias del proyecto (generadas por npm/yarn)
│── .gitignore          # Archivos que Git debe ignorar
│── App.js              # Punto de entrada principal de la app
│── app.json            # Configuración de Expo
│── index.js            # Punto de entrada en proyectos React Native sin Expo (puede no usarse en Expo)
│── package-lock.json   # Control de versiones de dependencias (autogenerado)
│── package.json        # Configuración del proyecto y dependencias
```

# Comparación con otras tecnologias 🔍

| Tecnología       | Lenguaje                | Rendimiento | Facilidad de uso | Multiplataforma | Acceso a código nativo |
| ---------------- | ----------------------- | ----------- | ---------------- | --------------- | ---------------------- |
| **React Native** | JavaScript / TypeScript | Alto        | Fácil            | ✅ Sí           | ✅ Sí                  |
| **Flutter**      | Dart                    | Muy alto    | Media            | ✅ Sí           | ✅ Sí                  |
| **Kotlin**       | Kotlin                  | Nativo      | Media            | ❌ No           | ✅ Sí                  |
| **Swift**        | Swift                   | Nativo      | Media            | ❌ No           | ✅ Sí                  |
| **Ionic**        | JavaScript / TypeScript | Medio       | Fácil            | ✅ Sí (WebView) | ❌ No                  |

# Recursos ⛑️

- Página oficial de React Native: [reactnative.dev](https://reactnative.dev/)
- Página oficial de expo: [expo.dev](https://expo.dev/)
- Proyectos: [DevProjects](https://www.codementor.io/projects/react-native)
- Componentes:
  - [gluestack-ui](https://gluestack.io/ui/docs/components/all-components)
  - Convertir svg a comp: [SVGR](https://react-svgr.com/playground/?native=true)
