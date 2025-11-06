import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

type props ={
    img:ImageSourcePropType;
}
const Mentorcard:React.FC<props> = ({img}) => {
  return (
    <View style={styles.mycard}>
      <Image
      source={img}
      style={styles.image}
      />
    </View>
  )
}

export default Mentorcard

const styles = StyleSheet.create({
    mycard:{
        width:150,
        alignItems:'center'
    },
    image:{
        width:120,
        height:120,
        borderRadius:90
    }
})