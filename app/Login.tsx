import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Login () {
    return (
        <View style={styles.padre}>
            


            <View style={styles.tarjeta}>

            <View style = {styles.contenedorImagen}>
                <Image source={require('../assets/images/ball-488718_1280.jpg')} style={styles.profile}/>
                <Text style={styles.titulo}>Iniciar Sesión</Text>
                <Text>Accede a tu cuenta para reservar canchas</Text>
            </View>

                <View><Text style={styles.subtitulo}>Correo</Text></View>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder = 'Correo@gmail.com' style={{paddingHorizontal:15}}/>
                </View>

                <View><Text style={styles.subtitulo}>Contraseña</Text></View>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder = 'Password123' style={{paddingHorizontal:15}} secureTextEntry={true}/>
                </View>

                <View style={styles.padreBoton}>
                    <TouchableOpacity style={styles.contenedorCajaBoton}>
                        <LinearGradient
                            colors={['#23c461','#3b83f4']}
                            start={{x:0, y:0}}
                            end={{x:1, y:0}}
                            style={styles.cajaBoton}>
                            <Text style={styles.textoBoton}>Iniciar Sesión</Text>
                        </LinearGradient>
                        
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({

    padre:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    profile:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor: 'white',
        alignItems: 'center'
    },

    tarjeta:{
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width:0,
            height:2 
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation:5,
    },
    cajaTexto:{
        paddingVertical: 10,
        backgroundColor: '#cccccc40',
        borderRadius: 15,
        marginBottom:30
    },
    padreBoton:{
        alignItems: 'center',

    },
    cajaBoton:{
        borderRadius: 15,
        width: '100%',
        padding:10
    },
    contenedorCajaBoton:{
        borderRadius: 15,
        width: '100%',
    },
    textoBoton:{
        textAlign:'center',
        color:'white',
    },
    subtitulo:{
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 11
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 25,
        padding:10
    },
    contenedorImagen:{
        alignItems: 'center',
        padding:30
    },
});