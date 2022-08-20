import React from "react";
import { View, Text, Image } from "react-native"
import ChatListItem from "./ChatListItem";

function Contacts() {
    return (
      <View style={{ flex: 1, justifyContent: 'flexStart', alignItems: 'center' }}>
        <ChatListItem />
      </View>
    );
  }


  export default Contacts;
