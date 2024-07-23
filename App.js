import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons
import AboutDrawer from './Drawer/AboutDrawer';
import Feature from './Drawer/Feature';
import { enableScreens } from 'react-native-screens';
import HomeDrawer from './Drawer/HomeDrawer';
import Web_service from './components/Web_service';
import App_dev from './components/App_dev';
import Career from './components/Career';
import Digital_marketing from './components/Digital_marketing';
import Ecommerce from './components/Ecommerce';
import {Network} from 'expo'

import Contactus from './Drawer/Contactus'
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const CustomDrawerContent = ({ navigation }) => {
  
  return (
   <View style={styles.drawerContainer}>
 
<DrawerItem
        label="Home"
        onPress={() => navigation.navigate('Home')}
        icon={({ color, size }) => <Icon name="home-outline" color={color} size={size} />}
        labelStyle={styles.drawerItemLabel}
      />
      <DrawerItem
        label="About"
        onPress={() => navigation.navigate('About')}
        icon={({ color, size }) => <Icon name="information-circle-outline" color={color} size={size} />}
        labelStyle={styles.drawerItemLabel}
      />
      <DrawerItem
        label="Feature & Service"
        onPress={() => navigation.navigate('Feature & service')}
        icon={({ color, size }) => <Icon name="cog-outline" color={color} size={size} />}
        labelStyle={styles.drawerItemLabel}
      />
      <DrawerItem
        label="Contact us"
        onPress={() => navigation.navigate('Contact us')}
        icon={({ color, size }) => <Icon name="call-outline" color={color} size={size} />}
        labelStyle={styles.drawerItemLabel}
      />
    </View>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'WebDev') {
            iconName = focused ? 'code-slash' : 'code-outline';
          } else if (route.name === 'Appdev') {
            iconName = focused ? 'phone-portrait' : 'phone-portrait-outline';
          } else if (route.name === 'Career') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Digitalmarketing') {
            iconName = focused ? 'megaphone' : 'megaphone-outline';
          } else if (route.name === 'Ecommerce') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f0f0f0',
          paddingBottom: 5,
         
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
      <Tab.Screen name="WebDev" component={Web_service} />
      <Tab.Screen name="Appdev" component={App_dev} />
      <Tab.Screen name="Career" component={Career} />
      <Tab.Screen name="Digitalmarketing" component={Digital_marketing} />
      <Tab.Screen name="Ecommerce" component={Ecommerce} />
    </Tab.Navigator>
  );
}

export default function App() {
  enableScreens();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={styles.drawerStyle}
        drawerContent={({ navigation }) => (
          <CustomDrawerContent navigation={navigation} />
        )}
        screenOptions={{
          drawerActiveTintColor: 'black',
          drawerInactiveTintColor: 'black',
          drawerItemStyle: { marginVertical: 5 },
          headerStyle: { backgroundColor: 'rgb(160,228,203)' },
          headerRight: () => (
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={require('./M.jpeg')}
            />
          ),
        }}
      >
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="About" component={AboutDrawer} />
        <Drawer.Screen name="Contact us" component={Contactus} />
        <Drawer.Screen name="Feature & service" component={Feature} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    drawerContainer: {
    backgroundColor: 'rgb(160,228,203)',
    flex: 1,
    paddingTop: 50, // Adjust the top padding as needed
  },
  drawerStyle: {
    backgroundColor: 'rgb(160,228,203)',
  },
  drawerItemLabel: {
    color: 'black',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  drawerStyle: {
  backgroundColor: 'rgb(242,151,39)',
}
});
