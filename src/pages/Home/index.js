/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {colors, fonts} from '../../utils';
import {Gap} from '../../component';
import {useUserContext} from '../../provider/UserContext';

const Home = ({route, navigation}) => {
  const {userData} = useUserContext();
  const {name, hobby, umur} = userData;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.headerText}>{name}</Text>
      ),
    });
  }, [name, navigation]);

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Selamat Datang di halaman {name} !</Text>
      <Text style={styles.text}>Nama : {name}</Text>
      <Gap height={10} />
      <Text style={styles.text}>Usia : {umur}</Text>
      <Gap height={10} />
      <Text style={styles.text}>Hobi : {hobby}</Text>
      <Gap height={10} />
      <Text style={styles.text}>Lokasi : Jakarta</Text>
    </ScrollView>
  );
};

Home.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <Text style={styles.headerText}>{navigation.getParam('name', '')}</Text>
  ),
});

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
    marginBottom: 40,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  headerText: {
    marginRight: 20,
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
