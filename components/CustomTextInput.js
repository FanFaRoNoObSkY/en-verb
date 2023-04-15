import { TextInput, StyleSheet, Dimensions } from "react-native"
import { Colors } from "../utils/Colors"

const CustomTextInput = ({ onChange, placeholder=""}) => {
    return (
        <TextInput style={style.inputContainer} onChangeText={onChange}></TextInput>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.dracula.cyan,
        padding: 10,
        backgroundColor: Colors.dracula.selection,
        color: Colors.dracula.foreground,
        width: Dimensions.get('window').width*0.6,
        fontSize: 20,
        textAlign: "center",
    },
})
export default CustomTextInput