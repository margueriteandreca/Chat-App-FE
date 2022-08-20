import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native"


function ChatListItem() {

    return (
        <TouchableOpacity style={ChatListStyle}>
            <Image source={{uri: "https://media.istockphoto.com/photos/close-up-portrait-of-a-shiba-inu-dog-selective-focus-dog-nose-picture-id1391025385?k=20&m=1391025385&s=612x612&w=0&h=G22D7kWgVGCOn-wv0-tJAxoI5bylZSXIOhslCaYiiVQ="}} style={{height: 30, width: 30, borderRadius: 100}}/>
            <View style={{paddingLeft: 10}}>
            <Text>Alan</Text>
            <Text>This will be conditionally rendered </Text>
            </View>
        </TouchableOpacity>


    )
}

const ChatListStyle = StyleSheet.create({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flexStart",
    paddingLeft: 10,
    height: 70,
    width: "100%",
    backgroundColor: "grey"

})


export default ChatListItem;