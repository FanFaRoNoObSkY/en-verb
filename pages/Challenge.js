import { View, Text, StyleSheet, Dimensions} from "react-native"
import { Colors } from "../utils/Colors"
import * as verbs from '../utils/irregular.json'
import Button from "../components/Button"
import { useState, useEffect } from "react"
import CustomTextInput from '../components/CustomTextInput'

const Challenge = () => {
    const times = ["Infinitive", "Simple", "Participle"]
    const [wordIndex, setWordIndex] = useState(Math.floor(Math.random()*153))
    const [timeIndex, setTimeIndex] = useState(Math.floor(Math.random()*3))
    const [answerIndex, setAnswerIndex] = useState()
    const [input, setInput]= useState()
    
    useEffect(()=>{
        let index = Math.floor(Math.random()*2)
        if(index == timeIndex) {
            index = (index+1)%3
        }
        setAnswerIndex(index)
    },[timeIndex])

    const checkInput = () => {
        if(input===verbs[wordIndex][answerIndex])
            alert("Good!")
        else 
            alert("Wrong!")
    }
    const nextChallenge = () => {
        setWordIndex(Math.floor(Math.random()*153))
        setTimeIndex(Math.floor(Math.random()*3))
    }

    return (
        <View style={style.challengeContainer}>
            <View style={style.challengeTitleContainer}>
                <Text style={style.challengeTitle}>{verbs[wordIndex][timeIndex]}</Text>
                <Text style={style.challengeDescription}>{times[timeIndex]}</Text>
            </View>
            <Text style={style.challengeQuestion}>What is the <Text style={style.challengeCorrectTime}>{times[answerIndex]}</Text> form of the verb?</Text>

            <CustomTextInput onChange={(text)=>setInput(text)}/>
            
            <View style={style.challengeButtonContainer}>
                <Button value="Check!" action={()=>checkInput()} primary={true}/>
                <Button value="Next" action={()=>nextChallenge()}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    challengeContainer: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.dracula.background,
    },
    challengeTitleContainer: {
        borderWidth: 5,
        borderColor: Colors.dracula.cyan,
        width: Dimensions.get('window').width*0.6,
        aspectRatio: 1,
        borderRadius: 300,
        alignItems: "center" ,
        justifyContent: "center",
        margin: 20,
    },
    challengeTitle: {
        color: Colors.dracula.foreground,
        fontWeight: "bold",
        fontSize: 40,
    },
    challengeDescription: {
        color: Colors.dracula.cyan,
        fontSize: 20,
    },
    challengeQuestion: {
        color: Colors.dracula.foreground,
    },
    challengeCorrectTime: {
        color: Colors.dracula.cyan,
    },
    challengeButtonContainer: {
        padding: 30,
        rowGap: 10
    }

})

export default Challenge