
import { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native"


function ChatListItem({chat, contact, user, handlePressOpenChat, chatUser }) {
    console.log(chatUser)

    const subtitle = () => {
        if (contact) {
            return `${contact.status || ''}`
        }
        if (chat) {
            return `${chat.last_message.message_content || ''}`
        }
        if (user) {
            return `${user.status || ''}`
        }
        if (chatUser) {
            return `${chatUser.status || ''}`
        }
    }

    const name = () => {
        if (contact) {
            return `${contact.first_name} ${contact.last_name}`
        }
        if (chat) {
            return `${chat.name}`
        }
        if (user) {
            return `${user.first_name} ${user.last_name}`
        }
        if (chatUser) {
            return `${chatUser.first_name} ${chatUser.last_name}`
            }
        }

    const badge = () => {
        if (contact) {
            return null
        }
        if (chat) {
            return (
                <View style={ChatListStyle.badge}>
                <Text style={ChatListStyle.badgeText}>2</Text>
                </View>
            )
        }
    }




    return (
        <TouchableOpacity style={ChatListStyle.container} 
        onPress={handlePressOpenChat}
        disabled={!!chatUser}>
            <Image source={{uri: "https://media.istockphoto.com/photos/close-up-portrait-of-a-shiba-inu-dog-selective-focus-dog-nose-picture-id1391025385?k=20&m=1391025385&s=612x612&w=0&h=G22D7kWgVGCOn-wv0-tJAxoI5bylZSXIOhslCaYiiVQ="}} style={{height: 40, width: 40, borderRadius: 100}}/>
            <View style={{paddingLeft: 10}}>
            <Text>{name()}</Text>
            <Text numberOfLines={1}>
                {subtitle()} 
            </Text>
            </View>
            {badge()}

            
        </TouchableOpacity>


    )
}

const ChatListStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flexStart",
        paddingLeft: 10,
        height: 70,
        width: "100%",
        backgroundColor: "white",
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1
    },
    badge: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3872E9",
        width: 25,
        height: 25,
        borderRadius: 50,
        position: "absolute",
        right: 20

    },
    badgeText: {
        color: "white"
    }

})


export default ChatListItem;