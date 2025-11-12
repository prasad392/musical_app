import { View, Text, StyleSheet, ImageSourcePropType, Image } from 'react-native'
import React from 'react'

type props ={
    img: ImageSourcePropType;
    messangerName: string;
    time: string;
    message: string;
}

const Messagecard:React.FC<props> = ({message,messangerName,img,time}) => {
  return (
    <View style={styles.masgCard}>
      <View style={styles.msgImg}>
        <Image
        source={img}
        style={styles.image}
        />
      </View>
      <View style={styles.msdInfo}>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            gap:10,
        }}>
            <Text style={{color:'#fff',fontSize:20,fontWeight:600,marginVertical:5,textAlign:'left'}}>{messangerName}</Text>
            <Text style={{color:'#fff',fontSize:18,}}>{time}</Text>
        </View>
        <Text style={{color:'#fff',fontSize:16}}>{message}</Text>
      </View>
    </View>
  )
}

export default Messagecard

const styles = StyleSheet.create({
    masgCard:{
        width:'100%',
        height:'auto',
        backgroundColor:'#2d2d2d',
        flexDirection:'row',
        padding:10,
        borderBottomWidth:1,
        borderColor:'#fff',
        gap:10,
        borderRadius:12
    },
    msgImg:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    msdInfo:{
        flex:4
    },
    image:{
        width:60,
        height:60,
        borderRadius:90
    },
})