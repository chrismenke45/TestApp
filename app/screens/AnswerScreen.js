import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native'
import React from 'react';

export default function AnswerScreen(props) {
    const { correct } = props

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{correct ? "Correct" : "Incorrect" }</Text>
            <Link to="/">
                <Text style={styles.text}>
                    Back to question
                </Text>
            </Link>
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
    text: {
        fontSize: 40,
    }
});
