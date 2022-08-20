import React from "react";
import { View, Text, Image } from "react-native"
import "./ChatListItem"
import ChatListItem from "./ChatListItem";

function Chats() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <ChatListItem />
      </View>
    );
  }

  export default Chats; 