import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { RoundedCard } from '../../components/RoundedCard/index.js';
import styles from './styles';

export default function DashboardPage() {

  let [personagens, setPersonagens] = useState([]);

  const baseURL = 'https://swapi.dev/api'

  RequestApi(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setPersonagens(objeto.data);
      })
  }, []);

  const [loaded] = useFonts({
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('../../assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('../../assets/fonts/MerriweatherSans-Regular.ttf'),
  });

  return (
    <View style={styles.GlobalContainer}>
      <View style={styles.MainContainer}>
        <RoundedCard 
          name={''} 
          altura={''} 
          peso={''} 
          cabelo={''} 
        />
      </View>
    </View>
  );
}
