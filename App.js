import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BASE_URL = "https://dummyjson.com";

export default function App() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
    console.log(products);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Products</Text>
      <FlatList
        data={products.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "stretch",
              gap: 16,
              padding: 10,
            }}
          >
            <Image
              style={{ width: 64, height: 64, marginRight: 10 }}
              source={{ uri: item.thumbnail }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
