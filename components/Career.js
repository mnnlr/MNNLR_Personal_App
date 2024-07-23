import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Crousal from './Crousal';
import Footer from './Footer'
export default function Career() {
    const image1 = require('../assets/(2).jpeg');
  const image2 = require('../assets/(3).jpeg');
  const image3 = require('../assets/(7).jpeg');

  const images = [image1, image2, image3];

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Crousal images={images} />
        <Text style={styles.title}>Man Need New Life Resources</Text>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.paragraph}>
          We are a dedicated team of website developers specializing in the MERN stack (MongoDB, Express.js, React, Node.js). Our journey began with the creation of our own website, and since then, we have been committed to delivering high-quality, dynamic, and responsive web applications that meet the unique needs of our clients. Our expertise lies in transforming ideas into functional, user-friendly web solutions.
          
          At the core of our services is a blend of creativity and technical proficiency. Whether you need a complex e-commerce platform, a robust content management system, or a sleek portfolio site, we leverage the power of the MERN stack to deliver exceptional results. Our approach focuses on creating seamless user experiences and scalable applications that drive success.
</Text>
         <Text style={styles.sectionTitle}>What We Offer</Text> 
<Text style={styles.paragraph}> Full-Stack Development
          Frontend Development: Using React, we create interactive and responsive user interfaces. Our expertise includes state management (Redux, Context API), component lifecycle methods, and hooks.
          Backend Development: With Node.js and Express.js, we build robust server-side applications, RESTful APIs, and middleware solutions.
          Database Management: Proficiency in MongoDB allows us to design efficient database schemas, perform data modeling, and optimize performance Custom Solutions.
          E-Commerce Platforms: Tailored online stores with advanced features like shopping carts, payment gateways, and inventory management. Content Management Systems: Scalable CMS solutions that provide easy content updates and management.
          Single Page Applications: Fast and efficient SPAs that enhance user experience and engagement.
          Quality Assurance Testing and Debugging: Thorough testing processes to ensure robust and error-free applications.
          Responsive Design: Ensuring that our applications work seamlessly across various devices and screen sizes. Continuous Support
          Maintenance and Updates: Ongoing support to keep your applications running smoothly and up-to-date with the latest advancements.</Text>
         
         <Text style={styles.sectionTitle}> Why Choose Us?</Text> 
         <Text style={styles.paragraph}> Expertise in MERN Stack: Deep understanding and extensive experience with the MERN stack enable us to deliver top-notch web solutions. Client-Centric Approach: We prioritize our clients' needs and work closely with them to achieve their vision.
          Commitment to Quality: Our focus is on delivering high-quality applications that are both functional and aesthetically pleasing.
          Timely Delivery: Efficient project management ensures that we meet deadlines without compromising on quality.
          Looking for Projects
          We are actively seeking new projects where we can apply our skills and expertise to deliver outstanding web solutions. If you have a project that requires professional web development services, we would love to collaborate with you. Let's work together to create innovative web applications that drive your business forward.</Text>

         
          <Text style={styles.sectionTitle}>Get in Touch</Text>
<Text  style={styles.paragraph}>
          To discuss your project requirements and explore how we can assist you, please reach out to us at [contact email/website link]. We look forward to partnering with you and bringing your vision to life!</Text>
          
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
    TextDecoder : 'italic'
  },
  sectionTitle: {
    margin: 2,
    marginTop: 10,
  color : 'rgb(92,70,156)',
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

