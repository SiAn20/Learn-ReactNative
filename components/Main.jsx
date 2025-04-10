import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { getLatestImages } from "../lib/nasa";

export function Main() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getLatestImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {images.map((img) => (
            <View key={img.nasa_id} style={styles.card}>
              <Image source={{ uri: img.image }} style={styles.image} />
              <Text style={styles.title}>{img.title}</Text>
              <Text style={styles.description}>{img.description}</Text>
              <Text style={styles.year}>{img.year}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
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
