import { View, Text, StatusBar, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Unreadmsgcard from '@/src/components/customcards/chatcards/unreadmsgcard';
import { MessageFilterData } from '@/src/data/messagesData';

const Settings = () => {
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D1D1D" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

