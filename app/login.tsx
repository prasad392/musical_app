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
import OTPSuccessModal from '@/src/modals/OTPSuccessModal';

const Login = () => {
  const [passeye,setPasseye] = useState(false)
  const [isChecked,setIsChecked] = useState(false)
  const [ispopupFail,setIspopupFail] = useState(false)
  const [ispopupSuccess,setIspopupSuccess] = useState(false);
  const [isprogress,setIsprogress]= useState(false);
  const [isforgotpassword,setIsforgotpassword] = useState(false);
  const [isOtp,setIsOtp] = useState(false)
  const [currentOtp,setCurrentOtp] = useState('')

  const generateOtp = ()=>{
    const newotpdata = OTPdata
    const res = Math.floor(Math.random()*newotpdata.length)
    return newotpdata[res];
  }

  const handleLoginSuccess=()=>{
    setIspopupSuccess(true)
    setIsprogress(true)
    setTimeout(() => {
      setIspopupSuccess(false)
      router.push('/(tabs)/home')
    }, 3000);
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
          <Formik
          initialValues={{email:'',password:''}}
          validationSchema={Loginschema}
          onSubmit={(values)=>{
            const userExist = loginData.some((user)=>user.userEmail === values.email && user.userpassword === values.password)
            if(userExist){
              handleLoginSuccess()
            }
            else{
              setIspopupFail(true)
            }
          }}
          >
            {({handleBlur,handleChange,handleSubmit,values,errors,touched,setFieldValue})=>(
              // login box
              <View style={styles.loginbox}>
                {/* progress bar */}
                <View style={styles.stepProgress}>
                  <View>
                    <Text style={styles.steptxt}>Step 1/2</Text>
                  </View> 
                  <View style={styles.progContainer}>
                    {
                      values.email && values.password &&  isprogress ?
                      <Progressbar progress={100}/> :
                      values.email && values.password
                        ? <Progressbar progress={90}/>
                        : values.email
                        ? <Progressbar progress={50}/>
                        : <Progressbar progress={0}/>
                    }
                  </View>
                </View>
                  {/* email and password */}
                <View style={styles.emailpass}>
                   {/* email input */}
                  <View style={styles.email}>
                    <View style={styles.emailbox}>
                      <Ionicons name="mail-outline" size={36}></Ionicons>
                    </View>
                    <View>
                      <Text style={styles.inputTxt}>Email address</Text>
                      <TextInput 
                      style={styles.input} 
                      onChangeText={handleChange('email')}
                      value={values.email}
                      />
                    </View>
                    <View style={{display: values.email ? 'flex' : 'none'}}>
                      <Text onPress={()=>setFieldValue('email','')}><Ionicons name="close" size={32}></Ionicons></Text>
                    </View>
                  </View>
                  {/* email error */}
                  <View style={styles.errorbox}>
                    {
                        errors.email && touched.email && (
                          <Text style={{color:'red'}}>{errors.email}</Text>
                        )
                      }
                  </View>
                  {/* password input */}
                  <View style={styles.pass}>
                    <View style={styles.emailbox}>
                      <Ionicons name="lock-closed-outline" size={36}></Ionicons>
                    </View>
                    <View>
                      <Text style={styles.inputTxt}>Password</Text>
                      <TextInput 
                      style={styles.input}
                      onChangeText={handleChange('password')}
                      value={values.password}
                      secureTextEntry={!passeye}
                      />
                    </View>
                    <View style={{display: values.password ? 'flex' : 'none'}}>
                      <Text onPress={()=>setPasseye(!passeye)}>
                        <Ionicons name={passeye ? 'eye-off' : 'eye'} size={32} ></Ionicons>
                      </Text>
                    </View>
                  </View>
                  {/* password error */}
                  <View style={styles.errorbox}>
                    {
                        errors.password && touched.password && (
                          <Text style={{color:'red'}}>{errors.password}</Text>
                        )
                      }
                  </View>
                </View>
                {/* forgotpass word otp */}
                <View style={styles.checkforgot}>
                  <View style={styles.checkbox}>
                    <CheckBox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    tintColors={{true:'#023e8a', false:'#ccc'}}
                    />
                    <Text style={styles.otptxt}>Login Via OTP</Text>
                  </View>
                  <View style={styles.forgotpass}>
                    <Text style={styles.forgotpasstxt} onPress={()=>setIsforgotpassword(true)}>forgot password?</Text>
                  </View>
                </View>
                {/* submit box */}
                <View style={styles.continuebox}>
                  <TouchableOpacity 
                  style={styles.continuebtn} 
                  onPress={()=>{
                    handleSubmit()
                    setTimeout(() => {
                      setFieldValue('email','')
                      setFieldValue('password','')
                    }, 5000);
                    if(isChecked){
                      const otp = generateOtp();
                      setCurrentOtp(otp)
                      setIsOtp(true)
                    }
                  }}
                  >
                    <Text style={styles.continuetxt}>Continue</Text>
                  </TouchableOpacity>
                </View>
                {/* terms and conditions */}
                <View style={styles.termbox}>
                  <Text style={styles.termtxt}>By signing in, I agree to the Privacy statement and Terms and service</Text>
                </View>
              </View>
            )}
          </Formik>
          
          {/* forgot password modal */}
          <Modal
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
          </Modal>
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
                User Id or password is incorrect. Double check your password and try again.
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
          
           {/* OTP display message */}
          <View style={{display:isOtp ? 'flex' : 'none'}}>
            <OTPSuccessModal visible={isOtp} 
            onClose={()=>{
              setIsOtp(false)
              router.push('/otp')
            }}
            otp={currentOtp}
            />
          </View>

        </View>
        
      </View>
  )
}

export default Login

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
  stepProgress:{
    marginTop:20,
    marginLeft:20,
  },
  steptxt:{
    marginLeft:20,
    fontSize:22,
  },
  progContainer:{},
  emailpass:{
    marginTop:20
  },
  email:{
    borderWidth:1,
    width:'90%',
    height:90,
    marginHorizontal:'auto',
    borderRadius:12,
    flexDirection:'row',
    alignItems:'center',
    gap:20
  },
  input:{
    width:240,
    color:'#000',
    fontSize:18,
    height:40
  },
  emailbox:{
    width:60,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRightWidth:1
  },
  inputTxt:{
    fontSize:18,
    color:'#424141cc',
  },
  pass:{
    borderWidth:1,
    width:'90%',
    height:90,
    marginHorizontal:'auto',
    borderRadius:12,
    flexDirection:'row',
    alignItems:'center',
    gap:20,
  },
  checkbox:{
    flexDirection:'row',
    alignItems:'center'
  },
  checkforgot:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'90%',
    marginHorizontal:'auto'
  },
  forgotpass:{},
  forgotpasstxt:{
    color:'#ffd60a',
    fontSize:18,
    fontWeight:600,
    textDecorationLine:'underline',
    textDecorationColor:'#000'
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


})