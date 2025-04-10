import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { getLatestImages } from "./lib/nasa";
import Constants from "expo-constants";
import { Main } from "./components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Main></Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 12,
    paddingTop: Constants.statusBarHeight,
    padding: 12,
  },
});
