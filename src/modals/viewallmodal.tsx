import { View, Text, Modal, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Viewallcard from '../components/customcards/viewallcard';
import { ScrollView } from 'react-native-gesture-handler';
import { mentorsdata } from '../data/mochdata';
import Modalheader from './modalheader/modalheader';

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
            <Modalheader headerText='Our Mentors' onClose={onClose}/>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={styles.mentors}>
                    {
                        mentorsdata.slice(0,2).map((item)=>(
                            <View key={item.id}>
                                <Viewallcard 
                                name={item.name} 
                                info={item.info} 
                                role={item.role} 
                                desg={item.desg} 
                                img={item.img}  
                                />
                            </View>
                        ))
                    }
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