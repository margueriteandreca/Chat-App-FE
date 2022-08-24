import * as React from 'react';
import { useState, useEffect } from "react";
import { Image, Text, View, TextInput, StyleSheet } from 'react-native';
import { SearchBar } from "@rneui/themed";

function FilterChats({filteredChats, search, setSearch}) {

    const handleonChangeText = (search) => {
        setSearch(search)
    }


    return (
        <View style={{width: "100%"}}>
        <SearchBar
        containerStyle={searchBarStyles.outer}
        inputContainerStyle={searchBarStyles.inner}
        inputStyle={searchBarStyles.text}
        placeholder="Search Chats"
        onChangeText={handleonChangeText}
        value={search}/>
        </View>
    )
}



const searchBarStyles = {
    outer: {
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    inner: {
        backgroundColor: "#d6d6d6",
        borderRadius: 10
    },
    text: {
        color: "#5d5d5d"
    }


}
export default FilterChats;