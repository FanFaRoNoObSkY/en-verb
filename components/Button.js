import { Text, TouchableOpacity, StyleSheet} from "react-native"
import { Colors } from '../utils/Colors'


const Button = ({value="", action, primary=false, secondary=false}) => {

    return (
        <TouchableOpacity 
            onPress={action} 
            style={[style.buttonContainer, secondary&&style.buttonSecondary, primary&&style.buttonPrimary]}>
            <Text 
                style={[style.buttonValue, secondary&&style.buttonSecondaryValue, primary&&style.buttonPrimaryValue]}>
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
        borderRadius: 5,
        width: 120,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonValue: {
        fontSize: 20,
        color: Colors.dracula.cyan,
    },
    buttonPrimary: {
        backgroundColor: Colors.dracula.cyan,
        borderColor: Colors.dracula.cyan
    },
    buttonPrimaryValue: {
        color: Colors.dracula.background,
    },
    buttonSecondary: {
        backgroundColor: Colors.dracula.background,
        borderColor: Colors.dracula.orange,
    },
    buttonSecondaryValue: {
        fontSize: 15,
        color: Colors.dracula.orange,
    },
})


export default Button