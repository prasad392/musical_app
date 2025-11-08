import { View, Text, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { EventCardData } from '@/src/data/mochdata';

type EventBox ={
    id:any;
    head:string;
    bgimg:ImageSourcePropType;
    timing1:string;
    timig2:string;
}
type EventItem ={
    data:EventBox[];
    onpress:()=>void;
}
const Eventcard:React.FC<EventItem> = ({data,onpress}) => {
    return(
        <>
            {
                data.map((item)=>(
                    <View style={styles.eventcard} key={item.id}>
                        <ImageBackground
                        source={item.bgimg}
                        style={styles.mainimg}
                        resizeMode="cover"
                        />
                        <Text style={{fontSize:24,marginLeft:20,fontWeight:600,marginVertical:10,color:'#fff'}}> {item.head} </Text>
                        <View style={styles.timbox}>
                            <Text><Ionicons name="calendar-outline" size={32} color="#ffd60a" /></Text>
                            <View>
                                <Text style={styles.times}>{item.timing1}</Text>
                                <Text style={styles.times}>{item.timig2}</Text>
                            </View>
                            <Text style={styles.times}><Ionicons name="location-outline" size={32} color="#ffd60a" />Online</Text>
                        </View>
                        <View style={styles.registerbtn}>
                            <TouchableOpacity style={styles.register} onPress={onpress}>
                                <Text style={{color:'#ffd60a',fontSize:20}}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            }
        </>
    )
}

export default Eventcard

const styles = StyleSheet.create({
    eventcard:{
        backgroundColor:'#3e3e3e',
        width:'95%',
        marginHorizontal:'auto',
        borderRadius:12,
        marginBottom:20,
    },
    mainimg:{
        height: 200,
        marginHorizontal: 'auto',
        borderRadius: 12,
        overflow: 'hidden',
        marginVertical:0,
        width: '100%',
    },
    timbox:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        width:'90%',
        marginHorizontal:'auto',
        marginVertical:15
    },
    times:{
        fontSize:20,
        color:'#fff',
        textAlign:'center'
    },
    registerbtn:{
        height:60,
        width:'95%',
        marginHorizontal:'auto',
        alignItems:'flex-end',
        justifyContent:'flex-start'
    },
    register:{
        backgroundColor:'#1d1d1d',
        width:120,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12
    }
})