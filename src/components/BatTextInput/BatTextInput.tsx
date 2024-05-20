import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './BatTextInputStyles';

interface BarTextInputProps{
  pass:string
}

export function BatTextInput(props:BarTextInputProps) {
  return (
        <TextInput 
          style={styles.inputer} 
          placeholder='pass' 
          value={props.pass}
        />
  );
}