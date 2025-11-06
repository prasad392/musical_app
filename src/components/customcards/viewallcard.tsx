import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

type props ={
    title:string;
    content:string;
    img:ImageSourcePropType;
}
const Viewallcard:React.FC<props> = ({title,content,img}) => {
  return (
    <View style={styles.mycard}>
        <Text style={{color:'#fff'}}>mvkdn</Text>
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
        // flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'space-evenly',
        marginBottom:20
    },
    image:{
        width:60,
        height:60,
        borderRadius:20,
    },

})