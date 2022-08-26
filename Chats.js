import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, Text, Image } from "react-native"
import "./ChatListItem"
import ChatListItem from "./ChatListItem";
import ChatRoom from "./ChatRoom";
import FilterChats from "./FilterChats";

import { useIsFocused } from '@react-navigation/native';


function Chats({user, token, route, navigation}) {
    const [search, setSearch] = useState("")
    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState();
    const [isDisplayingChat, setIsDisplayingChat] = useState(false)

    const isFocused = useIsFocused();

    //// fetch user messages 

    function handlePressOpenChat(chat) {
        console.log('!!! open chat from chat tab', chat);
        setCurrentChat(chat)
        setIsDisplayingChat(true)
    }

    useEffect(() => {
      if (route.params && route.params.openChat) {
        const chatToOpen = chats.find(chat => chat.id === route.params.newChatData.id)
        if (chatToOpen) {
          setCurrentChat(chatToOpen)
          setIsDisplayingChat(true)
          navigation.setParams({ chatToOpen: undefined, openChat: undefined })
        }
      }
    }, [isFocused, chats])

    const refreshChats = () => {
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
          setChats(data)
          if (currentChat) {
            const updatedCurrentChat = data.find(chat => chat.id === currentChat.id)
            setCurrentChat(updatedCurrentChat);
          }
    })
    }

 
    useEffect(() => {
      refreshChats()
     }, [isFocused, isDisplayingChat])


    const filteredChats = chats.filter(chat => chat.name.toLowerCase().includes(search.toLowerCase()) )
    // || chat.users.map(user => `${user.first_name} ${user.last_name}`).toLowerCase().includes(search.toLowerCase())
    




    return (
      <><View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <FilterChats search={search} setSearch={setSearch} filteredChats={filteredChats}/>
        
        <ScrollView style={{ flex: 1 }}>
        {filteredChats.map(chat => <ChatListItem 
        key={chat.id}
        chat={chat} 
        handlePressOpenChat={() => handlePressOpenChat(chat)} />)}
        </ScrollView>
        
      </View>
      {isDisplayingChat ? <ChatRoom setIsDisplayingChat={setIsDisplayingChat} myUserId={user.id} chat={currentChat} refreshChats={refreshChats}/> : null }
      </>
    );
  }

  export default Chats; 