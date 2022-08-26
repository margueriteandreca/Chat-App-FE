import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native"
import ChatListItem from "./ChatListItem";
import { useNavigation } from '@react-navigation/native';

function Contacts({token, user}) {
    const [contacts, setContacts] = useState([])

    const navigation = useNavigation();

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => {
            console.log("!!!", data)
            const filteredContacts = data.filter(contact => user.id !== contact.id)
            setContacts(filteredContacts)
        })
    }, [])

    function createNewConversation(recipient_id) {
      fetch("http://localhost:3000/conversations", {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({recipient_id, token})
      })
      .then(res => res.json())
      .then(data => {
        console.log('!!! create new', data);
        navigation.navigate("Chats", { openChat: true, newChatData: data })
      })

    }


    return (
      <View style={{ flex: 1, justifyContent: 'flexStart', alignItems: 'center' }}>
        {contacts.map(contact => <ChatListItem key={contact.id} contact={contact} createNewConversation={createNewConversation}/>)}
      </View>
    );
  }


  export default Contacts;
