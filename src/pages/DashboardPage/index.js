import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { RoundedCard } from '../../components/RoundedCard/index.js';
import styles from './styles';

export default function DashboardPage() {

  let [personagens, setPersonagens] = useState([]);

  RequestApi(function(){
    fetch('https://swapi.dev/api/people/1')
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
          title={'Tela de Cadastro'} 
          coop={'Bianca Brumatti'} 
          rating={'4.5'} 
          coopImage={require('../../assets/ProfilePictureBianca.png')} 
        />
        <RoundedCard 
          title={'Portifólio'} 
          coop={'Caio Braga'} 
          rating={'4'} 
          coopImage={require('../../assets/ProfilePictureCaio.png')} 
        />
        <RoundedCard 
          title={'Catálogo de Filmes'} 
          coop={'Giselle Souza'} 
          rating={'5'} 
          coopImage={require('../../assets/ProfilePictureGiselle.png')} 
        />
        <RoundedCard 
          title={'Tela de Login'} 
          coop={'Bianca Brumatti'} 
          rating={'5'} 
          coopImage={require('../../assets/ProfilePictureBianca.png')} 
        />
        <RoundedCard 
          title={'Instagram'} 
          coop={'Caio Braga'} 
          rating={'5'} 
          coopImage={require('../../assets/ProfilePictureCaio.png')} 
        />
      </View>
    </View>
  );
}
