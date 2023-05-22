import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function QuestionScreen() {

    const answers = ["36\u00b0", "34\u00b0", "31\u00b0", "30\u00b0"]

    const handlePress = (e) => {
        if (e.target.innerText === "34\u00b0") {
            alert("correct")
        } else {
            alert("incorrect")
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode='contain' source={require("../assets/problem.png")} />
            <Text>Answers:</Text>
            <View>
                {answers.map(answer => {
                    return <Button 
                    key={answer}
                    title={answer} 
                    onPress={handlePress}
                    />
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30f',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    image: {
        width: '100%',
        flex: 1,
    },
});
