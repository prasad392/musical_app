import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type props={
    onClose:()=>void;
    headerText:string;
}
const Modalheader:React.FC<props> = ({onClose,headerText}) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closebtn}>
            <Ionicons name='chevron-back-circle-outline' size={42} color={'#fff'}/>
        </TouchableOpacity>
        <View>
            <Text style={styles.headertxt}>{headerText}</Text>
        </View>
    </View>
  )
}

export default Modalheader

const styles = StyleSheet.create({
    header:{
        marginVertical:10,
        backgroundColor:'#2D2D2D',
        height:85,
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row',
        gap:50,
        width:'98%',
        marginHorizontal:'auto',
        borderBottomEndRadius:12,
        borderBottomStartRadius:12
    },
    closebtn:{
        marginLeft:30
    },
    headertxt:{
        fontWeight:600,
        fontSize:24,
        color:'#fff'
    }
})