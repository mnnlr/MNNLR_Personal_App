import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Asset } from 'expo-asset';
import Crousal from './Crousal';
import Footer from './Footer'
export default function App_dev() {

 const image1 = require('../assets/(5).jpeg');
  const image2 = require('../assets/(4).jpeg');
  const image3 = require('../assets/(8).jpeg');
  const images = [image1, image2, image3];

  return (
    
      <View style={styles.container}>
      <ScrollView>
      <Crousal images={images} />
      <View style={styles.textContainer}>
      <Text style = {styles.title}>App Development</Text>
        <Text style={styles.paragraph}>
         Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants (PDA), enterprise digital assistants (EDA), or mobile phones. Such software applications are specifically designed to run on mobile devices, taking numerous hardware constraints into consideration. Common constraints include CPU architecture and speeds, available memory (RAM), limited data storage capacities, and considerable variation in displays (technology, size, dimensions, resolution) and input methods (buttons, keyboards, touch screens with or without styluses). These applications (or 'apps') can be pre-installed on phones during manufacturing or delivered as web applications, using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a web browser. Mobile app development has been steadily growing in terms of revenues and jobs created. A 2013 analyst report estimates there are 529,000 direct app economy jobs within the EU of which there are 28 members (including the UK), 60 percent of which are mobile app developers.
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
  paragraph: {
    margin: 2,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
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
});