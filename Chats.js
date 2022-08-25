import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native"
import "./ChatListItem"
import ChatListItem from "./ChatListItem";
import ChatRoom from "./ChatRoom";
import FilterChats from "./FilterChats";

import {
  ActionCable,
  Cable,
} from '@kesha-antonov/react-native-action-cable'


const actionCable = ActionCable.createConsumer("ws://localhost:3000/cable");

console.log('!!! cable', actionCable);

const cable = new Cable({})

function Chats({user, token}) {
    const [search, setSearch] = useState("")
    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState();
    const [isDisplayingChat, setIsDisplayingChat] = useState(false)
    const [messages, setMessages] = useState([])

    //// fetch user messages 

    function handlePressOpenChat(chat) {
        setCurrentChat(chat)
        setIsDisplayingChat(true)
    }


 
    useEffect(() => {
        fetch("http://localhost:3000/userconversations", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({token})
        })
        .then(res => res.json())
        .then(data => {
            console.log("!!!!!!!! chats", data)
            setChats(data)
        })
     }, [])


    const filteredChats = chats.filter(chat => chat.name.toLowerCase().includes(search.toLowerCase()) )
    // || chat.users.map(user => `${user.first_name} ${user.last_name}`).toLowerCase().includes(search.toLowerCase())
    




    return (
      <><View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <FilterChats search={search} setSearch={setSearch} filteredChats={filteredChats}/>
        {filteredChats.map(chat => <ChatListItem 
        chat={chat} 
        handlePressOpenChat={() => handlePressOpenChat(chat)} />)}
        
      </View>
      {isDisplayingChat ? <ChatRoom setIsDisplayingChat={setIsDisplayingChat} myUserId={user.id} chat={currentChat}/> : null }
      </>
    );
  }

  export default Chats; 