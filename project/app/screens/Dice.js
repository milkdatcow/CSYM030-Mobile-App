import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from "../style";

const Quiz = ({navigation}) => {
    const[currentDice, setCurrentDice] = useState(0);
    const[playerDice, setPlayerDice] = useState(0);
    const win = 0

    const handleRoll = () => {
        let enemyRoll = Math.floor(Math.random() * 7);
        let playerRoll = Math.floor(Math.random() * 7);

        if(playerRoll>enemyRoll){
            win = 0; //win
            gameCompleted(win);
        }else if(enemyRoll>playerRoll){
            win = 1; //loss
            
        }else{
            win = 2; //draw
        }
    };

    if (gameCompleted) {
        return (
            <View style={styles.container}>
                <Text style={styles.h2}>You Have Completed The Quiz!</Text>
                <Text style={styles.h2}>
                    You scored: {score} out of {questions.length}
                </Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                        setCurrentQuestion(0);
                        setScore(0);
                        setQuizCompleted(false);
                    }}
                >
                    <Text style={styles.buttonText}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("WelcomeScreen")}>
                    <Text style={styles.buttonText}>Homepage</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Dice Game!</Text>
            <Text style={styles.h3}>
                You need to roll better than the app!
            </Text> 
            
                <TouchableOpacity
                    style={styles.qbutton}
                    onPress={() => handleRoll()}
                >
                    <Text>Roll!</Text>
                </TouchableOpacity>
        </View>
    );
};

export default Quiz;