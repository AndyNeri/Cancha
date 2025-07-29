import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, FlatList, TouchableOpacity, Image, ScrollView} from "react-native";

const deportes = [
  { nombre: "Fútbol", icon: require("../assets/images/ball-488718_1280.jpg") },
  { nombre: "Pádel", icon: require("../assets/images/partial-react-logo.png") },
  { nombre: "Tenis", icon: require("../assets/images/react-logo.png") },
];

const canchas = [
  { id: "1", nombre: "Cancha 1", deporte: "Fútbol", ubicacion: "Club A", imagen: require("../assets/images/ball-488718_1280.jpg") },
  { id: "2", nombre: "Cancha 2", deporte: "Pádel", ubicacion: "Club B", imagen: require("../assets/images/partial-react-logo.png") },
  { id: "3", nombre: "Cancha 3", deporte: "Tenis", ubicacion: "Club C", imagen: require("../assets/images/react-logo.png") },
];

export default function Home() {
  const [usuario] = useState("Andrés");
  const [busqueda, setBusqueda] = useState("");
  const [deporteSeleccionado, setDeporteSeleccionado] = useState("Fútbol");

  const canchasFiltradas = canchas.filter(
    (c) =>
      c.deporte === deporteSeleccionado &&
      (c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.ubicacion.toLowerCase().includes(busqueda.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>¡Hola, {usuario}!</Text>

      {/* Buscador */}
      <TextInput
        style={styles.buscador}
        placeholder="Buscar cancha o club..."
        value={busqueda}
        onChangeText={setBusqueda}
      />

      {/* Carrusel de deportes */}
      <View style={styles.carruselContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deportes.map((dep) => (
            <TouchableOpacity
              key={dep.nombre}
              style={[
                styles.deporteItem,
                deporteSeleccionado === dep.nombre && styles.deporteItemActivo,
              ]}
              onPress={() => setDeporteSeleccionado(dep.nombre)}
            >
              <Image source={dep.icon} style={styles.deporteIcon} />
              <Text style={styles.deporteNombre}>{dep.nombre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Lista de canchas */}
      <Text style={styles.tituloSeccion}>Canchas disponibles</Text>
      <FlatList
        data={canchasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.canchaCard}>
            <Image source={item.imagen} style={styles.canchaImg} />
            <View style={{ flex: 1 }}>
              <Text style={styles.canchaNombre}>{item.nombre}</Text>
              <Text style={styles.canchaUbicacion}>{item.ubicacion}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={{textAlign:'center',marginTop:20}}>No hay canchas disponibles</Text>}
        style={{marginTop:10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buscador: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  carruselContainer: {
    marginBottom: 20,
  },
  deporteItem: {
    alignItems: "center",
    marginRight: 18,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#e0e0e0",
    minWidth: 90,
  },
  deporteItemActivo: {
    backgroundColor: "#525FE1",
  },
  deporteIcon: {
    width: 40,
    height: 40,
    marginBottom: 6,
    borderRadius: 20,
  },
  deporteNombre: {
    fontSize: 15,
    color: "#222",
    fontWeight: "bold",
    textAlign: "center",
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  canchaCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  canchaImg: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 14,
  },
  canchaNombre: {
    fontSize: 16,
    fontWeight: "bold",
  },
  canchaUbicacion: {
    fontSize: 14,
    color: "#666",
  },
});