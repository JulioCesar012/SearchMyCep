import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Logo from '../../assets/location.png';


const About = () => {
  return (
    <LinearGradient style={{ height: '100%', width: '100%' }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#314755', '#26a0da']}>
       <>
       <View style={styles.container}>
        <Image style={{ width: '100%', maxHeight: 130, resizeMode: 'contain', marginBottom: 35, marginTop: 60 }} source={Logo} alt="Localidade CEP" />
            <ScrollView style={styles.scrollAbout}>
                <Text style={styles.textAbout}>
                Esse app foi desenvolvido com o objetivo de ajudar pessoas a encontrar os ceps de seu endereço. 
                Devido a mudanças de cep em algumas cidades isso não foi anúnciado de forma global, 
                por isso se você ainda não sabe qual seu cep, digite no nosso app e ele te mostrará. Atenção para não errar seu endereço!
                </Text>
            </ScrollView>
        </View>
       </>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        height: '100%',
        backgroundColor: 'transparent'
    },
    scrollAbout: {
        width: '90%',
        maxHeight: 290,
        padding: 10,
        backgroundColor: '#26a0da',
        borderRadius: 6
    },
    textAbout: {
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    }
})

export default About;