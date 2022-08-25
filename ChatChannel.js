import React from "react";
import { useState, useEffect } from "react";
import { Image, Text, View } from 'react-native';


function ChatChannel({messages, setMessages}) {

    function updateMessages(newMessage) {
        setMessages([...messages, newMessage])
    }

    useEffect(() => {
        cableApp.room = cableApp.cable.subscriptions.create(
          {
            channel: "ChatChannel",
            messages: messages
          },
          {
            received: (newMessage) => {
              console.log("message", newMessage);
              updateMessages(newMessage);
            },
          }
        );
      }, [messages]);







    return (
        <View><Text>TEMP</Text></View>
    )
}


export default ChatChannel;