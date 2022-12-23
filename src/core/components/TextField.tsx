import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: 'password' | 'text' | 'number';
  onChange?: (value: string) => void;
  marginBottom?: number;
  inputStyle?: any;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  type,
  onChange,
  marginBottom = 20,
  inputStyle,
}) => {
  return (
    <View style={{...styles.inputHolder, marginBottom}}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <View style={styles.textInputWrapper}>
        <TextInput
          secureTextEntry={type && type === 'password'}
          style={{...styles.input, ...inputStyle}}
          placeholder={placeholder}
          placeholderTextColor={'rgba(0,0,0,.7)'}
          value={value}
          onChangeText={(val: string) => onChange && onChange(val)}
        />
      </View>
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  inputHolder: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  inputLabel: {
    marginBottom: 2,
    color: 'rgb(131, 128, 120)',
    fontFamily: 'System-regular',
    fontSize: 15,
    lineHeight: 18,
    flex: 1,
  },
  textInputWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgb(219, 219, 219)',
  },
  input: {
    lineHeight: 18,
    fontSize: 16,
    selectionColor: 'black',
    // flex: 1,
  },
});
