import { View, Text, StyleSheet} from "react-native"
import { Colors } from "../utils/Colors"
import NavItem from './NavItem'

const Navbar = ({page=0, callback}) => {
    return (
        <View style={style.navbarContainer}>
            <NavItem value="Challenge" callback={()=>callback(0)} selected={page==0}/>
            <NavItem value="Dictionary" callback={()=>callback(1)} selected={page==1}/>
            <NavItem value="Historic" callback={()=>callback(2)} selected={page==2}/>
        </View>
    )
}

const style = StyleSheet.create({
    navbarContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: Colors.dracula.background,
        padding: 10,
        borderBottomColor: Colors.dracula.selection,
        borderBottomWidth: 1,
    },
    navbarText: {
        color: Colors.dracula.foreground,
        fontSize: 18,
    }
})


export default Navbar