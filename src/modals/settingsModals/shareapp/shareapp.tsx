import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity,} from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-root-toast';

type props ={
  visible: boolean;
  onClose: ()=>void;
}

const Shareapp:React.FC<props> = ({visible,onClose}) => {
  const [shareLink] = useState('https://example.com/share-link');
  const handleCopy=()=>{
    Clipboard.setString(shareLink)
    Toast.show('copied to clipboard',{
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      backgroundColor: '#000',
      textColor: '#fff'
    })
  }
  return (
    <>
        <Modal
        isVisible={visible}
        onSwipeComplete={onClose}
        swipeDirection='down'
        style={{margin:0}}
        >
          <View style={styles.overlay}>
              <View style={styles.container}>
                <View style={{alignItems:'center'}}><View style={styles.closer}></View></View>
                <Text style={{color:'#fff',fontSize:24, marginLeft:20,marginVertical:10,fontWeight:600}}>Share</Text>
                <View style={styles.icons}>
                  <View style={styles.iconimg}>
                    <Ionicons name='logo-whatsapp' color={"#fff"} size={42}/>
                    <Text style={{fontSize:18,color:'#fff'}}>Whatsapp</Text>
                  </View>
                  <View style={styles.iconimg}>
                    <Ionicons name='logo-facebook' color={"#fff"} size={42}/>
                    <Text style={{fontSize:18,color:'#fff'}}>Facebook</Text>
                  </View>
                  <View style={styles.iconimg}>
                    <Ionicons name='bluetooth' color={"#fff"} size={42}/>
                    <Text style={{fontSize:18,color:'#fff'}}>Bluetooth</Text>
                  </View>
                </View>
                <View style={styles.horizontalLine}></View>
                <TouchableOpacity onPress={handleCopy}>
                  <View style={styles.copyBox}>
                    <View style={{width:40,height:40,backgroundColor:'#383838',alignItems:'center',justifyContent:'center',borderRadius:90}}><Ionicons name='copy' color={'#fff'} size={22}/></View>
                    <Text style={{color:'#fff',fontSize:18}}>Copy Link</Text>
                  </View>
                </TouchableOpacity>

                <View style={{alignItems:'center',position:'absolute',bottom:0,left:'30%'}}><View style={[styles.closer,{width:200,height:3}]}></View></View>
              </View>
          </View>
        </Modal>
    </>
  )
}

export default Shareapp

const styles = StyleSheet.create({
    overlay:{
      flex:1,
      paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      justifyContent:'flex-end'
    },
    container:{
      backgroundColor:'#2d2d2d',
      height:400,
      width:'100%',
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
    },
    closer:{
      width:80,
      height:7,
      backgroundColor:'#EBEBEB66',
      borderRadius:12,
      marginVertical:10
    },
    icons:{
      width:'90%',
      marginHorizontal:'auto',
      height:100,
      flexDirection:'row',
      alignItems:'center',
      gap:30
    },
    iconimg:{
      alignItems:'center'
    },
    horizontalLine:{
      borderTopWidth:1,
      borderColor:'#fff',
      marginVertical:20
    },
    copyBox:{
      width:'35%',
      marginLeft:20,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:20
    }
})