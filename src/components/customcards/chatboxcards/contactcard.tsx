import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

type contactBox ={
    contactname: string;
    mobile: string;
}

type contactItem = {
    data: contactBox[];
    onpress: (name: string)=>void;
}

const Contactcard:React.FC<contactItem> = ({data,onpress}) => {
  return (
    <>
        {
            data.map((item,index)=>(
                <TouchableOpacity
                key={index}
                onPress={()=>{
                    onpress(`${item.contactname.slice(0,1).toUpperCase()}${item.contactname.slice(1)}`)
                }}
                >
                    <View style={styles.masgCard} >
                    <View style={styles.msgImg}>
                        <View
                            style={styles.image}
                            > 
                            <Text
                            style={{
                                color:'#000',
                                fontSize:28,
                                fontWeight:'600'
                            }}
                            >
                                {item.contactname.slice(0,1).toUpperCase()}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.msdInfo}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between',
                            gap:10,
                        }}>
                            <Text style={{color:'#fff',fontSize:20,fontWeight:600,marginVertical:5,textAlign:'left'}}>
                                {`${item.contactname.slice(0,1).toUpperCase()}${item.contactname.slice(1)}`} 
                            </Text>
                        </View>
                        <Text style={{color:'#fff',fontSize:16}}>{item.mobile} | mobile</Text>
                    </View>
                </View>
                </TouchableOpacity>
            ))
        }
    </>
  )
}

export default Contactcard

const styles = StyleSheet.create({
    masgCard:{
        width:'95%',
        height:'auto',
        backgroundColor:'#2d2d2d',
        flexDirection:'row',
        padding:10,
        borderBottomWidth:1,
        borderColor:'#fff',
        gap:10,
        borderRadius:12,
        marginHorizontal:'auto'
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
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffd60a',
        borderRadius:90
    },
})