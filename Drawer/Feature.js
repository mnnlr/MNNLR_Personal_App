import React from 'react';
import { View, StyleSheet,SafeAreaView,ScrollView  } from 'react-native';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer'
const Features = () => {
  return (
    <View style={styles.container}>
    <ScrollView >
      <FeatureCard
        title="App Development"
        description="Build robust and user-friendly mobile applications."
        destination="Appdev"
      />
      <FeatureCard
        title="Web Development"
        description="Create custom web solutions tailored to your business needs."
        destination="WebDev"
      />
         <FeatureCard
        title="Ecommerce"
        description="  Build your online store with our comprehensive e-commerce solutions, including shopping carts, payment gateways, and inventory management."
        destination="Ecommerce"
      />
       <FeatureCard
        title="Digital Marketing"
        description="  Enhance your online presence and reach your target audience with our digital marketing strategies, including SEO, social media marketing, and email campaigns."
        destination="Digitalmarketing"
      />
      <Footer/>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default Features;

