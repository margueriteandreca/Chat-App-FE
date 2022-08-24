import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native"
import "./ChatListItem"
import ChatListItem from "./ChatListItem";
import ChatRoom from "./ChatRoom";
import FilterChats from "./FilterChats";

function Chats() {
    const [search, setSearch] = useState("")
    const [chats, setChats] = useState([])
    const [isDisplayingChat, setisDisplayingChat] = useState(false)
 

    useEffect(() => {
        fetch("http://localhost:3000/conversations")
        .then(res => res.json())
        .then(data => setChats(data))
     }, [])


    const filteredChats = chats.filter(chat => chat.name.toLowerCase().includes(search.toLowerCase()) 
    // || chat.users.map(user => `${user.first_name} ${user.last_name}`).toLowerCase().includes(search.toLowerCase())
    )




    return (
      <><View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <FilterChats search={search} setSearch={setSearch} filteredChats={filteredChats}/>
        {filteredChats.map(chat => <ChatListItem chat={chat}/>)}
        
      </View>
      {isDisplayingChat ? <ChatRoom /> : null }
      </>
    );
  }

  export default Chats; 