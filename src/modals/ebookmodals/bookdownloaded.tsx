
import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
type props ={
    visible:boolean;
}

const Bookdownloaded:React.FC<props> = ({visible}) => {
  return (
    <Modal
    visible={visible}
    transparent={true}
    animationType='fade'
    >
        <View style={styles.overlay}>
            <View style={styles.modalBox}>
                <View style={styles.successBox}>
                    <View style={{width:90,height:90,borderRadius:'50%',backgroundColor:'#ecb935ff',alignItems:'center',justifyContent:'center'}}>
                  <Text><Ionicons name="checkmark" size={60} ></Ionicons></Text>
                </View>
                </View>
                <Text style={{fontSize:28,textAlign:'center',fontWeight:600}}>Ebook Downloaded Successfully</Text>
            </View>
        </View>
    </Modal>
  )
}

export default Bookdownloaded

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: '80%',
        backgroundColor: '#EBEBEB',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        height:'auto'
    },
    successBox:{
        width:140,
        backgroundColor:'#ffd770ff',
        height:140,
        marginBottom:10,
        borderRadius:'50%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})