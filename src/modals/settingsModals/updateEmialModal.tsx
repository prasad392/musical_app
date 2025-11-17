import { View, Text, Modal, StyleSheet, Platform, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Modalheader from '../modalheader/modalheader';
import { Ionicons } from '@expo/vector-icons';
import UpdtEmailOTPmodal from './updtEmailOTPmodal';
import OTPSuccessModal from '../OTPSuccessModal';
type props ={
    visible: boolean;
    onClose: ()=>void;
    currentMail: string;
    onUpdatemail: (newmail: string) => void;
}
const UpdateEmialModal:React.FC<props> = ({visible,onClose,currentMail,onUpdatemail})  => {
    const [updateClick,setUpdateClick] = useState(false)
    const [newmail,setNewmail] = useState('')
    const [isSubmit,setIsSubmit] = useState(false)
    const [otpdis,setOtpdis] = useState(false)

    const handleEmail =(mail: string)=>{
        onUpdatemail(mail)
    }
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
                <Ionicons name='mail' color={"#ffd60a"} size={80}/>
                <Text style={{color:'#fff',fontSize:22,fontWeight:300,textAlign:'center'}}>Your Email ID is used to access your account and will remain private. It is not visible to others.</Text>
            </View>
            {
                updateClick ? (
                    <>
                        <View style={styles.emailBox}>
                            <TextInput
                            style={styles.input}
                            placeholder='Enter Email ID'
                            value={newmail}
                            onChangeText={(txt)=>setNewmail(txt)}
                            />
                        </View>
                        <View style={styles.registerbtn}>
                            <TouchableOpacity 
                            onPress={()=>{
                                setIsSubmit(true)
                                setOtpdis(true)
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
                            <Text style={{color:'#fff',fontSize:16,fontWeight:600,marginLeft:10}}> {currentMail} </Text>
                        </View>
                        <TouchableOpacity
                        onPress={()=>setUpdateClick(true)}
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
            <View style={{display: isSubmit ? 'flex' : 'none'}}>
                <UpdtEmailOTPmodal 
                visible={isSubmit} 
                onClose={()=>setIsSubmit(false)}
                newMail={newmail}
                mainonclose={onClose}
                handleEmail={handleEmail}
                />
                <OTPSuccessModal
                visible={otpdis}
                onClose={()=>setOtpdis(false)}
                otp='123456'
                />
            </View>
        </>
    </Modal>
  )
}

export default UpdateEmialModal

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