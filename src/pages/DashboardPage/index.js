import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { RoundedCard } from '../../components/RoundedCard/index.js';
import styles from './styles';

export default function DashboardPage() {

  let [personagens, setPersonagens] = useState([]);

  const baseURL = 'https://swapi.dev/api/people'

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setPersonagens(objeto.results);
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
        { personagens.length > 0 ? personagens.map( personagem =>
          <RoundedCard 
          name={personagem.name} 
          altura={personagem.height} 
          peso={personagem.mass} 
          cabelo={personagem.hair_color} 
        />
        ) : <Text style={styles.Text}>Carregando...</Text>}
      </View>
    </View>
  );
}
