import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, FlatList } from "react-native"
import Message from "./Message";
import ChatKeyboard from "./ChatKeyboard";
import ChatChannel from "./ChatChannel";
import ChatListItem from "./ChatListItem";

import { ActionCable, Cable } from '@kesha-antonov/react-native-action-cable'
  
const actionCable = ActionCable.createConsumer("ws://localhost:3000/cable");
  
const cable = new Cable({})

//////////////////////////////////////////////////////////

function ChatRoom({ myUserId, setIsDisplayingChat, chat, refreshChats } ) {
    const [messages, setMessages] = useState(chat.messages)

    useEffect(() => {
        setMessages(chat.messages)
    }, [chat.messages])


    const handleBackToChats = () => {
        setIsDisplayingChat(false)
    }

    ////////////////// ACTION CABLE CONFIGURATION ///////////////

    // Subscribe to messages from here
    // update messages state when they come in with ActionCable (setMessages)
    useEffect(() => {
        // const channel = cable.setChannel(
        //     `chat_${chatId}_${userId}`, // channel name to which we will pass data from Rails app with `stream_from`
        //     actionCable.subscriptions.create({
        //         // subscription config for your messages action cable
        //     })
        //   )
        //   channel
        //     .on( 'received', handleReceived ) // create these functions to handle cable
        //     .on( 'connected', handleConnected )
        //     .on( 'rejected', handleDisconnected )
        //     .on( 'disconnected', handleDisconnected )
        return () => {
            // clean up
            // const channelName = `chat_${chatId}_${userId}`
            // const channel = cable.channel(channelName)
            // if (channel) {
            // channel
            //     .removeListener( 'received', handleReceived ) // create these functions to handle cable
            //     .removeListener( 'connected', handleConnected )
            //     .removeListener( 'rejected', handleDisconnected )
            //     .removeListener( 'disconnected', handleDisconnected )
            // channel.unsubscribe()
            // delete( cable.channels[channelName] )
            // }
        }
    })

    ////////////////// ACTION CABLE CONFIGURATION ///////////////


    const chatUser = chat.users.find(user => user.id !== myUserId);

    return (
        <View style={chatRoomStyles.page}>
            <View style={chatRoomStyles.header}>
                <TouchableOpacity 
                style={chatRoomStyles.backButtonContainer}
                onPress={handleBackToChats}>
                    <Text style={chatRoomStyles.backButton}>
                    {`<`}
                    </Text>
                </TouchableOpacity>
                <View style={chatRoomStyles.headerInfo}>
                    <ChatListItem chatUser={chatUser}/>
                </View>
            </View>
            <FlatList 
            data={messages}
            renderItem={({item}) => <Message message={item.message_content} isMe={myUserId === item.user_id}/>}/>

            <ChatKeyboard myUserId={myUserId} chat={chat} refreshChats={refreshChats}/>
            
        
        {/* <ChatChannel /> */}
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
    },
    backButton: {
        color: "grey",
        fontSize: "24",

    },
    backButtonContainer: {
        width: 50,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1
        
    },
    headerInfo: {
        width: "88%",

    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
        

    }
})

export default ChatRoom;