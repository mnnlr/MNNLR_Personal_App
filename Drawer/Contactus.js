import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import axios from 'axios';
export default function Contactus() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message , setmessage] = useState('')



  const handle = async () => {
    if (name === '' || email === '' || message === '') {
      alert("Please fill in all the fields");
      return;
    }
  
    try {
      console.log(name + " " + email + " " + message)
      console.warn(name + " " + email + " " + message)
      const res = await axios.post("http://192.168.29.40:5000/contact", { name, email, message }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      })
      console.log(res.data)
    } catch (err) {
      console.warn(err.message)
      console.log(err.message)
    }
  };

    return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
          <Image
            source={require('../assets/Contact.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.contactInfo}>
            Contact Information:
          </Text>
          <Text style={styles.contactInfoItem}>
            Email: mnnlr.ceo@gmail.com
          </Text>
          <Text style={styles.contactInfoItem}>
            Phone: +918309560480
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText = {(e)=>setname(e)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
             onChangeText = {(e)=>setemail(e)}
          />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Message"
            multiline
            numberOfLines={4}
             onChangeText = {(e)=>setmessage(e)}
          />
          <TouchableOpacity onPress = {handle} style={styles.button}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  contactInfoItem: {
    marginBottom: 5,
    fontSize: 16,
  },
});


