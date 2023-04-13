import { Text, View, TouchableOpacity, StyleSheet} from "react-native"
import { Colors } from '../utils/Colors'


const Button = ({value="", action}) => {

    return (
        <TouchableOpacity onPress={action} style={style.buttonContainer}>
            <Text style={style.buttonValue}>
                {value}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.dracula.selection,
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    buttonValue: {
        fontSize: 26,
        color: Colors.dracula.foreground,
    }
})


export default Button