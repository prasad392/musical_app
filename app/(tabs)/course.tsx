import { View, Text, StatusBar, StyleSheet, ScrollView, Platform } from 'react-native';
import React from 'react';

const Course = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D1D1D" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={{color:'#fff'}}>
          Welcome to Course Page
        </Text>
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