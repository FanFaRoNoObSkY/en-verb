import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Colors } from "../utils/Colors"

const DictItem = ({infinitive, simple, participle, translation}) => {
    const [show, setShow] = useState(false)
    return (
            <TouchableOpacity style={style.dictItemContainer} onPress={()=>setShow(!show)}>
                <Text style={style.dictItemText}>
                    {infinitive.toUpperCase()}
                </Text>
                {
                    show && <>
                        <Text style={style.dictItemText}>
                            {simple}
                        </Text>
                        <Text style={style.dictItemText}>
                            {participle}
                        </Text>
                        <Text style={style.dictItemText}>
                            {translation.replace("-", " ")}
                        </Text>
                    </>
                }
            </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    dictItemContainer: {
        backgroundColor: Colors.dracula.background,
        margin: 3,
        padding:10,
        borderRadius: 3,
        alignItems: "center",
    },
    dictItemText: {
        color: Colors.dracula.foreground,
    }
})

export default DictItem