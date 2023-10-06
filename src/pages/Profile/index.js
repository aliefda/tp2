/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Gap, Input } from '../../component';
import { colors, fonts } from '../../utils';
import { useUserContext } from '../../provider/UserContext';

const Profile = ({ navigation }) => {
  const { updateUserData, userData } = useUserContext();
  const [name, setName] = useState(userData.name || '');
  const [umur, setUmur] = useState(userData.umur || '');
  const [hobby, setHobby] = useState(userData.hobby || '');

  const handleSave = () => {
    updateUserData({ name, hobby, umur });
    setName('');
    setUmur('');
    setHobby('');
    navigation.navigate('Home');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.headerText}>{name}</Text>
      ),
    });
  }, [name, navigation]);

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Masukkan Data Profile</Text>
      <Input label="Nama" value={name} onChangeText={text => setName(text)} />
      <Gap height={24} />
      <Input label="Umur" value={umur} onChangeText={text => setUmur(text)} />
      <Gap height={24} />
      <Input label="Hobi" value={hobby} onChangeText={text => setHobby(text)} />
      <Gap height={40} />
      <Button title="Simpan" onPress={handleSave} />
    </ScrollView>
  );
};

Profile.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <Text style={styles.headerText}>{navigation.getParam('name', '')}</Text>
  ),
});

export default Profile;

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
    maxWidth: 153,
  },
  headerText: {
    marginRight: 20,
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
