import { StyleSheet, Text, View } from 'react-native';
import { useNavigate, Link } from 'react-router-native'
import React from 'react';

export default function IncorrectScreen() {

    const navigate = useNavigate()

    return (
        <View style={styles.container}>
            <Text>Incorrect</Text>
            <Link to="/">
                <Text>
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
});