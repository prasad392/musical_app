import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import Progressbar from '@/src/progressbar/progressbar';

type props ={
    visible:boolean;
}

const Bookdownloding:React.FC<props> = ({visible}) => {
  return (
    <Modal
    visible={visible}
    transparent={true}
    animationType='fade'
    onRequestClose={() => console.log('Modal closed')}
    >
        <View style={styles.overlay}>
            <View style={styles.modalBox}>
                <Text style={{fontSize:28,textAlign:'center',fontWeight:600}}>Your Ebook is getting Ready</Text>
                <Text style={{fontSize:18,textAlign:'center',}}>Get ready for musical insights and inspiration from our guide!</Text>
                <View style={styles.progressbox}>
                    <Progressbar progress={70}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default Bookdownloding

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
        height:200
    },
    progressbox:{
        width:'100%',
        height:40,
        marginVertical:10
    }
})