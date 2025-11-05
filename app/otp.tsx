import { View, Text, StatusBar, StyleSheet, Platform, Alert, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons';
import { router } from 'expo-router';
import Progressbar from '@/src/progressbar/progressbar';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox'
import { Formik } from 'formik';
import Loginschema from '@/src/loginschema/loginschema';
import { loginData, OTPdata } from '@/src/data/credentials';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import OTPSuccessModal from '@/src/modals/OTPSuccessModal';
import OTPFailureModal from '@/src/modals/OTPFailureModal';

const CELL_COUNT = 6;
const Otp = () => {
  const [ispopupFail,setIspopupFail] = useState(false);
  const [ispopupSuccess,setIspopupSuccess] = useState(false);
  const [isResendClick,setIsResendClick] = useState(false)
  const [isotpfail,setIsotpfail] = useState(false)
  const [currentOtp,setCurrentOtp] = useState('')
  const generateOtp = ()=>{
      const newotpdata = OTPdata
      const res = Math.floor(Math.random()*newotpdata.length)
      return newotpdata[res];
    }
  
  const [value,setValue] = useState('');
  const ref = useBlurOnFulfill({value,cellCount:CELL_COUNT})
  const [props,getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  const myotp = OTPdata.find((item)=>(item === value))
  const handleContinues=()=>{
    if(value.length === CELL_COUNT && value === myotp){
        setIspopupSuccess(true)
        setTimeout(() => {
          setIspopupSuccess(false)
          router.push('/(tabs)/home')
        }, 3000);
    }else{
        if(value.length === 0 || value.length !== CELL_COUNT){
          setIsotpfail(true)
        }else{
          setIsotpfail(true)
        }
    }
  }
  const handleResend=()=>{
    const otp = generateOtp();
    setCurrentOtp(otp)
    setIsResendClick(true)
  }
  return(
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
        <View style={styles.login}>
            <View style={styles.backarrow}>
                <Text style={{color:'#fff'}}><Ionicons name="chevron-back-outline" size={36} onPress={()=>router.back()}></Ionicons></Text>
            </View>
            <View style={styles.harmony}>
                <Text style={styles.harmonytxt}> <Text style={{color:'#f4f812ff'}}>Join</Text> the harmony by setting up your account</Text>
            </View>
            <View style={styles.access}>
                <Text style={styles.accesstxt}>Log in to access your personalized dashboard</Text>
            </View>
            <View style={styles.loginbox}>
                <View style={{alignItems:'center',marginTop:20}}>
                    <Ionicons name="mail" size={60}></Ionicons>
                </View>
                <View style={styles.otpHead}>
                    <Text style={{fontWeight:600,fontSize:26,textAlign:'center'}}>Pleas enter the 6-digit OTP that you have recieved</Text>
                </View>
                <View>  
                  <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    renderCell={({ index, symbol, isFocused }) => (
                      <View
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        <Text>
                            {symbol || (isFocused ? <Cursor /> : null)}
                          </Text>
                      </View>
                    )}
                  />
                    <View style={{width:'80%',alignItems:'center',justifyContent:'center',marginHorizontal:'auto'}}>
                      <TouchableOpacity style={styles.resend} onPress={handleResend}>
                        <Text style={styles.resendText}>Resend code</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.continueBtn} onPress={handleContinues}>
                        <Text style={styles.continueText}>Continue</Text>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
          {/* <Modal
          visible={isforgotpassword}
          transparent={true}
          animationType='slide'
          onRequestClose={()=>setIsforgotpassword(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Forgot Password ?</Text>
                <Text style={styles.modalText}>
                  {
                    loginData.map((item,index)=>(
                      <View key={index}>
                        <Text style={{width:250,fontWeight:600,fontSize:16,marginVertical:20}}>Email: {item.userEmail}</Text>
                        <Text style={{width:250,fontWeight:600,fontSize:16,marginVertical:20}}>password: {item.userpassword}</Text>
                      </View>
                    ))
                  }
                </Text>
                <TouchableOpacity
                style={styles.closeButton}
                onPress={()=>setIsforgotpassword(false)}
                >
                  <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal> */}

          {/* pop up fail message */} 
          <View style={[styles.popfail,{display:ispopupFail?'flex':'none'}]}> 
            <View style={styles.popupfail}>
            <View>
              <Ionicons name="alert-circle" size={50}></Ionicons>
            </View>
            <View>
              <Text style={styles.lookstxt}>Looks like an error</Text>
            </View>
            <View style={{width:'85%',marginHorizontal:'auto'}}>
              <Text style={{textAlign:'center',fontSize:18}}>
                The OTP u entered is not correct
              </Text>
            </View>
            <View style={styles.tryagainbox}>
              <TouchableOpacity style={styles.tryagainbtn} onPress={()=>setIspopupFail(false)}>
                <Text style={styles.tryagaintxt}>Try Again</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>

          {/* popup succes message */}
          <View style={[styles.popsuccess,{display:ispopupSuccess?'flex':'none'}]}> 
            <View style={styles.popupsuccess}>
              <View style={{width:170,height:170,borderRadius:'50%',backgroundColor:'#ecb935ff',alignItems:'center',justifyContent:'center'}}>
                <View style={{width:90,height:90,borderRadius:'50%',backgroundColor:'#ffdd00',alignItems:'center',justifyContent:'center'}}>
                  <Text><Ionicons name="checkmark" size={60} ></Ionicons></Text>
                </View>
              </View>
            </View>
            <View style={{alignItems:'center',marginVertical:20}}>
              <Text style={{color:'#fff',fontWeight:600,fontSize:32,marginBottom:10}}>Success</Text>
              <Text style={{color:'#fff',width:190,fontSize:20}}>Your identity has been verified successfully</Text>
            </View>
          </View>

          <View style={{display:isResendClick ? 'flex' : 'none'}}>
            <OTPSuccessModal visible={isResendClick} 
            onClose={()=>{
              setIsResendClick(false)
            }}
            otp={currentOtp}
            />
          </View>
          <View style={{display:isotpfail ? 'flex':'none'}}>
            <OTPFailureModal visible={isotpfail} onClose={()=>setIsotpfail(false)}/>
          </View>
        </View>
        
      </View>
  )
}

export default Otp

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
  },
  login:{
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backarrow:{
    marginTop:30,
    marginLeft:20,
    width:40,
    height:40,
    borderRadius:70,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#fff'
  },
  harmony:{
    marginLeft:30,
    marginTop:40,
    width:350,
    height:144,
    // backgroundColor:'red'
  },
  harmonytxt:{
    color:'#fff',
    fontFamily:'Poppins',
    fontWeight:500,
    fontSize:36,
    textAlign:'justify',
    letterSpacing:2,
    lineHeight:50
  },
  access:{
    width:329,
    height:48,
    marginLeft:30,
    marginTop:20,
  },
  accesstxt:{
    color:'#EBEBEBCC',
    fontSize:20,
  },
  loginbox:{
    marginTop:20,
    width:420,
    height:800,
    backgroundColor:'#EBEBEB',
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
  },
  otptxt:{
    fontSize:16
  },
  continuebox:{
    width:'80%',
    marginHorizontal:'auto',
    marginVertical:20
  },
  continuebtn:{
    backgroundColor:'#ffd60a',
    width:'100%',
    height:60,
    borderRadius:12,
    alignItems:'center',
    justifyContent:'center'
  },
  continuetxt:{
    fontSize:22,
    fontWeight:600,
    color:'#fff'
  },
  termbox:{
    width:'75%',
    marginHorizontal:'auto'
  },
  termtxt:{
    textAlign:'center',
    fontSize:16,
    lineHeight:30
  },
  errorbox:{
    marginTop:10,
    marginBottom:10,
    marginLeft:32
  },
  popupfail:{
    backgroundColor:'#e0e1dd',
    width:'60%',
    height:230,
    position:'absolute',
    top:'40%',
    left:'20%',
    borderRadius:12,
    flexDirection:'column',
    alignItems:'center'
  },
  lookstxt:{
    color:'#e63946',
    fontSize:22,
    fontWeight:600,
    marginBottom:10
  },
  tryagainbox:{
    marginTop:20,
    width:'80%',
    marginHorizontal:'auto',
    height:40
  },
  tryagainbtn:{
    width:'60%',
    marginHorizontal:'auto',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderRadius:20
  },
  tryagaintxt:{
    fontSize:18,
    fontWeight:600,
    color:'#ff758f'
  },
  popfail:{
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    position:'absolute',
    flex:1,
    zIndex:1000,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  popsuccess:{
    backgroundColor: "#212529",
    position:'absolute',
    flex:1,
    zIndex:1000,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  popupsuccess:{
    backgroundColor:'#a47e1b',
    width:230,
    height:230,
    borderRadius:'50%',
    alignItems:'center',
    justifyContent:'center'
  },
  
 modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#ffd60a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeText: {
    color: '#fff',
    fontSize: 18,
  },
  otpHead:{
    width:'80%',
    marginVertical:20,
    marginHorizontal:'auto',
    alignItems:'center'
  },
  
codeFieldRoot: {
    marginBottom: 20,
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  focusCell: {
    borderColor: '#ffd60a',
  },
  cellText: {
    fontSize: 24,
    color: '#000',
  },
  resend: {
    marginVertical: 15,
    alignItems:'center'
  },
  resendText: {
    color: '#ffd60a',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  continueBtn: {
    backgroundColor: '#ffd60a',
    width: '80%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },


})