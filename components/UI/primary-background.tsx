import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { COLORS } from '../../models/util';

function PrimaryBackground(): JSX.Element {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        networkActivityIndicatorVisible={false}
        backgroundColor={COLORS.PRIMARY}
      />

      {/* Background */}
      <View style={styles.background}></View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.PRIMARY,

    // Positioning
    zIndex: -100,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default PrimaryBackground;
