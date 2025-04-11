import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View, Image } from "react-native";

export function NasaCard({ img }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: img.image }} style={styles.image} />
      <Text style={styles.title}>{img.title}</Text>
      <Text style={styles.description}>{img.description}</Text>
      <Text style={styles.year}>{img.year}</Text>
    </View>
  );
}
export function AnimatedNasaCard({ img, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <NasaCard img={img} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 45,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  year: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
