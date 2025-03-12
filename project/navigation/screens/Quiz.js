import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from "../style";

const Quiz = ({navigation}) => {
    const questions = [
        {
            id: 1,
            question: 'Where do pine martens prefer to live?',
            answer: 'Pine trees',
            options: ['Sand dunes', 'Pine trees', 'River beds']
        },
        {
            id: 2,
            question: 'What is a pine marten\'s primary food source?',
            answer: 'Small mammals',
            options: ['Fish', 'Small mammals', 'Leaves']
        },
        {
            id: 3,
            question: 'What family do pine martens belong to?',
            answer: 'Mustelid',
            options: ['Canine', 'Feline', 'Mustelid']
        }
    ];

    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[score, setScore] = useState(0);
    const[quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (pOption) => {
        if (pOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    if (quizCompleted) {
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
            <Text style={styles.h1}>Quiz Time!</Text>
            <Text style={styles.h3}>
                Question {currentQuestion + 1}/{questions.length}
            </Text> 
            <Text style={styles.h2}>
                {questions[currentQuestion].question}
            </Text>
            
            {questions[currentQuestion].options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.qbutton}
                    onPress={() => handleAnswer(option)}
                >
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Quiz;