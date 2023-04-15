import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Colors } from "../utils/Colors"

const DictItem = ({word}) => {
    const [isShowing, setIsShowing] = useState(false)
    return (
            <TouchableOpacity style={style.dictItemContainer} onPress={()=>setIsShowing(!isShowing)}>
                <Text style={style.dictItemText}>
                    {isShowing?"Infinitive: "+word[0]: word[0].toUpperCase()}
                </Text>
                {
                    isShowing && <>
                        <Text style={style.dictItemText}>
                            Simple: {word[1]}
                        </Text>
                        <Text style={style.dictItemText}>
                            Participle: {word[2]}
                        </Text>
                        <Text style={style.dictItemText}>
                            Translation: {word[3].replace("-", " ")}
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