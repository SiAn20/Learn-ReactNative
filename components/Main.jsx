import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestImages } from "../lib/nasa";
import { AnimatedNasaCard } from "./NasaCard";
import LogoNasa from "./LogoNasa";

export function Main() {
  const [images, setImages] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={{ marginBottom: 20 }}>
        <LogoNasa />
      </View>
      {images.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"Large"} />
      ) : (
        <FlatList
          data={images}
          renderItem={({ item, index }) => (
            <AnimatedNasaCard img={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
