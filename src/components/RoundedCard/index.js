import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export function RoundedCard(props){
    const styles = StyleSheet.create({
        RoundedCard:{
            width: '100%',
            height: 92,
            borderRadius: 28,
            backgroundColor: '#F7F7F7',
            paddingInline: 24,
            paddingBlock: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        LeftContainer: {
            flexDirection: 'column',
            justifyContent: 'start',
            gap: 0,
        },
        RightContainer: {
            gap: 8,
            flexDirection: 'row',
        },
        Name: {
            fontFamily: 'PoppinsBold',
            fontSize: '16px',
            color: '#26262B',
        },
        Info: {
            fontFamily: 'MerriweatherRegular ',
            color: '#625C6F',
        },
        Picture: {
            width: 60,
            height: 60,
        }
    })

    return (
        <View style={styles.RoundedCard}>
            <View style={styles.LeftContainer}>
                <Text style={styles.Name}>{props.name}</Text>
                <Text style={styles.Info}>Height: {props.altura}</Text>
                <Text style={styles.Info}>Mass: {props.peso}</Text>
                <Text style={styles.Info}>Hair Color: {props.peso}</Text>
            </View>
            <View style={styles.RightContainer}>
                <Image 
                    source={props.charPic} 
                    style={styles.Picture} 
                    size={60}
                />
            </View>
        </View>
    )
}