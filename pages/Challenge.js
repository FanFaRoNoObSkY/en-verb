import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native"
import { Colors } from "../utils/Colors"
import * as verbs from '../utils/irregular.json'
import Button from "../components/Button"
import { useState, useEffect } from "react"

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
            <TextInput style={style.challengeInput} onChangeText={(text)=>setInput(text)}></TextInput>
            <Button value="Check!" action={()=>checkInput()} primary={true}/>
            <Button value="Next" action={()=>nextChallenge()}/>
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
    challengeInput: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.dracula.cyan,
        margin: 20,
        padding: 10,
        backgroundColor: Colors.dracula.selection,
        color: Colors.dracula.foreground,
        width: Dimensions.get('window').width*0.6,
        fontSize: 20,
        textAlign: "center",
    },
    challengeQuestion: {
        color: Colors.dracula.foreground,
    },
    challengeCorrectTime: {
        color: Colors.dracula.cyan,
    }
})

export default Challenge