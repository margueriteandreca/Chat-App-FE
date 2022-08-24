import * as React from 'react';
import { useState, useEffect } from "react";
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

function EditProfile() {
    return (
        <View>
        <Text>Here we edit profile pic and status</Text>
        <TouchableOpacity style={deleteStyles.container}>
            <Text style={deleteStyles.text}>
                Delete account
            </Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%"
    }

})

const deleteStyles = StyleSheet.create({
    text: {
        color: "red"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
        height: 50,
        width: "100%",
        backgroundColor: "white"
    }
    
    
  })


export default EditProfile;