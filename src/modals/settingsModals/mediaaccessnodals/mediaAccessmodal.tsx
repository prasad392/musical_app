import { View, Text, Modal, StyleSheet, Platform, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Modalheader from '../../modalheader/modalheader';
import SettingItemCards from '@/src/components/customcards/settingcards/settingItemCards';
import { Switch } from 'react-native-gesture-handler';

type props ={
    visible: boolean;
    onClose: ()=>void;
}

const MediaAccessmodal:React.FC<props> = ({visible,onClose}) => {
    const Items = ['Location','Message alert','Microphone','Camera']
    const [ispause,setIspause] = useState(true)
  return (
    <Modal
    visible={visible}
    onRequestClose={onClose}
    transparent={true}
    animationType='fade'
    >
        <View style={styles.overlay}>
            <Modalheader headerText='Media Access' onClose={onClose}/>
            <Text style={styles.text}>App Permissions</Text>
            {
                Items.map((item,index)=>(
                    <View key={index} style={{marginBottom:20}}>
                        <SettingItemCards
                        ItemName={item}
                        />
                    </View>
                ))
            }
            <View style={styles.pauseBox}>
                <View style={styles.pauseInfo}>
                    <Text style={{color:'#fff',fontSize:22,fontWeight:500}}>Pause app activity if unused</Text>
                    <Text style={{color:'#fff',fontSize:18,fontWeight:300,marginTop:15}}>Auto remove permissions, and stop notifications</Text>
                </View>
                <View style={styles.pauseThumb}>
                    <Switch
                    value={ispause}
                    onValueChange={setIspause}
                    trackColor={{true: '#000', false:'#000'}}
                    thumbColor={ispause? '#ffd60a' : '#3e3e3e'}
                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                    />
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default MediaAccessmodal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    text:{
        color:'#fff',
        marginLeft:20,
        marginVertical:20,
        fontSize:22
    },
    pauseBox:{
        width:'90%',
        marginVertical:20,
        marginHorizontal:'auto',
        height:'auto',
        flexDirection:'row'
    },
    pauseInfo:{
        flex:3,
    },
    pauseThumb:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
    }
})