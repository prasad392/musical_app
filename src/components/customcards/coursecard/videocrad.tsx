import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
type EventItem={
    id:any,
    head: string;
    content : string;
}
type props ={
    data:EventItem[];
    onpress: ()=>void;
}

const Videocrad:React.FC<props> = ({data,onpress}) => {
  return (
    <>
        {
            data.length > 0 ? (
                data.map((item)=>(
                <View style={styles.coursecard} key={item.id}>
                    <View style={styles.cardHead}>
                        <View style={{flexDirection:'row',marginLeft:20,gap:20,alignItems:'center'}}>
                            <View style={{width:40,backgroundColor:'#3e3e3e',alignItems:'center',justifyContent:'center',borderRadius:12,height:40,}}><Ionicons name='book-outline' color={'#ffd60a'} size={28}/></View>
                            <Text style={{color:'#fff',fontSize:24}}>{item.head}</Text>
                        </View>
                    </View>
                    <Text style={styles.content}>{item.content}</Text>
                    <TouchableOpacity style={styles.viewbtn} onPress={onpress}>
                        <Ionicons name='play' color={'#ffd60a'} size={26}/>
                        <Text style={{color:'#ffd60a',fontSize:16}}>Play Video</Text>
                    </TouchableOpacity>
                </View>
            ))
            )
            :
            (
                <Text style={styles.noDataText}>No curriculum</Text>
            )
        }
    </>
  )
}

export default Videocrad

const styles = StyleSheet.create({
    coursecard:{
        marginVertical:20,
        width:'95%',
        backgroundColor:'#2d2d2d',
        marginHorizontal:'auto',
        borderRadius:12,
        height:'auto'
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
    content:{
        color:'#fff',
        fontSize:18,
        // textAlign:'justify',
        width:'93%',
        marginHorizontal:'auto',
        marginLeft:30,
        fontWeight:300,
        marginVertical:15
    },
    viewbtn:{
        backgroundColor:'#1d1d1d',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        marginBottom:20,
        marginLeft:30,
        width:120,
        justifyContent:'center',
        borderRadius:10,
        height:50
    },
    noDataText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 10,
    }
})

