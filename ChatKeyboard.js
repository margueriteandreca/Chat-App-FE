import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import Message from "./Message";


function ChatKeyboard({myUserId, chat}) {

    const [message, setMessage] = useState("")

    const handleSendMessage = () => {
        fetch("http://localhost:3000/messages", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({message_content: message, user_id: myUserId, conversation_id: chat.id})
              //maybe change to token?????
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        console.log('!!! sending: ', message)
        setMessage("")
        // post message
    }


    return (
        <KeyboardAvoidingView 
        style={keyboardStyles.main}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}>
            <View style={keyboardStyles.inputContainer}>
                <TextInput style={keyboardStyles.input} 
                value={message} onChangeText={setMessage}
                />
            </View>

            <TouchableOpacity style={keyboardStyles.buttonContainer} onPress={handleSendMessage}>
                <Text styles={keyboardStyles.buttonText}>+</Text>
            </TouchableOpacity>
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
        width: "100%"

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