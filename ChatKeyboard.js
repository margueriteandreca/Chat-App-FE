import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import Message from "./Message";


function ChatKeyboard() {

    const [message, setMessage] = useState("")


    return (
        <KeyboardAvoidingView 
        style={keyboardStyles.main}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}>
            <View style={keyboardStyles.inputContainer}>
                <TextInput style={keyboardStyles.input} 
                value={message} onChangeText={setMessage}/>
            </View>

            <View style={keyboardStyles.buttonContainer}>
                <Text styles={keyboardStyles.buttonText}>+</Text>
            </View>
        </KeyboardAvoidingView>

    )
}


const keyboardStyles = StyleSheet.create({
    main: {
        flexDirection: "row",
        padding: 10

    },
    inputContainer: {
        backgroundColor: "lightgrey",
        flex: 1,
        marginRight: 10, 
        borderRadius: 25,
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingLeft: 15

    }, 
    input: {

    },
    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#3777f0",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 35
    }
})

export default ChatKeyboard;