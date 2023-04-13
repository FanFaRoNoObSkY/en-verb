import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
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
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: Colors.dracula.selection,
        height: "100%"
    },
    navItemContainerSelected: {
        backgroundColor: Colors.dracula.cyan,
    },
    navItemValue: {
        color: Colors.dracula.foreground,
        fontSize: 18,
    },
    navItemValueSelected: {
        color: Colors.dracula.background,
    }
})


export default NavItem