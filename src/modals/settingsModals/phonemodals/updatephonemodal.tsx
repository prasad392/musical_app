import { View, Text, StyleSheet, Platform, StatusBar, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modalheader from '../../modalheader/modalheader';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import UpdtPhoneOTPmodal from './updtPhoneOTPmodal';
import OTPSuccessModal from '../../OTPSuccessModal';

type props ={
    visible: boolean;
    onClose: ()=>void;
    currentPhone: string;
    handlePhoneUpdate: (phone: string)=>void;
}

const Updatephonemodal:React.FC<props> = ({visible,onClose,currentPhone,handlePhoneUpdate}) => {
    const [clicks,setClicks] = useState({
        updateClick: false,
        isSubmit: false,
        otpdis: false,
    })
    const [newPhone,setNewPhone] = useState('')
  return (
    <Modal
    visible={visible}
    transparent={true}
    animationType='fade'
    onRequestClose={onClose}
    >
        <View style={styles.overlay}>
            <Modalheader headerText='Update Phone number' onClose={onClose}/>
            <View style={styles.mailHead}>
                <Ionicons name='call' color={"#ffd60a"} size={80}/>
                <Text style={{color:'#fff',fontSize:22,fontWeight:300,textAlign:'center'}}>Your Email ID is used to access your account and will remain private. It is not visible to others.</Text>
            </View>
                {
                    clicks.updateClick ? (
                    <>
                        <View style={styles.emailBox}>
                            <TextInput
                            style={styles.input}
                            placeholder='Enter Phone'
                            value={newPhone}
                            onChangeText={(txt)=>setNewPhone(txt)}
                            />
                        </View>
                        <View style={styles.registerbtn}>
                            <TouchableOpacity 
                            onPress={()=>{
                                setClicks(prev=>({...prev,isSubmit:true}))
                                setClicks(prev=>({...prev,otpdis:true}))
                            }}
                            style={styles.register} >
                                <Text style={{color:'#ffd60a',fontSize:20}}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
                :
                (
                    <View style={styles.currmail}>
                        <View style={styles.emailInfo}>
                            <Text style={{color:'#fff',fontSize:22,fontWeight:300,marginLeft:10, marginVertical:20}}>Current Email</Text>
                            <Text style={{color:'#fff',fontSize:16,fontWeight:600,marginLeft:10}}> {currentPhone} </Text>
                        </View>
                        <TouchableOpacity
                        onPress={()=>setClicks(prev=>({...prev,updateClick:true}))}
                        >
                            <View style={styles.emailUpdt}>
                                <Text> <Ionicons name='pencil' color={"#ffd60a"} size={28}/> </Text>
                                <Text style={{color:'#fff',fontSize:20}}> Update </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
        <>
            <View style={{display: clicks.isSubmit ? 'flex' : "none"}}>
                <UpdtPhoneOTPmodal
                visible={clicks.isSubmit}
                onClose={()=>setClicks(prev=>({...prev,isSubmit:false}))}
                mainonclose={onClose}
                newPhone={newPhone}
                handlePhoneUpdate={handlePhoneUpdate}
                />
                <OTPSuccessModal
                visible={clicks.otpdis}
                otp='123456'
                onClose={()=>setClicks(prev=>({...prev,otpdis:false}))}
                />
            </View>
        </>
    </Modal>
  )
}

export default Updatephonemodal

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
    emailInfo:{
        flex:3,
    },
    emailUpdt:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap:20
    },
    currmail:{
        marginHorizontal:'auto',
        marginVertical:20,
        width:'90%',
        height:120,
        flexDirection:'row'
    },
    emailBox:{
        width:'90%',
        marginVertical:20,
        height:100,
        backgroundColor:'#000',
        marginHorizontal:'auto',
        borderRadius:12,
    },
    input:{
        width:'100%',
        borderWidth:2,
        borderColor:'#ffd60a',
        height:'100%',
        borderRadius:12,
        fontSize:26,
        color:'#fff'
    },
    registerbtn:{
        height:60,
        width:'95%',
        marginHorizontal:'auto',
        alignItems:'flex-end',
        justifyContent:'flex-start'
    },
    register:{
        backgroundColor:'#000',
        width:120,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12
    }

})