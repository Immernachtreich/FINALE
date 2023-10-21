// React Imports
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// Model Imports
import { COLORS } from '../../models/util';
import AnchorLink from './link';

/**
 * A Sidebar component
 * It will open and close on pressing the hamburger button
 */
const NavigationDrawer = (): React.JSX.Element => {
  const [isDrawerActive, setIsDrawerActive] = useState<boolean>(false);

  const changeDrawerStatus = () => setIsDrawerActive(!isDrawerActive);

  return (
    <>
      {/* Hamburger Button */}
      {!isDrawerActive && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={changeDrawerStatus}>
            <Icon name="menu" style={styles.buttonIcon}></Icon>
          </TouchableOpacity>
        </View>
      )}

      {/* Navigation Sidebar */}
      {isDrawerActive && (
        <View style={styles.container}>
          {/* Close Button */}
          <View style={styles.closeBtnContainer}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={changeDrawerStatus}>
              <Icon name="x" style={styles.closeBtnIcon}></Icon>
            </TouchableOpacity>
          </View>

          {/* Navigation List */}
          <View>
            <AnchorLink
              text="Home"
              textStyles={styles.navLink}
              isActive={true}
              icon="home"
            />
            <AnchorLink
              text="Settings"
              textStyles={styles.navLink}
              isActive={false}
              icon="settings"
            />
            <AnchorLink
              text="About"
              textStyles={styles.navLink}
              isActive={false}
              icon="info"
            />
          </View>
        </View>
      )}

      {/* Backdrop */}
      {isDrawerActive && (
        <View style={styles.backdrop} onTouchEnd={changeDrawerStatus} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '60%',
    backgroundColor: COLORS.WHITE,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(100, 100, 100, 0.3)', // slightly transparent
    zIndex: -1,
  },

  buttonContainer: {
    width: '20%',
  },
  button: {
    padding: 20,
  },
  buttonIcon: {
    fontSize: 25,
    color: COLORS.PRIMARY,
  },

  closeBtnContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeBtn: {
    padding: 20,
  },
  closeBtnIcon: {
    fontSize: 25,
    color: COLORS.PRIMARY,
  },

  navLink: {
    fontSize: 20,
    padding: 10,
  },
});

export default NavigationDrawer;
