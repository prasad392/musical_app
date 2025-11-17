import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

type props ={
    ItemName: string;
}

const SettingItemCards:React.FC<props> = ({ItemName}) => {
    const [isclick,setIsclick] = useState(true)
  return (
    <>
        <View style={styles.cardBox}>
            <Text style={styles.text}> {ItemName} </Text>
            <Switch
            value={isclick}
            onValueChange={()=>setIsclick(!isclick)}
            trackColor={{false:'#000',true:'#000'}}
            thumbColor={isclick?'#ffd60a':'#555'}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            />
        </View>       
    </>
  )
}

export default SettingItemCards

const styles = StyleSheet.create({
    cardBox:{
        backgroundColor:'#2d2d2d',
        marginHorizontal:'auto',
        width:'95%',
        height:80,
        borderRadius:12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginVertical:0,
    },  
    text:{
        color:'#fff',
        fontSize:24,
        fontWeight:300
    }
})