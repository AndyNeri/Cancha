import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, FlatList, TouchableOpacity, Image, ScrollView} from "react-native";

export default function Home(){
  return (
    <View style={styles.Container}>
      <TextInput
      style={styles.Input}
      placeholder="Buscar..."/>
    </View>
  )

}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 30,
    alignContent: 'center',
  },
  Input: {
    backgroundColor: '#cdd5e5',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    marginLeft: 10,
  }
});