import { View, Text, Modal, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Viewallcard from '../components/customcards/viewallcard';
import { ScrollView } from 'react-native-gesture-handler';
import { mentorsdata } from '../data/mochdata';

type props ={
    visible:boolean;
    onClose:()=>void;
}
const Viewallmodal:React.FC<props> = ({visible,onClose}) => {
  return (
    <Modal
    visible={visible}
    transparent={true}
    animationType='fade'
    onRequestClose={onClose}
    >
        <View style={styles.overlay}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={styles.mentorHeader}>
                    <TouchableOpacity onPress={onClose} style={styles.closebtn}>
                      <Ionicons name='chevron-back-circle-outline' size={42} color={'#fff'}/>
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.mentortxt}>Our Mentors</Text>
                    </View>
                </View>
                <View style={styles.mentors}>
                    <Viewallcard />
                </View>
            </ScrollView>
        </View>
    </Modal>
  )
}

export default Viewallmodal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor: '#1D1D1D',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    mentorHeader:{
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
    mentortxt:{
        fontWeight:600,
        fontSize:24,
        color:'#fff'
    },
    mentors:{

    }
})

{/* <View style={styles.mentors}>
                    {
                        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                           {
                            mentorsdata.map((item)=>(
                                <View key={item.id}>
                                    <Viewallcard title={item.title} content={item.content} img={item.img}/>
                                </View>
                            ))
                           }
                            
                        </ScrollView>
                    }
                </View> */}