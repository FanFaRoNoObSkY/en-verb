import { View, Text, StyleSheet, Dimensions } from "react-native"
import { Colors } from "../utils/Colors"
import verbs from '../utils/irregular'
import Button from "../components/Button"
import { useState, useEffect } from "react"
import CustomTextInput from '../components/CustomTextInput'

const Challenge = () => {
    const times = ["Infinitive", "Simple", "Participle"]
    const [wordIndex, setWordIndex] = useState(Math.floor(Math.random()*153))
    const [timeIndex, setTimeIndex] = useState(Math.floor(Math.random()*3))
    const [answerIndex, setAnswerIndex] = useState()
    const [input, setInput]= useState()

    const [showAnswer, setShowAnswer] = useState(false)
    const [isSolved, setIsSolved] = useState(false)
    const [tries, setTries] = useState(0)
    
    useEffect(()=>{
        let index = Math.floor(Math.random()*2)
        if(index == timeIndex) {
            index = (index+1)%3
        }
        setAnswerIndex(index)
    },[timeIndex])

    const checkInput = () => {
        setTries(tries+1)
        if(input===verbs[wordIndex][answerIndex]){
            setIsSolved(true)
        }
        else 
            alert("Wrong!")
    }
    const nextChallenge = () => {
        setTries(0)
        setShowAnswer(false)
        setIsSolved(false)
        setWordIndex(Math.floor(Math.random()*153))
        setTimeIndex(Math.floor(Math.random()*3))
    }

    return (
        <View style={style.challengeContainer}>
            <View style={[style.challengeTitleContainer, showAnswer && style.challengeTitleContainerShowAnswer]}>
                <Text style={[style.challengeTitle, showAnswer && style.toOrangeText]}>
                    {
                        isSolved?"Good!":showAnswer?verbs[wordIndex][answerIndex]:verbs[wordIndex][timeIndex]
                    }
                </Text>
                {
                    isSolved?<>
                        <Text style={style.toForegroundText}>
                            <Text style={style.toCyanText}>{verbs[wordIndex][timeIndex]}</Text> in the <Text style={style.toCyanText}>{times[timeIndex]}</Text> form
                        </Text>
                    </>:
                    !showAnswer && <>
                        <Text style={style.challengeDescription}>
                            {times[timeIndex]}
                        </Text>
                        <Text style={style.challengeQuestion}>
                            Tries: {""+tries}
                        </Text>
                    </>
                }
            </View>
            <View style={style.infoContainer}>
            {
                isSolved?<>
                    <Text style={style.toForegroundText}>
                        Is <Text style={style.toCyanText}>{verbs[wordIndex][answerIndex]}</Text> in the <Text style={style.toCyanText}>{times[answerIndex]}</Text> form.
                    </Text>
                    <View>
                        <Text style={style.translationStyle}>What means: {verbs[wordIndex][3]}</Text>
                    </View>
                </>:
                showAnswer? <>
                    <Text style={style.challengeQuestion}>
                        Is the <Text style={style.toOrangeText}>{times[answerIndex]}</Text> form of the verb <Text style={style.toCyanText}>{verbs[wordIndex][timeIndex]}</Text> in the <Text style={style.toCyanText}>{times[timeIndex]}</Text> form.
                    </Text>
                    <View>
                        <Text style={style.translationStyle}>What means: {verbs[wordIndex][3]}</Text>
                    </View>
                </>
               :<>
                    <Text 
                    style={style.challengeQuestion}>
                        What is the <Text style={[style.challengeCorrectTime, showAnswer]}>
                            {times[answerIndex]}
                        </Text> form of the verb?
                    </Text>
                    <CustomTextInput onChange={(text)=>setInput(text)}/>
                </>
            }
            </View>
            
            <View style={style.challengeButtonContainer}>
                {tries>2 && !showAnswer && <Button value="Show answer" action={()=>setShowAnswer(true)}secondary/>}
                {!(showAnswer || isSolved) && <Button value="Check!" action={()=>checkInput()} primary/>}
                <Button value="Next" action={()=>nextChallenge()} secondary={showAnswer}/>
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
    challengeShowAnswerText: {
        color: Colors.dracula.orange,
        fontSize: 20,
    },
    challengeQuestion: {
        color: Colors.dracula.foreground,
    },
    challengeCorrectTime: {
        color: Colors.dracula.cyan,
    },
    challengeButtonContainer: {
        padding: 10,
        rowGap: 10
    },
    // showAnswer==true : Change everything to orange
    challengeShowAnswerButton: {
        margin: 10,
        borderWidth: 1,
        borderColor: Colors.dracula.orange,
        borderRadius: 10,
        padding: 5,
    },
    toOrangeText: {
        color: Colors.dracula.orange,
    },
    toCyanText: {
        color: Colors.dracula.cyan,
    },
    challengeTitleContainerShowAnswer: {
        borderColor: Colors.dracula.orange,
    },
    // Translation style
    translationStyle: {
        color: Colors.dracula.foreground,
    },
    // Solved style
    toForegroundText: {
        color: Colors.dracula.foreground,
    },
    infoContainer: {
        maxWidth: "80%",
    }
    
})

export default Challenge