
import { View, Text, Modal, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'
import Modalheader from '../modalheader/modalheader';

type props={
    visible:boolean;
    onClose:()=>void;
}

const Coursemodal:React.FC<props> = ({visible,onClose}) => {
    return (
        <Modal
        visible={visible}
        transparent={true}
        animationType='fade'
        onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <Modalheader headerText='Courses' onClose={onClose}/>
            </View>
        </Modal>
    )
}

export default Coursemodal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    }
})