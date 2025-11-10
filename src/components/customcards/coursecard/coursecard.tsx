import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { courseCardData } from '@/src/data/mochdata'

type EventBox ={
    id:any;
    head:string;
    curriculum:string;
    series: string;
}

type props= {
    data:EventBox[];
    onpress:(head:string)=>void;
}

const Coursecard:React.FC<props> = ({data,onpress}) => {
  return (
    <>
        {
            data.map((item)=>(
                <View style={styles.coursecard} key={item.id}>
                    <View style={styles.cardHead}>
                        <View style={{flexDirection:'row',marginLeft:20,gap:20,alignItems:'center'}}>
                            <View style={{width:40,backgroundColor:'#3e3e3e',alignItems:'center',justifyContent:'center',borderRadius:12,height:40,}}><Ionicons name='book-outline' color={'#ffd60a'} size={28}/></View>
                            <Text style={{color:'#fff',fontSize:24}}>{item.head}</Text>
                        </View>
                    </View>
                    <View style={styles.content1}>
                        <View style={{width:40,backgroundColor:'#3e3e3e',alignItems:'center',justifyContent:'center',borderRadius:12,height:40,}}><Ionicons name='menu-outline' color={'#ffd60a'} size={32}/></View>
                        <Text style={{color:'#fff',fontSize:18,fontWeight:200}}>{item.series}</Text>
                    </View>
                    <View style={styles.content1}>
                        <View style={{width:40,backgroundColor:'#3e3e3e',alignItems:'center',justifyContent:'center',borderRadius:12,height:40,}}><Ionicons name='information-outline' color={'#ffd60a'} size={32}/></View>
                        <Text style={{color:'#fff',fontSize:18,fontWeight:200}}>{item.curriculum}</Text>
                    </View>
                    <View style={styles.curriculumbox}>
                        <TouchableOpacity style={styles.curriculumbtn} onPress={()=>onpress(item.head)}>
                            <Text style={{color:'#ffd60a',fontSize:16}}>Check Curriculum</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))
        }
    </>
  )
}

export default Coursecard

const styles = StyleSheet.create({
    coursecard:{
        marginVertical:20,
        width:'95%',
        backgroundColor:'#2d2d2d',
        marginHorizontal:'auto',
        borderRadius:12
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
    content1:{
        flexDirection:'row',
        alignItems:'center',
        gap:30,
        width:'90%',
        marginHorizontal:'auto',
        marginTop:15
    },
    curriculumbox:{
        marginVertical:20,
        width:'90%',
        marginHorizontal:'auto',
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    curriculumbtn:{
        height:40,
        backgroundColor:'#1d1d1d',
        alignItems:'center',
        justifyContent:'center',
        width:150,
        borderRadius:12
    }
    
})