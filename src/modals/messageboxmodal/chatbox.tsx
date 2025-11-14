import { View, Text, Modal, StyleSheet, Platform, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Modalheader from '../modalheader/modalheader';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Contactcard from '@/src/components/customcards/chatboxcards/contactcard';
import { Contact_details_Data } from '@/src/data/contactData';
import ConvoModal from './convoModal';

type props ={
    visible: boolean;
    onClose: ()=>void;
}

const Chatbox:React.FC<props> = ({onClose,visible}) => {
    const [inputSuggest,setInputSuggest] = useState({
        inputClear: false,
        inputAdd: true,
    })
    const [searchText,setSearchText] = useState('')
    const filterData = Contact_details_Data.filter(c => c.contactname.toLowerCase().includes(searchText.toLowerCase()))
    const [showchat,setShowchat] = useState(false);
    const [selectedname,setSelectedname] = useState('')
    return (
    <Modal
    visible={visible}
    animationType='fade'
    onRequestClose={onClose}
    >
        <View style={styles.overlay}>
            <Modalheader headerText='New Conversation' onClose={onClose}/>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.inputSearch}
                    placeholder="Recipient"
                    placeholderTextColor="#aaa"
                    value={searchText}
                    onChangeText={(txt)=>{
                        setSearchText(txt)
                    }}
                    editable={inputSuggest.inputClear}
                />
                <Ionicons 
                name="add-circle" 
                size={32} 
                color="#ffd60a" 
                style={{display: inputSuggest.inputAdd ? 'flex' : 'none'}}
                onPress={()=>{
                    setInputSuggest(prev=>({...prev,inputAdd: false, inputClear:true}))
                }}
                
                />
                <Ionicons
                name="close-circle" 
                size={32} 
                color="#ffd60a" 
                style={{display: inputSuggest.inputClear ? 'flex' : 'none'}}
                onPress={()=>{
                    setInputSuggest(prev=>({...prev,inputClear: false, inputAdd: true}))
                    setSearchText('')
                }}
                />
            </View>
            <View>
                {
                     searchText &&(
                        filterData.length > 0 ? (
                            <Contactcard 
                            data={filterData} 
                            onpress={(name)=>{
                                setShowchat(true)
                                setSelectedname(name)
                            }}
                            />
                        ):
                        (
                            <Text style={{ color: '#fff', textAlign: 'center', marginTop: 20,fontSize:18 }}>
                                No contacts found
                            </Text>
                        )
                        
                    )
                }
                <View style={{display: showchat ? 'flex' : 'none'}}>
                    <ConvoModal visible={showchat} onClose={()=>setShowchat(false)} contactName={selectedname}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default Chatbox

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    inputBox: {
        width: '95%',
        marginVertical: 20,
        marginHorizontal: 'auto',
        backgroundColor: '#2d2d2d',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        paddingHorizontal: 10,
    },
    inputSearch: {
        width: 330,
        height: 65,
        fontSize: 18,
        color: '#fff',
        marginLeft: 10,
    },
})