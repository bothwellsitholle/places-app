import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      {/* Search Bar  */}
      <Pressable style={styles.searchButton} onPress={() => {console.warn('Search button clicked!')}}>
          <Fontisto name="search" color="#f15554" size={25}/>
          <Text style={styles.searchButtonText}> Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>

      {/* Title  */}
        <Text style={styles.title}>Go Near</Text>

      {/* Button  */}
      <Pressable style={styles.button} onPress={() => {console.warn('Explore button clicked!')}}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
      </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
