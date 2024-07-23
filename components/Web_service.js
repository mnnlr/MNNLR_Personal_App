import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Crousal from './Crousal';
import Footer from './Footer'
export default function Web_service() {
  const images = [
    require('../assets/01 AM.jpeg'), 
    require('../assets/02 AM (3).jpeg'),
    require('../assets/(9).jpeg')
  
  ];

  return (
    <View style={styles.container}>
    <ScrollView>
    <Crousal images={images} />
      <View style={styles.textContainer}>
      <Text style = {styles.title}>Web development</Text>
        <Text style={styles.paragraph}>
          Full-Stack Development Frontend Development: Using React, we create interactive and responsive user interfaces. Our expertise includes state management (Redux, Context API), component lifecycle methods, and hooks. Backend Development: With Node.js and Express.js, we build robust server-side applications, RESTful APIs, and middleware solutions. Database Management: Proficiency in MongoDB allows us to design efficient database schemas, perform data modeling, and optimize performance. Custom Solutions E-Commerce Platforms: Tailored online stores with advanced features like shopping carts, payment gateways, and inventory management. Content Management Systems: Scalable CMS solutions that provide easy content updates and management. Single Page Applications: Fast and efficient SPAs that enhance user experience and engagement. Quality Assurance Testing and Debugging:
        </Text>
      </View>
      <Footer/>
    </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  textContainer: {
    marginTop: 16, 
  },
  title: {
    margin: 2,
    marginTop: 0,
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color : 'rgb(128,136,54)',
  textDecoration: 'underline', 
  },
  paragraph: {
    margin: 2,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});