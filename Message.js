import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native"

function Message({ message, isMe }) {
    return (
        <View style={[
            messageStyles.container, {
                backgroundColor: isMe ? "#3777f0" : "lightgrey",
                marginLeft: isMe ? "auto" : 10,
                marginRight: isMe ? 10 : "auto"
                }]}>
            <Text style={{color: isMe ? "black" : "white"}}>
                {message}
            </Text>
        </View>

    )
}

const messageStyles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: "75%",
      },
      row: {
        flexDirection: "row",
        alignItems: "flex-end",
      },
      messageReply: {
        backgroundColor: "gray",
        padding: 5,
        borderRadius: 5,
      },
      leftContainer: {
        backgroundColor: "#3777f0",
        marginLeft: 10,
        marginRight: "auto",
      },
      rightContainer: {
        backgroundColor: "lightgrey",
        marginLeft: "auto",
        marginRight: 10,
        alignItems: "flex-end",
      },
    });

export default Message; 