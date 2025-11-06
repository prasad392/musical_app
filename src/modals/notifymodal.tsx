import { View, Text, StyleSheet, Modal, StatusBar, Platform, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

type props ={
  visible:boolean;
  onClose:()=>void;
}
const Notifymodal:React.FC<props> = ({visible,onClose}) => {
  return (
      <>
      <Modal
        visible={visible}
        transparent={true}
        animationType='none'
        onRequestClose={onClose}
        >
          <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View style={styles.notifyHeader}>
                <TouchableOpacity onPress={onClose} style={styles.closebtn}>
                  <Ionicons name='chevron-back-circle-outline' size={42} color={'#fff'}/>
                </TouchableOpacity>
                <View>
                  <Text style={styles.notifytxt}>Notifications</Text>
                </View>
              </View>
              <View style={styles.nonotify}>
                <Image source={require('@/assets/home/no_notification-removebg-preview.png')} style={styles.image}/>
                <Text style={styles.nonotifytxt}>You've covered all the Notifications</Text>
              </View>
            </ScrollView>
          </View>
      </Modal>
      </>
    
  )
}

export default Notifymodal

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1D1D1D',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    notifyHeader:{
      marginVertical:10,
      backgroundColor:'#2D2D2D',
      height:85,
      alignItems:'center',
      justifyContent:'flex-start',
      flexDirection:'row',
      gap:50,
      width:'98%',
      marginHorizontal:'auto',
      borderBottomEndRadius:12,
      borderBottomStartRadius:12
    },
    closebtn:{
      marginLeft:30
    },
    notifytxt:{
      fontWeight:600,
      fontSize:24,
      color:'#fff'
    },
    nonotify:{
      width:'100%',
      height:400,
      marginTop:50,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    },
    nonotifytxt:{
      color:'#fff',
      width:200,
      textAlign:'center',
      fontSize:22
    },
    image:{
      width:120,
      height:120
    }
})