import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native"
import ChatListItem from "./ChatListItem";

function Contacts({token}) {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => {
            console.log("!!!", data)
            setContacts(data)
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
        console.log(data)
      })

    }


    return (
      <View style={{ flex: 1, justifyContent: 'flexStart', alignItems: 'center' }}>
        {contacts.map(contact => <ChatListItem key={contact.id} contact={contact} createNewConversation={createNewConversation}/>)}
      </View>
    );
  }


  export default Contacts;
