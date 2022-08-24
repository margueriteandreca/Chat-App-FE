import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native"
import ChatListItem from "./ChatListItem";

function Contacts() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setContacts(data))
    }, [])

    const handleCreateChat = () => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setContacts(data))
    }





    return (
      <View style={{ flex: 1, justifyContent: 'flexStart', alignItems: 'center' }}>
        {contacts.map(contact => <ChatListItem contact={contact}/>)}
      </View>
    );
  }


  export default Contacts;
