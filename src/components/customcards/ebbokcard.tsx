import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { EbookCardData } from '@/src/data/mochdata'
import Bookdownloding from '@/src/modals/ebookmodals/bookdownloding'
import Bookdownloaded from '@/src/modals/ebookmodals/bookdownloaded'

type EbookItem={
    id:any;
    head:string;
    para:string;
}
type EbookData = {
    data:EbookItem[];
}

const Ebbokcard:React.FC<EbookData> = ({data}) => {
    const [status,setStatus] = useState({process:false,download:false})

    const handleDownload =()=>{
        setStatus({process:true,download:false})
        setTimeout(()=>{
            setStatus({process:false,download:true})
        },3000)
        setTimeout(()=>{
            setStatus({process:false,download:false})
        },6000)
    }
  return (
    <>
        {
            data.map((item)=>(
                <View style={styles.ebookcard} key={item.id}>
                    <View style={styles.cardHead}>
                        <View style={{flexDirection:'row',marginLeft:20,gap:20,alignItems:'center'}}>
                            <View style={{width:40,backgroundColor:'#3e3e3e',alignItems:'center',justifyContent:'center',borderRadius:12,height:40,}}><Ionicons name='book-outline' color={'#ffd60a'} size={28}/></View>
                            <Text style={{color:'#fff',fontSize:24}}>{item.head}</Text>
                        </View>
                    </View>
                    <View style={styles.contentBox}>
                        <Text style={styles.content}>{item.para}</Text>
                    </View>
                    <TouchableOpacity style={styles.downbtn} onPress={handleDownload}>
                        <Ionicons name='arrow-down' color={"#ffd60a"} size={34}/>
                        <Text style={{fontSize:20,fontWeight:400,color:'#ffd60a'}}>Download PDF</Text>
                    </TouchableOpacity>
                </View>
            ))
        }

        {/* pdf downloading..... modal */}
        <View style={{display:status.process ? 'flex' : 'none'}}>
            <Bookdownloding visible={status.process}/>
        </View>

        {/* pdf downloaded modal */}
        <View style={{display:status.download ? 'flex' : 'none'}}>
            <Bookdownloaded visible={status.download}/>
        </View>
    </>
  )
}

export default Ebbokcard

const styles = StyleSheet.create({
    ebookcard:{
        backgroundColor:'#3e3e3e',
        width:'95%',
        marginHorizontal:'auto',
        borderRadius:12,
        marginBottom:20
    },
    cardHead:{
        backgroundColor:'#2d2d2d',
        width:'100%',
        marginHorizontal:'auto',
        height:70,
        borderBottomEndRadius:12,
        borderBottomStartRadius:12,
        borderBottomWidth:1,
        borderColor:'#ebebeb',
        alignItems:'center',
        flexDirection:'row'
    },
    contentBox:{
        width:'90%',
        marginHorizontal:'auto',
        marginVertical:10
    },
    content:{
        fontSize:20,
        textAlign:'justify',
        color:'#fff'
    },
    downbtn:{
        alignItems:'center',
        flexDirection:'row',
        marginVertical:20,
        backgroundColor:'#1e1e1e',
        width:'43%',
        justifyContent:'center',
        marginLeft:20,
        borderRadius:8,
        height:40
    }
})