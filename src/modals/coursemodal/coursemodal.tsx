
import { View, Text, Modal, StyleSheet, Platform, StatusBar, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Modalheader from '../modalheader/modalheader';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Coursecard from '@/src/components/customcards/coursecard/coursecard';
import Curriculummodal from './curriculummodal';
import { courseCardData } from '@/src/data/mochdata';

type props={
    visible:boolean;
    onClose:()=>void;
}

const Coursemodal:React.FC<props> = ({visible,onClose}) => {
    const [status,setStatus] = useState({
        iscurriculum:false,
        showSuggestions:true,
    })
    const [searchtxt,setSearchtxt] = useState('');
    const filterData = courseCardData.filter(item=>item.head.toLowerCase().includes(searchtxt.toLowerCase()))
    
    const [curriculum,setCurriculum] = useState('')
    const handleCardHeadClick =(head:string)=>{
        setStatus(prev=>({...prev,iscurriculum:true}))
        console.log(head)
        setCurriculum(head)
    }
    return (
        <Modal
        visible={visible}
        transparent={true}
        animationType='fade'
        onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <Modalheader headerText='Courses' onClose={onClose}/>
                <View style={styles.inputBox}>
                    <Ionicons name="search-outline" size={32} color="#fff" />
                    <TextInput
                        style={styles.inputSearch}
                        placeholder="Search in Topics..."
                        placeholderTextColor="#aaa"
                        value={searchtxt}
                        onChangeText={(txt)=>{
                            setSearchtxt(txt)
                            setStatus((prev)=>({...prev,showSuggestions:true}))
                        }}
                    />
                </View>
                {
                    searchtxt.length > 0 && status.showSuggestions &&(
                        <View style={styles.searchResults}>
                            {
                                filterData.length > 0 ? (
                                    <FlatList
                                    data={filterData}
                                    keyExtractor={(item)=>item.id.toString()}
                                    renderItem={({item})=>(
                                        <View style={styles.resultItem}>
                                            <Text
                                            style={styles.resultText}
                                            onPress={()=>{
                                                setStatus((prev)=>({...prev,showSuggestions:false}))
                                                setSearchtxt(item.head)
                                            }}
                                            >{item.head}</Text>
                                        </View>
                                    )}
                                    />
                                ) 
                                : 
                                (
                                    <Text style={styles.noDataText}>Not found</Text>
                                )
                            }
                        </View>
                    )
                }
                <ScrollView>
                    <View>
                        <Coursecard 
                        onpress={handleCardHeadClick}
                        data={filterData.length > 0 ? filterData : courseCardData}
                        />
                    </View>
                </ScrollView>
            </View>

            {/* curriculum modal */}
            <View style={{display:status.iscurriculum ? 'flex' : 'none'}}>
                <Curriculummodal 
                visible={status.iscurriculum} 
                onclose={()=>setStatus(prev=>({...prev,iscurriculum:false}))}
                curriculumData={curriculum}
                />
            </View>
        </Modal>
    )
}

export default Coursemodal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
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
    searchResults:{
        width:'95%',
        marginHorizontal:'auto',
        backgroundColor:'rgba(0,0,0,0.7)',
        borderRadius:12,
        padding:10,
        margin:10,
        position:'absolute',
        top:250,
        zIndex:100,
        marginLeft:10,
    },
    resultItem:{
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    resultText:{
        color: '#ffd60a',
        fontSize: 18,
    },
    noDataText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 10,
    }

})