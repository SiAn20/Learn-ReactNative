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

# Instalación y Creación  🔓
## Instalar
Instala Node.js, Git, Watchman y Expo CLI o React Native CLI:
```bash
npm install
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
    rules: {"prettier/prettier": "error",},
};
```
## Crear nuevo proyecto
Con Expo (recomendado para principiantes):
```bash
npx create-expo-app nombre-App
cd MyApp
npm start
```
Con expo pero iniciando solo con lo necesario.
```bash
npx create-expo-app nombre-App --template blank
cd MyApp
npm start
```
Con React Native CLI (más control, pero más configuración):
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
| Tecnología       | Lenguaje | Rendimiento | Facilidad de uso | Multiplataforma | Acceso a código nativo |
|-----------------|----------|-------------|------------------|-----------------|------------------------|
| **React Native** | JavaScript / TypeScript | Alto | Fácil | ✅ Sí | ✅ Sí |
| **Flutter**      | Dart     | Muy alto    | Media  | ✅ Sí | ✅ Sí |
| **Kotlin**       | Kotlin   | Nativo      | Media  | ❌ No | ✅ Sí |
| **Swift**        | Swift    | Nativo      | Media  | ❌ No | ✅ Sí |
| **Ionic**        | JavaScript / TypeScript | Medio | Fácil | ✅ Sí (WebView) | ❌ No |

# Recursos ⛑️
- Página oficial de React Native: [reactnative.dev](https://reactnative.dev/)
- Página oficial de expo: [expo.dev](https://expo.dev/)