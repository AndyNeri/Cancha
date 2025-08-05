import {View, Text, SafeAreaView} from "react-native";
import React from "react";
import {Tabs} from "expo-router";
import TabBar from "@/components/TabBar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const _layout = () => {
    return (

        <SafeAreaProvider>
            <SafeAreaView style={{flex:1}}>
                <Tabs
                tabBar = {props=> <TabBar{...props} />}
                >
                    <Tabs.Screen 
                        name="Home"
                        options={{
                            title: 'Home',
                            headerShown: false,
                        }}
                    />
                    <Tabs.Screen 
                        name="mapa"
                        options={{
                            title: 'Mapa'
                        }}
                    />
                    <Tabs.Screen 
                        name="reservas"
                        options={{
                            title: 'Reservas'
                        }}
                    />
                    <Tabs.Screen 
                         name="index"
                         options={{
                                tabBarButton: () => null, // Oculta el tab
                                headerShown: false, // Oculta el header
                         }}
                    />
                    <Tabs.Screen
                        name="Cards"
                        options={{
                            tabBarButton: () => null, // Oculta el tab
                            }}
                    />
                    <Tabs.Screen
                        name="Login" 
                        options ={{
                            tabBarButton: () => null, // Oculta el tab
                            }}
                    />
                </Tabs> 
            </SafeAreaView>
        </SafeAreaProvider>


    )
}

export default _layout;