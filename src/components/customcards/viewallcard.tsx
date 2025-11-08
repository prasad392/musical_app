import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

type props ={
    name:any;
    desg:any;
    img:ImageSourcePropType;
    role:any;
    info:any
}
const Viewallcard:React.FC<props> = ({name,desg,img,role,info}) => {
  return (
    <View style={styles.mycard}>
        <View style={styles.mentorimgdes}>
            <Image source={img} style={styles.image}/>
            <View style={styles.desc}>
                <Text style={styles.nametxt}>{name}</Text>
                <Text style={styles.desctxt}>{desg} <Ionicons name='stop' color={'#ffd60a'}/> {role}</Text>
            </View>
        </View>
        <Text style={{color:'#ffd60a',marginVertical:10,marginLeft:35}}>About me</Text>
        <Text style={styles.info}>{info}</Text>
    </View>
  )
}

export default Viewallcard

const styles = StyleSheet.create({
    mycard:{
        width:'95%',
        marginHorizontal:'auto',
        backgroundColor:'#3e3e3e',
        height:250,
        borderRadius:20,
        marginBottom:20
    },
    image:{
        width:75,
        height:75,
        borderRadius:90,
    },
    mentorimgdes:{
        width:'98%',
        marginHorizontal:'auto',
        marginTop:20,
        height:90,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    desc:{
        flexDirection:'column',
        gap:10
    },
    nametxt:{
        color:'#fff',
        fontSize:20,
        fontWeight:600
    },
    desctxt:{
        color:'#fff',
        fontSize:18
    },
    info:{
        color:'#fff',
        width:'83%',
        marginHorizontal:'auto',
        fontSize:20,
        letterSpacing:1
    }

})