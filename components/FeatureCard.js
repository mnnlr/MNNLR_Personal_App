import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeatureCard = ({ title, description, destination }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity onPress={handlePress} >
       <View style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </View>
    </TouchableOpacity>
     </View>
    
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color : 'rgb(46,147,123)'
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'rgb(46,147,123)',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FeatureCard;

