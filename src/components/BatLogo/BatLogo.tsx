import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/logo.png'

export function BatLogo() {
  return (
    <View>
        <Text style={styles.title}>GERADOR DE SENHA</Text>
        <Image source={batLogo} style={styles.logo}/>
    </View>
  );
}