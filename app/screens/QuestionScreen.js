import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-native'

export default function QuestionScreen() {

    const answers = ["36\u00b0", "34\u00b0", "31\u00b0", "30\u00b0"]

    const navigate = useNavigate()

    const handlePress = (val) => {
        if (val === "34\u00b0") {
            navigate("/correct")
        } else {
            navigate("/incorrect")
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
                    onPress={() => handlePress(answer)}
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
    // text: {
    //     fontSize: "26px"
    // }
});
