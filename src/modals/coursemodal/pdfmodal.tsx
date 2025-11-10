import { View, Text, StyleSheet, Platform, StatusBar, Modal } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

type props ={
    visible : boolean;
    onClose:()=>void;
    head: string;
}

const Pdfmodal:React.FC<props> = ({visible,onClose,head}) => {
  return (
    <>
        <Modal
        visible={visible}
        animationType='fade'
        onRequestClose={onClose}
        transparent
        >
            <View style={styles.overlay}>
                
                <View style={styles.container}>
                    <View style={styles.closebox}>
                        <Text style={{color:'#fff',textAlign:'right'}} onPress={onClose}> <Ionicons name='close' size={42}/> </Text>
                        <Text style={{color:'#ffd60a',fontSize:24,marginLeft:10}}>{head}</Text>
                    </View>
                    <ScrollView horizontal={false} style={{ maxHeight: 350, marginBottom:20}} >
                        <View style={styles.pdfbox}>
                            <Text style={{color:'#fff',fontSize:18,textAlign:'justify'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Maxime rerum quisquam illo doloremque vitae sunt, 
                                cupiditate perspiciatis ipsum esse dolorem distinctio vero id, 
                                quis sequi a dolores deleniti dolor ullam. Lorem, ipsum dolor sit 
                                amet consectetur adipisicing elit. Officiis dignissimos fuga cumque 
                                id necessitatibus saepe voluptatum, deleniti explicabo facilis nemo 
                                doloremque impedit similique repellendus quia consectetur vero esse 
                                recusandae odit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Ab quam doloribus atque autem voluptas! Nulla, deleniti inventore. Quaerat, 
                                consectetur. Expedita cum at quod non, corporis numquam quos tempore 
                                doloribus nulla!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Maxime rerum quisquam illo doloremque vitae sunt, 
                                cupiditate perspiciatis ipsum esse dolorem distinctio vero id, 
                                quis sequi a dolores deleniti dolor ullam. Lorem, ipsum dolor sit 
                                amet consectetur adipisicing elit. Officiis dignissimos fuga cumque 
                                id necessitatibus saepe voluptatum, deleniti explicabo facilis nemo 
                                doloremque impedit similique repellendus quia consectetur vero esse 
                                recusandae odit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Ab quam doloribus atque autem voluptas! Nulla, deleniti inventore. Quaerat, 
                                consectetur. Expedita cum at quod non, corporis numquam quos tempore 
                                doloribus nulla!
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    </>
  )
}

export default Pdfmodal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor:'rgba(0, 0, 0, 0.6)',
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        width:'90%',
        height:'auto',
        backgroundColor:'rgba(129, 126, 126, 0.6)',
        marginHorizontal:'auto',
        marginVertical:20,
        borderRadius:20
    },
    closebox:{
        width:'95%',
        marginHorizontal:'auto',
        marginVertical:15,
    },
    pdfbox:{
        width:'90%',
        marginHorizontal:'auto',
    }
})