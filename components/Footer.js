import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/M.jpeg')} // Update the path to your logo image
      />
      <Text style={styles.paragraph}>
       Man Need New Life Resources
      </Text>
      <Text style={styles.paragraph}> High Quality is our first priority 2024 MNNLR (Man Need New Life Resources). All Rights Reserved.</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => alert('Instagram link pressed')}>
          <Image
            style={styles.socialIcon}
            source={require('../assets/instajpg.jpg')} // Update the path to your social media icon
          />
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => alert('Instagram link pressed')}>
          <Image
            style={styles.socialIcon}
            source={require('../assets/linkden.png')} // Update the path to your social media icon
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgb(198,151,116)',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  paragraph: {
    margin: 15,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  logo: {
    height: 64,
    width: 64,
    marginBottom: 16,
    borderRadius : 50 
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  socialIcon: {
    
    marginHorizontal: 8,
     width: 32, height: 32,borderRadius : 50 
  },
});
