import { View, Text, StyleSheet, Platform, StatusBar, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modalheader from '../modalheader/modalheader';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

type props ={
    visible: boolean;
    onClose: ()=>void;
    contactName: string
}

const ConvoModal:React.FC<props> = ({visible,onClose,contactName}) => {
    const [inputText,setInputText] = useState('')
    const [messages,setMessages] = useState<{text: string , time: string}[]>([]);
    const now = new Date();
    const formatedTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2,'0')}`;
  return (
    <Modal
    visible={visible}
    transparent={true}
    onRequestClose={onClose}
    animationType='fade'
    >
        <View style={styles.overlay}>
            <Modalheader onClose={onClose} headerText={contactName}/>
            <ScrollView>
                {
                    messages.map((msg,index)=>(
                        <>
                            
                            <View style={styles.chatting} key={index}>
                                <Text style={{ color: '#aaa', fontSize: 14, marginBottom: 5,textAlign:'center' }}> {msg.time} </Text>
                                <View style={index % 2 === 0 ? styles.rightChat : styles.leftChat}>
                                    <Text style={index % 2 === 0 ? styles.rightChatTxt : styles.leftChatTxt}> {msg.text} </Text>
                                </View>
                            </View>
                        </>
                    ))
                }
            </ScrollView>
            <View style={styles.inputChat}>
                <View
                    style={styles.inputBox}
                    >
                    <TextInput
                    placeholder='Send Message...'
                    style={{
                        fontSize:18,
                        color:'#fff'
                    }}
                    value={inputText}
                    onChangeText={(txt)=>{
                        setInputText(txt)
                    }}
                    />
                    <Ionicons name='happy-outline' color={'#ffd60a'} size={32}/>
                </View>
                <View
                    style={styles.sendBtn}
                    >
                    <TouchableOpacity
                    onPress={()=>{
                        setMessages(prev=>[...prev,{text: inputText, time: formatedTime}])
                        setInputText('')
                    }}
                    >
                        <Text
                        style={{
                            color:'#ffd60a',
                            fontSize:20
                        }}
                        >Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default ConvoModal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    chatting:{
        width:'100%',
        height:'auto',
        backgroundColor:'#1d1d1d',
        paddingTop:40
    },
    inputChat:{
        flexDirection:'row',
        width:'95%',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:'auto',
        gap:10,
        position:'absolute',
        bottom:20
    },
    inputBox:{
        flex:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        height:60,
        borderRadius:20,
        backgroundColor:'#2d2d2d'
    },
    sendBtn:{
        flex:1,
        backgroundColor:'#2d2d2d',
        alignItems:'center',
        justifyContent:'center',
        height:60,
        borderRadius:20,
    },
    rightChat:{
        marginHorizontal:'auto',
        width:'95%',
        height:'auto',
        alignItems:'flex-end',
        justifyContent:'flex-end',
    },
    rightChatTxt:{
        color:'#000',
        backgroundColor:'#ffd60a',
        textAlign:'center',
        fontSize:20,
        padding:10,
        borderRadius:12
    },
    leftChat:{
        marginHorizontal:'auto',
        width:'95%',
        height:'auto',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    leftChatTxt:{
        color:'#000',
        backgroundColor:'#fff',
        textAlign:'center',
        fontSize:22,
        padding:10,
        borderRadius:12
    }
})