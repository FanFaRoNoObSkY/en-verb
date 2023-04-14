import { View, StyleSheet, Dimensions } from "react-native"
import Challenge from '../pages/Challenge'
import Dict from '../pages/Dict'
import Historic from '../pages/Historic'
import { Colors } from "../utils/Colors"

const Body = ({page=0}) => {
    return (
        <View style={style.bodyContainer}>
            {
                page==0?<Challenge/>:
                page==1?<Dict/>:
                <Historic/>
            }
        </View>
    )
}

const style = StyleSheet.create({
    bodyContainer: {
        flex: 15,
        backgroundColor: Colors.dracula.background,
    },
})

export default Body