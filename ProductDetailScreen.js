// ProductDetailScreen.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.thumbnail }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={[styles.description, { textAlign: "center" }]}>
        {item.description}
      </Text>
      <Text style={[styles.price, { fontWeight: "bold", fontSize: "20" }]}>
        Price: ${item.price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    padding: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
