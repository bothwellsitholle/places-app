/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed'


const post1 = feed[0];


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <SafeAreaView >
      <ScrollView>
      {/* <HomeScreen /> */}
      <Post post={post1 }/>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default App;
