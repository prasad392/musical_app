import { View, Text, Modal, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modalheader from '../../modalheader/modalheader';
import { Formik } from 'formik';
import passwordvalidationschema from '@/src/passwordschema/passwordvalidationschema';
import { Ionicons } from '@expo/vector-icons';
import Passwordsuccessmodal from './passwordsuccessmodal';

type props ={
    visible: boolean;
    onClose: ()=>void;
}

const Changepasswordmodal:React.FC<props> = ({visible,onClose}) => {
    const [clicks,setClicks] = useState({
        passeye: true,
        cnfeye: true,
        changepassModal: false,
    })
  return (
    <Modal
    visible={visible}
    onRequestClose={onClose}
    transparent={true}
    animationType='fade'
    >
        <View style={styles.overlay}>
            <Modalheader headerText='Change Password' onClose={onClose}/>
            <View style={styles.passhead}>
                <Text style={{color:'#fff',fontSize:24,fontWeight:600,textAlign:'center',marginBottom:15}}>Set your new password</Text>
                <Text style={{color:'#fff',fontSize:20,fontWeight:400,textAlign:'center'}}>Create a strong password to keep your account secure. Use at least 8 characters with one symbol or number.</Text>
            </View>
            <Formik
            initialValues={{newPassword:'',confirmPassword:''}}
            validationSchema={passwordvalidationschema}
            onSubmit={(values)=>{
                console.log("values submitted",values);
                setClicks(prev=>({...prev,changepassModal: true}))
            }}
            >
                {({handleChange,handleSubmit,values,resetForm,errors,touched})=>(
                    <View style={styles.paswordsBox}>

                        <View style={styles.newpassBox}>
                            <Text style={styles.locker}> 
                                <Ionicons name='lock-closed' color={"#EBEBEB"} size={32}/> 
                            </Text>
                            <View style={{flexDirection:'column',}}>
                                <Text style={{color:'#EBEBEB99',fontSize:18}}>New Password</Text>
                                <TextInput
                                style={styles.newpassinput}
                                secureTextEntry={clicks.passeye}
                                value={values.newPassword}
                                onChangeText={handleChange('newPassword')}
                                />
                            </View>
                            <Text
                            onPress={()=>setClicks(prev=>({...prev, passeye: !prev.passeye}))}
                            >
                                <Ionicons name={clicks.passeye ? 'eye' : 'eye-off'} color={"#EBEBEB"} size={32}/>
                            </Text>
                        </View>
                        <View style={styles.errorbox}>
                            {
                                errors.newPassword && touched.newPassword &&(
                                    <Text style={{color:'red'}}> {errors.newPassword} </Text>
                                )
                            }
                        </View>

                        <View style={[styles.newpassBox,{marginVertical:0}]}>
                            <Text style={styles.locker}> <Ionicons name='lock-closed' color={"#EBEBEB"} size={32}/> </Text>
                            <View style={{flexDirection:'column',}}>
                                <Text style={{color:'#EBEBEB99',fontSize:18}}>Confirm Password</Text>
                                <TextInput
                                style={styles.newpassinput}
                                secureTextEntry={clicks.cnfeye}
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                />
                            </View>
                            <Text
                            onPress={()=>setClicks(prev=>({...prev,cnfeye: !prev.cnfeye}))}
                            >
                                <Ionicons name={clicks.cnfeye ? 'eye' : 'eye-off'} color={"#EBEBEB"} size={32}/>
                            </Text>
                        </View>
                        <View style={styles.errorbox}>
                            {
                                errors.confirmPassword && touched.confirmPassword &&(
                                    <Text style={{color:'red'}}> {errors.confirmPassword} </Text>
                                )
                            }
                        </View>
                        <TouchableOpacity 
                        style={styles.confirmBox}
                        onPress={()=>{
                            handleSubmit()
                        }}
                        >
                            <Text style={{color:'#fff',fontSize:22,fontWeight:600}}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
        <>
            <View style={{display: clicks.changepassModal ? 'flex' : 'none'}}>
                <Passwordsuccessmodal
                visible={clicks.changepassModal}
                onClose={()=>setClicks(prev=>({...prev,changepassModal: false}))}
                mainClose={onClose}
                />
            </View>
        </>
    </Modal>
  )
}

export default Changepasswordmodal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    passhead:{
        width:'75%',
        marginHorizontal:'auto',
        marginVertical:30
    },
    paswordsBox:{
        width:'90%',
        marginHorizontal:'auto',
        height:300
    },
    newpassBox:{
        borderWidth:2,
        borderColor:'#EBEBEB99',
        width:'95%',
        marginHorizontal:'auto',
        height:90,
        borderRadius:12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },
    newpassinput:{
        width:250,
        fontSize:20,
        color:'#fff',
    },
    locker:{
        borderRightWidth:1,
        height:45,
        borderColor:'#fff',
        width:45,
        textAlign:'center',
        paddingTop:5
    },
    confirmBox:{
        width:'95%',
        backgroundColor:'#ffd60a',
        marginVertical:20,
        marginHorizontal:'auto',
        height:80,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    },
    errorbox:{
        marginTop:10,
        marginBottom:10,
        marginLeft:32
    },
})