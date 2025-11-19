import { View, Text, Modal, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modalheader from '../modalheader/modalheader';
import { Ionicons } from '@expo/vector-icons';
import UpdateEmialModal from './updateEmialModal';
import Updatephonemodal from './phonemodals/updatephonemodal';

type props ={
    visible: boolean;
    onClose: ()=>void;
}

const Userprofilemodal:React.FC<props> = ({visible,onClose}) => {
    const [currentmail,setCurrentmail] = useState('venkataprasad@gmail.com');
    const [currentphone,setCurrentphone] = useState('+91 1234567890')

    const [updates,setUpdates] = useState({
        emailupdt:false,
        phoneupdt:false
    })
    const handleEmailUpdate=(newmail: string)=>{
        setCurrentmail(newmail);
        setUpdates({...updates, emailupdt: false});
    }
    const handlePhoneUpdate=(phone: string)=>{
        setCurrentphone(phone)
        setUpdates({...updates,phoneupdt: false})
    }
  return (
    <Modal
    visible={visible}
    animationType='fade'
    transparent={true}
    onRequestClose={onClose}
    >
        <View style={styles.overlay}>
            <Modalheader onClose={onClose} headerText='User Profile'/>
            <View style={styles.profBox}>
                <View style={styles.profimgbox}>
                    <View style={styles.profImg}>
                        <Text style={{color:'#000',fontSize:32,fontWeight:600}}>V</Text>
                        <View style={styles.editBox}><Ionicons name='pencil-outline' size={26} color={'#ffd60a'}/></View>
                    </View>
                </View>
                <View style={styles.profInfo}>
                    <Text style={{color:'#fff',fontSize:22,fontWeight:300,marginLeft:20, marginVertical:20}}>Name</Text>
                    <Text style={{color:'#fff',fontSize:22,fontWeight:600,marginLeft:20}}>Venkat prasad</Text>
                </View>
            </View>
            <View style={styles.emailedit}>
                <View style={styles.emailImg}>
                    <Ionicons name='mail' color={"#ffd60a"} size={42}/>
                </View>
                <View style={styles.emailInfo}>
                    <Text style={{color:'#fff',fontSize:22,fontWeight:300,marginLeft:10, marginVertical:20}}>Email</Text>
                    <Text style={{color:'#fff',fontSize:16,fontWeight:600,marginLeft:10}}> {currentmail} </Text>
                </View>
                <TouchableOpacity
                onPress={()=>{
                    setUpdates((prev)=>({...prev,emailupdt:true}))
                }}
                >
                    <View style={styles.emailUpdt}>
                        <Text> <Ionicons name='pencil' color={"#ffd60a"} size={28}/> </Text>
                        <Text style={{color:'#fff',fontSize:20}}> Update </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.emailedit}>
                <View style={styles.emailImg}>
                    <Ionicons name='call' color={"#ffd60a"} size={42}/>
                </View>
                <View style={styles.emailInfo}>
                    <Text style={{color:'#fff',fontSize:22,fontWeight:300,marginLeft:10, marginVertical:20}}>Phone</Text>
                    <Text style={{color:'#fff',fontSize:16,fontWeight:600,marginLeft:10}}> {currentphone} </Text>
                </View>
                <TouchableOpacity
                onPress={()=>{
                    setUpdates((prev)=>({...prev,phoneupdt:true}))
                }}
                >
                    <View style={styles.emailUpdt}>
                        <Text> <Ionicons name='pencil' color={"#ffd60a"} size={28}/> </Text>
                        <Text style={{color:'#fff',fontSize:20}}> Update </Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={styles.emailedit}>
                <View style={styles.emailImg}>
                    <Ionicons name='location' color={"#ffd60a"} size={42}/>
                </View>
                <View style={styles.emailInfo}>
                    <Text style={{color:'#fff',fontSize:22,fontWeight:300,marginLeft:10, marginVertical:20}}>Location</Text>
                    <Text style={{color:'#fff',fontSize:16,fontWeight:600,marginLeft:10}}>Bengaluru, KA</Text>
                </View>
                <View style={styles.emailUpdt}>
                    <Text> <Ionicons name='pencil' color={"#ffd60a"} size={28}/> </Text>
                    <Text style={{color:'#fff',fontSize:20}}> Update </Text>
                </View>
            </View>
        </View>
        <>
            <View style={{display: updates.emailupdt ? 'flex' : 'none'}}>
                <UpdateEmialModal 
                visible={updates.emailupdt} 
                onClose={()=>setUpdates(prev=>({...prev,emailupdt:false}))}
                currentMail={currentmail}
                onUpdatemail={handleEmailUpdate}
                 />
            </View>

            <View style={{display : updates.phoneupdt ? 'flex' : 'none'}}>
                <Updatephonemodal
                visible={updates.phoneupdt}
                onClose={()=>setUpdates(prev=>({...prev,phoneupdt:false}))}
                currentPhone={currentphone}
                handlePhoneUpdate={handlePhoneUpdate}
                />
            </View>
        </>
    </Modal>
  )
}

export default Userprofilemodal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    profBox:{
        marginHorizontal:'auto',
        marginVertical:20,
        width:'95%',
        height:120,
        flexDirection:'row'
    },
    profimgbox:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    },
    profInfo:{
        flex:4,
    },
    profImg:{
        width:80,
        height:80,
        backgroundColor:"#8EA5D8",
        borderRadius:90,
        alignItems:'center',
        justifyContent:'center',
    },
    editBox:{
        width:35,
        height:35,
        backgroundColor:'#000',
        borderRadius:90,
        position:'absolute',
        bottom:0,
        right:0,
        alignItems:'center',
        justifyContent:'center',
    },
    emailedit:{
        marginHorizontal:'auto',
        width:'95%',
        height:120,
        flexDirection:'row'
    },
    emailImg:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
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
    }
})