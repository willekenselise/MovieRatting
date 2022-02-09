import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet, View} from 'react-native'

export default function Item({item, style, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
                <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={styles.image} />
                <Text style={styles.titre}>{item.titre}</Text>
                <Text style={styles.note}>{item.note}/10</Text>   
                <Text style={styles.description}>{item.description}</Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        width: "120px",
        height: "160px",
        float:"left",
    },
    description:{
        color: "#FFFFFF",
        fontSize: "16px",
    },
    note:{
        color: "#CCCCCC",
        fontSize: "16px",
    },
    titre:{
        color: "#FFFFFF",
        fontSize: "20px",
    },

  });