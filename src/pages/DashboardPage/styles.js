import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  GlobalContainer: {
    /* 
    * Color Pallets:
    *
    * Main:
    * Coral Red: #F86041
    * Off-White: #F7F7F7
    * Dark Purple: #26262B
    * 
    * Green (Food, Store):
    * Light Green (Buttons): #6D9773
    * Dark Green (Big Details): #0C3A2F
    * White (Background): #FFFFFF
    * Yellow (Star Icons and Small Details): #FFB902
    * 
    * Purple and Pink (Store, Portfolio):
    * Gray-Ping (Background Details): #E5958E
    * Beige-Pink (Big Details): #FDB096 
    * Off-White (Buttons): #FFEBD0
    * Dark Purple (Background): #220440
    * Yellow (Star Icons and Small Details): #FFB902
    * 
    * Blue (HealthCare):
    * Cyan (Small Details): #5CEAD2
    * Dark Blue (Big Details): #04477B
    * Sky Blue (Background Details): #18C8F6
    * White (Background): #FFFFFF
    * Blue (Buttons): #249CF3
    * 
    */
    gap: 16,
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  },
  OrangeBack:{
    height: 218,
    width: '100%',
    gap: 16,
    paddingTop: 14,
    borderBottomEndRadius: 32,
    borderBottomStartRadius: 32,
    backgroundColor: "#F86041",
    marginBottom: 48,
  },
  Profile: {
    gap: 16,
    paddingInline: '1rem',
  },
  Person: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'end',
  },
  ProfilePicture: {
    height: 80,
    width: 80,
  },
  MainContainer:{
    width: '100%',
    gap: 8,
    paddingInline: '1rem',
  },
  Container: {
    gap: '16px',
    width: '100%',  
  },
  Hero: {
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  Name: {
    fontFamily: 'PoppinsBold',
    fontSize: '32px',
    color: '#F7F7F7',
  },
  Text: {
    fontFamily: 'MerriweatherLight',
    color: '#26262B',
  },
});

export default styles;