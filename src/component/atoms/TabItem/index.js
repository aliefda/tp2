/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {
  IconInput,
  IconInputActive,
  IconMaps,
  IconMapsActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets/icon';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    if (title === 'Profile') {
      return active ? <IconInputActive /> : <IconInput />;
    }
    if (title === 'Maps') {
      return active ? <IconMapsActive /> : <IconMaps />;
    }
    return <IconProfile />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
