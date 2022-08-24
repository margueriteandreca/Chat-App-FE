import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, FlatList } from "react-native"
import Message from "./Message";
import ChatKeyboard from "./ChatKeyboard";

function ChatRoom() {


    const messages = ["hello", "hiiii"]

    return (
        <View style={chatRoomStyles.page}>
            <FlatList 
            data={messages}
            renderItem={({item}) => <Message message={item}/>}/>

            <ChatKeyboard />
            
        
        
        </View>

    )
}

const chatRoomStyles = StyleSheet.create({
    page: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        flex: 1
    }
})

export default ChatRoom;