import { View, Text, Modal, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'
import Modalheader from '../../modalheader/modalheader';

type props ={
    visible: boolean;
    onClose: ()=>void;
}

const MediaAccessmodal:React.FC<props> = ({visible,onClose}) => {
  return (
    <Modal
    visible={visible}
    onRequestClose={onClose}
    transparent={true}
    animationType='fade'
    >
        <View style={styles.overlay}>
            <Modalheader headerText='Media Access' onClose={onClose}/>
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
    }
})