/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { colors, fonts } from '../../utils';
import { useUserContext } from '../../provider/UserContext';

const Maps = ({route, navigation}) => {
  const { userData } = useUserContext();
  const { name } = userData;

  const jakartaLocation = { latitude: -6.2088, longitude: 106.8456 };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.headerText}>{name}</Text>
      ),
    });
  }, [name, navigation]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: jakartaLocation.latitude,
          longitude: jakartaLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: jakartaLocation.latitude,
            longitude: jakartaLocation.longitude,
          }}
          title="Jakarta"
          description="Kota Ibukota Negara Indonesia"
        />
      </MapView>
    </View>
  );
};

Maps.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <Text style={styles.headerText}>{navigation.getParam('name', '')}</Text>
  ),
});

export default Maps;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  headerText: {
    marginRight: 20,
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
