import { View, Text, StyleSheet} from "react-native"
import { Colors } from "../utils/Colors"
import NavItem from './NavItem'

const Navbar = ({page=0, callback}) => {
    return (
        <View style={style.navbarContainer}>
            <NavItem value="Reto diario" callback={()=>callback(0)} selected={page==0}/>
            <NavItem value="Diccionario" callback={()=>callback(1)} selected={page==1}/>
            <NavItem value="Historial" callback={()=>callback(2)} selected={page==2}/>
        </View>
    )
}

const style = StyleSheet.create({
    navbarContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.dracula.selection,
        borderBottomWidth: 1,
        borderBottomColor: Colors.dracula.cyan,
    },
    navbarText: {
        color: Colors.dracula.foreground,
        fontSize: 18,
    }
})


export default Navbar