import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type props ={
    dateis: string;
    nameis: string;
    course: string;
    comment: string;
    rating: string,
    img: ImageSourcePropType
}

const FeedbackCard:React.FC<props> = ({dateis,nameis,course,comment,rating,img}) => {
  return (
    <View style={styles.feedCard}>
        <View style={styles.imgInfoBox}>
            <View style={styles.imgBox}>
                <Image
                source={img}
                style={styles.image}
                />
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.datetxt}><Ionicons name='stop' color={'#ffd60a'}/> {dateis} </Text>
                <Text style={styles.nametxt}> {nameis} </Text>
                <Text style={[styles.datetxt,{fontSize:16}]}> {course} </Text>
                <Text style={[styles.datetxt,{marginVertical:10,fontSize:20}]}> {comment} </Text>
            </View>
        </View>
        <View style={styles.rateShareBox}>
            <View style={styles.rate}>
                <Text 
                style={{color:'#fff',fontSize:20,fontWeight:600}}
                >
                    Overall
                </Text>
                <Text 
                style={{color:'#fff',fontSize:20,fontWeight:600,marginVertical:10}}
                >
                    <Ionicons name='star' color={'#ffd60a'} size={28}
                    /> {rating}
                </Text>
            </View>
            <View style={styles.share}>
                <TouchableOpacity style={styles.sharebtn}>
                    <Text style={{color:'#ffd60a',fontSize:20}}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default FeedbackCard

const styles = StyleSheet.create({
    feedCard:{
        backgroundColor:'#2d2d2d',
        width:'95%',
        height:'auto',
        alignSelf:'center',
        marginVertical:20,
        borderRadius:12,
        flexDirection:'column'
    },
    imgInfoBox:{
        flexDirection:'row'
    },
    imgBox:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    infoBox:{
        flex:3,
        paddingVertical:10
    },
    image:{
        width:80,
        height:80,
        borderRadius:90
    },
    datetxt:{
        color:'#fff',
        fontWeight:300,
    },
    nametxt:{
        color:'#fff',
        marginVertical:10,
        fontSize:20
    },
    rateShareBox:{
        backgroundColor:'#000',
        width:'98%',
        marginHorizontal:'auto',
        height:90,
        borderBottomWidth:1,
        borderColor:'#fff',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12,
        flexDirection:'row'
    },
    rate:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    share:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderLeftWidth:1,
        borderColor:'#fff'
    },
    sharebtn:{
        backgroundColor:'#2d2d2d',
        width:70,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12
    }
})