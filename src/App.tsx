import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const WineList = () => {
  const [wines, setWines] = useState([
    {
      id: '1',
      name: 'Wine Name 1',
      description: 'Description of Wine 1',
      price: '$20.00',
      imageUrl: 'wine1.jpg', // Replace with actual image URL
    },
    {
      id: '2',
      name: 'Wine Name 2',
      description: 'Description of Wine 2',
      price: '$25.00',
      imageUrl: 'wine2.jpg', // Replace with actual image URL
    },
    // Add more wine items here
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wine Store</Text>
      <FlatList
        data={wines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 8,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default WineList;
