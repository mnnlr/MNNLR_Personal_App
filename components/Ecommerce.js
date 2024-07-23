import { Text, View, StyleSheet, Image,ScrollView  } from 'react-native';
import Crousal from './Crousal'
import Footer from './Footer'
export default function Ecommerce() {
   const image1 = require('../assets/(9).jpeg');
  const image2 = require('../assets/W(1).jpeg');
  const image3 = require('../assets/AM (3).jpeg');
  const images = [image1, image2, image3];
  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
       <Crousal images={images} />
       <Text style = {styles.title}>Ecommerce</Text>
        <Text style={styles.paragraph}>E-commerce (electronic commerce) is the activity of electronically buying or selling products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. E-commerce is the largest sector of the electronics industry and is in turn driven by the technological advances of the semiconductor industry. Defining e-commerce The term was coined and first employed by Robert Jacobson, Principal Consultant to the California State Assembly's Utilities & Commerce Committee, in the title and text of California's Electronic Commerce Act, carried by the late Committee Chairwoman Gwen Moore (D-L.A.) and enacted in 1984. E-commerce typically uses the web for at least a part of a transaction's life cycle although it may also use other technologies such as e-mail. Typical e-commerce transactions include the purchase of products (such as books from Amazon) or services (such as music downloads in the form of digital distribution such as the iTunes Store). There are three areas of e-commerce: online retailing, electronic markets, and online auctions. E-commerce is supported by electronic business. The existence value of e-commerce is to allow consumers to shop online and pay online through the Internet, saving the time and space of customers and enterprises, greatly improving transaction efficiency, especially for busy office workers, and also saving a lot of valuable time.</Text>
        
          
        <Footer/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
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
  
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    
  },
});