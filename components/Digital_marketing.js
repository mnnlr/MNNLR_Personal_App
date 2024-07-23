import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Crousal from './Crousal'
import Footer from './Footer'
export default function Digital_marketing() {
  const image1 = require('../assets/(11).jpeg');
  const image2 = require('../assets/(4).jpeg');
  const image3 = require('../assets/(6).jpeg');
  const images = [image1, image2, image3];
  return (
    <View style={styles.container}>
    <ScrollView>
     <Crousal images={images} />
     <Text style = {styles.title}>Digital Marketing</Text>
      <Text style={styles.paragraph}>
      Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services. Its development during the 1990s and 2000s changed the way brands and businesses use technology for marketing. As digital platforms became increasingly incorporated into marketing plans and everyday life, and as people increasingly used digital devices instead of visiting physical shops, digital marketing campaigns have become prevalent, employing combinations of search engine optimization (SEO), search engine marketing (SEM), content marketing, influencer marketing, content automation, campaign marketing, data-driven marketing, e-commerce marketing, social media marketing, social media optimization, e-mail direct marketing, display advertising, e-books, and optical disks and games have become commonplace. Digital marketing extends to non-Internet channels that provide digital media, such as television, mobile phones (SMS and MMS), callbacks, and on-hold mobile ringtones. The extension to non-Internet channels differentiates digital marketing from online marketing.
      </Text>
      <Footer/>
    </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flex : 1
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
  logo: {
    height: 128,
    width: 128,
  }
});