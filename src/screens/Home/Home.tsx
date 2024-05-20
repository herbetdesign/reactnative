import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import styles from './Style';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { BatButton } from '../../components/BatButton/BatButton';

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>
      <View style={styles.inputContainer}>
        <BatButton/>
      </View>
        
        <ExpoStatusBar style='auto' />
    </View>
  );
}