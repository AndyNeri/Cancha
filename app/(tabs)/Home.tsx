import React from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, TextInput } from "react-native";
import Cards from '../Cards';

export default function Home(){

  const handleCardPress = (cardTitle: string) => {
  Alert.alert(`Card "${cardTitle}" pressed!`);
  };

  const data = [
    {
      id: '1',
      title: 'Cancha 1',
      description: 'Breve descripcion de cancha 1.',
      imageUrl: require('../../assets/images/estadio1.jpeg'),
    },
    {
      id: '2',
      title: 'Cancha 2',
      description: 'Breve descripcion de la cancha 2',
      imageUrl: require('../../assets/images/estadio2.jpeg'),
    },
    {
      id: '3',
      title: 'Cancha 3',
      description: 'Breve descripcion de la cancha 3',
      imageUrl: require('../../assets/images/estadio3.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TextInput
        style={styles.Input}
        placeholder="Buscar..."
        placeholderTextColor = "#f0f0f0"/>
        
        {data.map((item) => (
          <Cards
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            onPress={() => handleCardPress(item.title)}
          />
        ))}
      </ScrollView>

    </SafeAreaView>
  

  );


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  Input: {
    backgroundColor: '#d4d4d4ff',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingVertical: 10,
  },

  
});

