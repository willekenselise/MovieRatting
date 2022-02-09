import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Item from '../components/item';

const film = [
  {
      titre: "Inception",
      description: "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable",
      note: "9",
  },
  {
      titre: "Interstellar",
      description: "Dans un proche futur, la Terre est devenue hostile pour l'homme. Les tempêtes de sable sont fréquentes et il n'y a plus que le maïs qui peut être cultivé, en raison d'un sol trop aride. Cooper est un pilote, recyclé en agriculteur, qui vit avec son fils et sa fille dans la ferme familiale.",
      note: "8.5",
  }
];


export default function ListFilm({data}) {
  const afficheInfo = (item) =>{
    console.log(item);
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        {film && film.map((item, index)=>(
          <Item key={index}
                 onPress={()=>afficheInfo(item)}
                 style={styles.button}
                 item={item}/>
        ))}
          {data && data.map((item, index)=>(
          <Item key={index}
                 onPress={()=>afficheInfo(item)}
                 style={styles.button}
                 item={item}/>
        ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
    display: 'flex',
    flexWrap: 'wrap',
    gap : "20px",
  },
  button: {
    alignItems: "center",
    width : "80%",
    margin: "20px",
    padding: 10,
    backgroundColor: '#222',
    borderRadius : "5px",
  },
});