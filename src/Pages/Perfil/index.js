import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';

import avatar from '../../assets/img/avatar.png';

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Image source={avatar}></Image>
          <Text>José da Silva</Text>
          <Text>Membro desde 01/02/2017</Text>
          <Text>Status: VIP</Text>
        </View>
      </SafeAreaView>
    </>
  );
}