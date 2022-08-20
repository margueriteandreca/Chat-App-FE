import React from "react";
import { View, Text, Image } from "react-native"
import ChatListItem from "./ChatListItem";

function Settings() {
    return (
      <View style={{ flex: 1, justifyContent: 'flexStart', alignItems: 'center' }}>
        <ChatListItem />
        {/* When clicked, open Bio */}
        <View>
            <Text>Settings</Text>
            <Text>More Settings</Text>
        </View>
      </View>
    );
  }

  export default Settings; 