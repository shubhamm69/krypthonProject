import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useFonts } from 'expo-font';

const AppointmentForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    const [problem, setProblem] = useState(initialValues.problem);

    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            <Text style={styles.label }>Name</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>Age</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Text style={styles.label}>Problem</Text>
            <TextInput
                style={styles.input}
                value={problem}
                onChangeText={text => setProblem(text)}
            />
            <Button title="Save Blog Post" onPress={() => onSubmit(title, content, problem)} />
        </View>
    );
};

AppointmentForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
        problem: ''
    }
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        fontSize: 18,
        paddingHorizontal:10,
        borderWidth: 1,
        borderColor: 'grey',
        height: 50,
        marginHorizontal: 15,
        marginBottom: 5,
        borderRadius: 10,
        flexDirection: 'row'
    },
    label: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        margin: 15,
    },
});

export default AppointmentForm;