import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from "@react-navigation/elements";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    
    const primaryColor = 'black';
    const greyColor = '#737373';
    type IconProps = { color: string };
    const icons: Record<string, (props: IconProps) => React.ReactNode> = {
        Home: (props: IconProps) => <AntDesign name="home" size={24} color={props.color} />,
        mapa: (props: IconProps) => <Feather name="map-pin" size={24} color={props.color} />,
        reservas: (props: IconProps) => <AntDesign name="book" size={24} color={props.color} />,
    };
    
    return (
        <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        
        if(['_sitemap','+not-found','Login','index','Cards'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            style={styles.tabBarItem}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
                icons[route.name]
                  ? icons[route.name]({ color: isFocused ? primaryColor : greyColor })
                  : null
            }


            <Text style={{ color: isFocused ? primaryColor : greyColor }}>
              {typeof label === 'function'
                ? label({ focused: isFocused, color: isFocused ? '#007AFF' : '#222', position: 'below-icon', children: route.name })
                : label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    tabBarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TabBar;