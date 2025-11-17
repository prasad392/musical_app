
import { View, Text, Modal, StyleSheet, Platform, StatusBar, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import Modalheader from '../../modalheader/modalheader';
import OTPSuccessModal from '../../OTPSuccessModal';


type props ={
    visible: boolean;
    onClose: ()=>void;
    mainonclose: ()=>void;
    newPhone: string;
    handlePhoneUpdate: (phone: string)=>void;
}

const UpdtPhoneOTPmodal:React.FC<props> = ({visible,onClose,mainonclose,newPhone,handlePhoneUpdate})=> {
    const [value,setValue] = useState('');
    const CELL_COUNT = 6;
    const [sendOTP,setSendOTP] = useState(false)

  return (
    <Modal
    visible={visible}
    animationType='fade'
    transparent={true}
    onRequestClose={onClose}
    >
        <View style={styles.overlay}>
            <Modalheader headerText='Update Email ID' onClose={onClose}/>
             <View style={styles.mailHead}>
                <Ionicons name='document-lock' color={"#ffd60a"} size={80}/>
                <Text style={{color:'#fff',fontSize:22,fontWeight:300,textAlign:'center'}}>
                    Enter the 6 digit code we sent to the  {newPhone} Wrong number?</Text>
            </View>
            <CodeField
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType = 'number-pad'
            renderCell={({index,symbol,isFocused})=>(
                <View
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                >
                    <Text style={styles.text} >
                        {symbol || (isFocused ? <Cursor/>: null)}
                    </Text>
                </View>
            )}
            />
            <TouchableOpacity style={styles.sendBox}
            onPress={()=>{
                setSendOTP(true)
            }}
            >
                <Text style={{color:'#ffd60a', fontSize:22}}>Send Code </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.verifyBox}
            onPress={()=>{
                onClose()
                mainonclose()
                handlePhoneUpdate(newPhone)
            }}
            >
                <Text style={{color:'#fff',fontSize:32}}>Verify</Text>
            </TouchableOpacity>
        </View>

        <View style={{display : sendOTP ? 'flex' : 'none'}}>
            <OTPSuccessModal
            visible={sendOTP}
            onClose={()=>setSendOTP(false)}
            otp='123456'
            />
        </View>
    </Modal>
  )
}

export default UpdtPhoneOTPmodal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    mailHead:{
        width:'80%',
        marginHorizontal:'auto',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20
    },
    
    codeFieldRoot: { marginTop: 20,width:'90%',marginHorizontal:'auto' },
    cell: {
        width: 40,
        height: 50,
        borderWidth: 2,
        borderColor: '#FFD700',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius:8
    },
    focusCell: {
        borderColor: '#FFD700', // Yellow highlight
    },
    text: { fontSize: 24, color: '#fff' },
    verifyBox:{
        backgroundColor:'#FFD700',
        marginVertical:40,
        width:'90%',
        marginHorizontal:'auto',
        height:70,
        borderRadius:12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendBox:{
        marginTop:40,
        width:'90%',
        marginHorizontal:'auto',
        height:70,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

