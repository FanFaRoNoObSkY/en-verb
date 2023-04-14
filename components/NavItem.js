import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid} from "react-native"
import { Colors } from "../utils/Colors"

const NavItem = ({value, callback, selected}) => {
    return (
        <TouchableOpacity 
            style={[style.navItemContainer, (selected) && style.navItemContainerSelected]} 
            activeOpacity={0.8}
            onPress={callback}
            >
                <Text style={[style.navItemValue, (selected) && style.navItemValueSelected]}>
                    {value}
                </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    navItemContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.dracula.background,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.dracula.cyan,
        width: "30%",
    },
    navItemContainerSelected: {
        backgroundColor: Colors.dracula.cyan,
    },
    navItemValue: {
        color: Colors.dracula.cyan,
        fontSize: 16,
    },
    navItemValueSelected: {
        color: Colors.dracula.selection,
    }
})


export default NavItem