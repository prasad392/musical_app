import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type props ={
    title:string;
    content:string;
    icon:any;
}
const Categorycard:React.FC<props> = ({title,content,icon}) => {
  return (
    <View style={styles.mycard}>
      <Text style={{marginLeft:20,marginTop:20}}><Ionicons name={icon} color={'#ffd60a'} size={40}/></Text>
      <Text style={styles.ebooktxt}>{title}</Text>
      <Text style={styles.classtxt}>{content}</Text>
      <Text style={{marginVertical:10,textAlign:'right',marginRight:10}}><Ionicons name='chevron-forward-circle-outline' size={36} color={'#fff'}/></Text>
    </View>
  )
}

export default Categorycard

const styles = StyleSheet.create({
    mycard:{
        width:150,
        backgroundColor:'#323232',
        height:'auto',
        borderRadius:12,
        marginRight:20
    },
    ebooktxt:{
        color:'#FFF',
        fontSize:20,
        marginVertical:10,
        marginLeft:20
    },
    classtxt:{
        marginLeft:20,
        color:"#fff",
        fontSize:16
    }

})