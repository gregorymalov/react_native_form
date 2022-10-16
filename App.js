import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {

    const [myName, setName] = useState('')
    const [myEmail, setMyEmail] = useState('')

    const getArticlesFromApi = async () => {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      let json = await response.json();
      console.log(json.title)
      // return json.movies;
    }

    const postArticle = async () => {
      fetch('https://nft.raritygram.io/email', {
        method: 'POST',
        body: JSON.stringify({
          "email": {
            "email": [
              "meizumxpro0@gmail.com"
            ]
          },
          "content": {
            "name": myName,
            "email": myEmail
          }
        }),
        headers: {
         'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.warn(json));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./assets/logo.png")} />
      <Text style={styles.title}>API Send Form</Text>
      <TextInput style={styles.email} placeholder="Name"  onChangeText={text => setName(text)} />
      <TextInput style={styles.email} placeholder="Email"  onChangeText={text => setMyEmail(text)} />
      <Pressable style={styles.button} onPress={postArticle}>
      <Text style={styles.text}>Send me email</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '20px',
    fontWeight: '500',
  },
  email: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    margin: 15,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  img: {
    height: "40%",
    width: "40%",
    resizeMode: 'contain'
  }
});
