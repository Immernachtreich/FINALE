/**
 * Component that represents regular anchor tag in HTML
 */
import React, { useEffect, useState } from 'react';
import {
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native-gesture-handler';
import { COLORS } from '../../models/util';
import Icon from 'react-native-vector-icons/Feather';

interface Props extends TouchableOpacityProps {
  text: string;
  textStyles?: TextStyle | ViewStyle | ImageStyle;
  btnStyles?: TextStyle | ViewStyle | ImageStyle;
  icon?: string;
  isActive: boolean;
}

const AnchorLink = (props: Props): React.JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => setIsActive(props.isActive), [props.isActive]);

  return (
    <TouchableOpacity
      style={[styles.btn, props.btnStyles]}
      onPress={props.onPress}>
      {props.icon && (
        <Icon
          name={props.icon}
          style={[styles.text, isActive && styles.active, props.textStyles]}
        />
      )}
      <Text style={[styles.text, isActive && styles.active, props.textStyles]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: { color: COLORS.PRIMARY, fontFamily: 'Kanit-Regular' },
  btn: {
    backgroundColor: 'rgba(0, 0, 0, 0)', // transparent
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  active: { color: COLORS.SECONDARY },
});

export default AnchorLink;
