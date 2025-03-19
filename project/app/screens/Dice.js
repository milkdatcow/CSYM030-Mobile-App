import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from "../style";

const Quiz = ({navigation}) => {
    const[enemyScore, setEnemyScore] = useState(0);
    const[playerScore, setPlayerScore] = useState(0);
    const[win,setWin] = useState("");

    const handleRoll = () => {
        setEnemyScore(Math.floor(Math.random() * 7));
        setPlayerScore(Math.floor(Math.random() * 7)); 
        
        console.log("enemy "+enemyScore);
        console.log("player "+playerScore);

        if(playerScore>enemyScore){
            setWin("win"); //win
        }else if(enemyScore>playerScore){
            setWin("lose"); //loss
        }else{
            setWin("draw"); //draw
        }
       
    }

    if(win!=""){
        return(
            <View style={styles.container}>
                <Text style={styles.h2}>You {win}!</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                        setWin("");
                    }}
                >
                <Text style={styles.buttonText}>Restart Game</Text>
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