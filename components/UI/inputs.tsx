import React, { useEffect, useState } from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../../models/util';
import Icon from 'react-native-vector-icons/Feather';

interface Props extends TextInputProps {
  icon?: string;
  invalid?: boolean;
  isDirty?: boolean;
  invalidMsg?: string;
}

export function BasicInput(props: Props): React.JSX.Element {
  // Input Style
  const [inputStyle, setInputStyle] = useState<TextStyle>({
    color: COLORS.GREY,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY,
    marginVertical: 10,
    width: '100%',
    paddingLeft: props.icon ? 30 : 10,
    fontFamily: 'Kanit-Regular',
    fontSize: 15,
  });

  // Secure Icon & validation
  const [eyeIcon, setEyeIcon] = useState<'eye' | 'eye-off'>('eye');
  const [isInputSecured, setIsInputSecured] = useState<boolean>(false);

  // Set initial values
  useEffect(() => {
    setIsInputSecured(props.secureTextEntry ?? false);
  }, []);

  const changeInputStyle = (type: 'focus' | 'blur') => {
    switch (type) {
      case 'focus':
        setInputStyle({
          ...inputStyle,
          borderBottomColor: COLORS.PRIMARY,
          color: COLORS.PRIMARY,
        });
        break;
      case 'blur':
        setInputStyle({
          ...inputStyle,
          borderBottomColor: COLORS.GREY,
          color: COLORS.GREY,
        });
      default:
        return;
    }
  };

  return (
    <>
      <View style={styles.container}>
        {/* Initial Icon */}
        {props.icon && <Icon name={props.icon} color={inputStyle.color} style={styles.icon} />}

        {/* Actual Input field */}
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={inputStyle.color}
          style={[inputStyle, props.invalid && props.isDirty ? styles.invalid : undefined]}
          secureTextEntry={isInputSecured}
          // Actions
          onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            changeInputStyle('focus');
            props.onFocus && props.onFocus(e);
          }}
          onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            changeInputStyle('blur');
            props.onBlur && props.onBlur(e);
          }}
          // Extra stuff
          spellCheck={props.spellCheck ?? false}
          keyboardType={props.keyboardType ?? 'default'}
          // Binding
          value={props.value}
          onChangeText={props.onChangeText}
        />

        {/* Secure Icon */}
        {props.icon && props.secureTextEntry && (
          <TouchableOpacity
            style={styles.secureBtn}
            onPress={() => {
              setIsInputSecured(!isInputSecured);
              setEyeIcon(eyeIcon === 'eye' ? 'eye-off' : 'eye');
            }}>
            <Icon name={eyeIcon} color={inputStyle.color} style={styles.secureIcon} />
          </TouchableOpacity>
        )}
      </View>
      {/* Error message */}
      {props.invalid && props.isDirty && <Text style={styles.invalidText}>{props.invalidMsg}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    alignSelf: 'center',
    padding: 5,
    position: 'absolute',
    fontSize: 15,
  },
  secureBtn: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    padding: 5,
    position: 'absolute',
    right: 0,
    marginTop: 20,
  },
  secureIcon: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
  },
  invalid: {
    borderBottomColor: 'red',
  },
  invalidText: {
    color: 'red',
  },
});
