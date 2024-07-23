import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import Footer from '../components/Footer'
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons

import Crousal from '../components/Crousal'
export default function AssetExample() {
    const images = [
    require('../assets/(1).jpeg'),
    require('../assets/(1).jpeg'),
    require('../assets/(9).jpeg')
  
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
    <Text style = {styles.title}>Web Services</Text>
   
    <Text style = {styles.sectionTitle}>Full-Stack Development Frontend Development:</Text>
      <Text style={styles.paragraph}>
       

 Using React, we create interactive and responsive user interfaces. Our expertise includes state management (Redux, Context API), component lifecycle methods, and hooks. Backend Development: With Node.js and Express.js, we build robust server-side applications, RESTful APIs, and middleware solutions. Database Management: Proficiency in MongoDB allows us to design efficient database schemas, perform data modeling, and optimize performance. Custom Solutions E-Commerce Platforms: Tailored online stores with advanced features like shopping carts, payment gateways, and inventory management. Content Management Systems: Scalable CMS solutions that provide easy content updates and management. Single Page Applications: Fast and efficient SPAs that enhance user experience and engagement. Quality Assurance Testing and Debugging:
      </Text>
      
      <Footer/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    margin: 2,
    marginTop: 0,
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  color : 'rgb(128,136,54)',
  },
  sectionTitle: {
    margin: 2,
    marginTop: 10,
  
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  paragraph: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    
  },
});