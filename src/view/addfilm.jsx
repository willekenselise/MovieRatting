import React, {useState, useCallback} from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, Image, ScrollView, Button } from 'react-native'

const item = {
    titre: "Save"
}

const AddFilm = ({data, setData}) => {

    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");
    const [image, setImage] = useState("");
    
    const save = useCallback(() =>{
        setData((state)=>[
            ...state,
            {
                titre: titre,
                description: description,
                note: note,
                image : image,
            }
        ])
    }, [setData, titre, description, note, image])

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Le titre :</Text>
                <TextInput 
                    onChangeText={setTitre} 
                    value={titre} 
                    style={styles.input}/>
                <Text>La description :</Text>
                <TextInput 
                    onChangeText={setDescription} 
                    value={description} 
                    style={styles.textarea} 
                    multiline = {true}
                    numberOfLines = {4}/>
                <Text>La note :</Text>
                <TextInput 
                    onChangeText={setNote} 
                    value={note} style={styles.input} 
                    keyboardType={"numeric"}/>
                <Text>L'image :</Text>
                <TextInput 
                    onChangeText={setImage} 
                    value={image} style={styles.input} />
                <Button 
                    item={item} 
                    onPress={save} 
                    title="Save"/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddFilm;

const styles = StyleSheet.create({
    input: {
      width : "auto",
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    textarea :{
      width : "auto",
      height: 100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    }
  });