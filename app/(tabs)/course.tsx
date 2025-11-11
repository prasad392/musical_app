import { View, Text, StatusBar, StyleSheet, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import Coursemodal from '@/src/modals/coursemodal/coursemodal';

const Course = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D1D1D" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
       {/* <Text style={{color:'#fff'}}>check in page</Text> */}
      </ScrollView>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems:'center',
    justifyContent:'center'
  },
});