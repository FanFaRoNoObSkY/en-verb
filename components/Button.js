import { Text, View, TouchableOpacity, StyleSheet} from "react-native"
import { Colors } from '../utils/Colors'


const Button = ({value="", action, primary=false}) => {

    return (
        <TouchableOpacity 
            onPress={action} 
            style={[style.buttonContainer, primary&&style.buttonPrimary]}>
            <Text 
                style={[style.buttonValue, primary&&style.buttonPrimaryValue]}>
                {value}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.dracula.background,
        borderColor: Colors.dracula.cyan,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    buttonPrimary: {
        backgroundColor: Colors.dracula.cyan,
        borderColor: Colors.dracula.cyan
    },
    buttonValue: {
        fontSize: 26,
        color: Colors.dracula.foreground,
    },
    buttonPrimaryValue: {
        color: Colors.dracula.background,
    }
})


export default Button