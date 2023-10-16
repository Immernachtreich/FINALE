import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import { COLORS } from '../../models/util';

type Props = {
  onPressEvent?: () => any;
  additionalBtnStyle?: TextStyle | ViewStyle | ImageStyle;
};

export function PreviousButton(props: Props): React.JSX.Element {
  return (
    <>
      <TouchableOpacity
        touchSoundDisabled={true}
        onPress={props.onPressEvent}
        style={[styles.btn, props.additionalBtnStyle]}>
        <Image source={require('../../assets/images/previous.png')} style={styles.img} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 40,
    padding: 10,
  },

  img: {
    width: 25,
    height: 25,
    tintColor: COLORS.WHITE,
  },
});
