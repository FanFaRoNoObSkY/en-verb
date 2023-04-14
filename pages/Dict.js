import { ScrollView, View, StyleSheet} from "react-native"
import DictItem from "../components/DictItem"
import * as verbs from '../utils/irregular.json'
import { useEffect, useState } from "react"
import Button from "../components/Button"
import { Colors } from "../utils/Colors"
import CustomTextInput from "../components/CustomTextInput"

const Dict = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const [words, setWords] = useState([])
    const [index, setIndex] = useState(0)
    const wordCounter = 10

    useEffect(()=> {
        let loadedWords = []
        for(let i=index; i<index+wordCounter; i++)
            if(verbs[i])
                loadedWords.push(verbs[i])
        setWords(loadedWords)
    },[index])

    const loadPrevWords = () => {
        let minIndex = Math.max(0, index-wordCounter)
        setIndex(minIndex)
        console.log(minIndex)
    }
    const loadNextWords = () => {
        let maxIndex = index+wordCounter>=153?index: index+wordCounter
        setIndex(maxIndex)
        console.log(maxIndex)
    }

    const findWord = () => {
        alert("Searching for your input")
    }

    return (
        <View style={style.dictContainer}>
<View style={style.dictInputContainer}>
                <CustomTextInput/>
                <Button value="Search" action={()=>findValue()} primary/>
            </View>
           <ScrollView style={style.dictWordContainer}>
            {
                words.map((e,i) => {
                return <DictItem key={i}
                    infinitive={e[0]}
                    simple={e[1]}
                    participle={e[2]}
                    translation={e[3]}/>
                })
            }
            </ScrollView>
            
            <View style={style.dictButtonContainer}>
                <Button value="Previous" action={()=>loadPrevWords()}/>
                <Button value="Next" action={()=>loadNextWords()}/>
            </View>
      </View>
    )
}

const style = StyleSheet.create({
    dictContainer: {
        height: "100%",
    },
    dictWordContainer: {
        padding: 10,
        backgroundColor: Colors.dracula.selection,
    },
    dictInputContainer: {
        padding: 20,
        borderBottomColor: Colors.dracula.selection,
        borderBottomWidth: 1,
        alignItems:"center",
        justifyContent: "center",
        columnGap: 5,
        flexDirection: "row"
    },
    dictButtonContainer: {
        borderTopColor: Colors.dracula.selection,
        borderTopWidth: 1,
        padding: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
    }
})

export default Dict