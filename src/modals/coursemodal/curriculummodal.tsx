import { View, Text, Modal, StyleSheet, Platform, StatusBar, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Modalheader from '../modalheader/modalheader'
import { Ionicons } from '@expo/vector-icons';
import Documentcard from '@/src/components/customcards/coursecard/documentcard';
import Videocrad from '@/src/components/customcards/coursecard/videocrad';
import { curriculumDocumentCardData, curriculumVideoCardData } from '@/src/data/mochdata';
import Pdfmodal from './pdfmodal';
import Videomodal from './videomodal';

type props ={
    visible  : boolean;
    onclose : ()=>void;
    curriculumData: string
}
const Curriculummodal:React.FC<props> = ({visible,onclose,curriculumData}) => {
    const filterDocumentData = curriculumDocumentCardData.filter(item=>item.head.toLowerCase().includes(curriculumData.toLowerCase()));
    const filterVideoData = curriculumVideoCardData.filter((item)=>item.head.toLowerCase().includes(curriculumData.toLowerCase())) 

    const [searchtxt,setSearchtxt] = useState('')
    const fileData = ['Document','Videos','PDFS']

    const [isview,setIsview] = useState({
        viewpdf:false,
        playvd:false,
    })

    const [showsuggestions,setShowsuggestions] = useState(false);

    return (
    <Modal
    visible={visible}
    animationType='slide'
    onRequestClose={()=>console.log('curriculum close')}
    >
        <View style={styles.overlay}>
            <Modalheader headerText='Curriculum' onClose={onclose}/>
                <View style={styles.inputBox}>
                    <Ionicons name="search-outline" size={32} color="#fff" />
                    <TextInput
                        style={styles.inputSearch}
                        placeholder="Search in Files..."
                        placeholderTextColor="#aaa"
                        value={searchtxt}
                        onChangeText={(txt)=>{
                            setSearchtxt(txt)
                            setShowsuggestions(true)
                        }}
                    />
                </View>
                {
                    searchtxt && showsuggestions &&(
                        <View style={styles.searchResults}>
                            {
                                fileData.some(item => item.toLowerCase().includes(searchtxt.toLowerCase()))  ?(
                                    <FlatList
                                    data={fileData}
                                    keyExtractor={(item,index)=>item+index.toString()}
                                    renderItem={({item})=>(
                                        <View style={styles.resultItem}>
                                            <Text 
                                            style={styles.resultText}
                                            onPress={()=>{
                                                setSearchtxt(item)
                                                setShowsuggestions(false)
                                            }}
                                            >
                                                {item}</Text>
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
                    <View style={styles.documents}>
                        <Text style={styles.docTxt}>Documents</Text>
                        <Documentcard data={filterDocumentData} onpress={()=>setIsview(prev=>({...prev,viewpdf:true}))}/>
                    </View>
                    <View style={styles.documents}>
                        <Text style={styles.docTxt}>Videos</Text>
                        <Videocrad data={filterVideoData} onpress={()=>setIsview(prev=>({...prev,playvd:true}))}/>
                    </View>
                </ScrollView>

                <View style={{display:isview.viewpdf ? 'flex' : 'none'}}>
                    <Pdfmodal 
                    visible={isview.viewpdf} 
                    onClose={()=>setIsview(prev=>({...prev,viewpdf:false}))} 
                    head={curriculumData}
                    />
                </View>

                <View style={{display:isview.playvd ? 'flex' : 'none'}}>
                    <Videomodal
                    visible={isview.playvd}
                    onClose={()=>setIsview(prev=>({...prev,playvd:false}))}
                    />
                </View>
        </View>
    </Modal>
  )
}

export default Curriculummodal

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#1d1d1d',
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
    documents:{},
    docTxt:{
        color:'#fff',
        marginLeft:20,
        fontSize:20,
        fontWeight:600,
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