import { View, Text, StyleSheet, Platform, StatusBar, Modal,TouchableOpacity,} from 'react-native'
import React from 'react'
import Modalheader from '../../modalheader/modalheader';

type props ={
    visible: boolean;
    onClose: ()=>void;
    mainClose: ()=>void;
}

const Passwordsuccessmodal:React.FC<props> = ({visible,onClose,mainClose}) => {
  return (
    <Modal
    transparent={true}
    animationType='fade'
    visible={visible}
    onRequestClose={onClose}
    style={{margin:0}}
    >
        <View style={styles.overlay} >
            <View style={styles.container}>
                <Text style={{fontSize:24,textAlign:'center',marginVertical:20,width:200,marginLeft:55}}>Ready to finish setup?</Text>
                <Text style={{fontSize:16,fontWeight:300,width:270,marginLeft:30,textAlign:'center'}}>You’ve set a new password. make sure everything looks good before completing the set up.</Text>
                <View style={styles.contBox}>
                    <TouchableOpacity
                    onPress={()=>{
                        onClose()
                        mainClose()
                    }}
                    >
                        <Text style={{color:'blue',fontSize:20}}>Let's go</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:'red',fontSize:20}}>Discard</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default Passwordsuccessmodal

const styles = StyleSheet.create({
    overlay:{
        flex:1,
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        backgroundColor:'#EBEBEB',
        height:'auto',
        width:'75%',
        marginHorizontal:'auto',
        marginVertical:20,
        borderRadius:12
    },
    contBox:{
        flexDirection:'row',
        width:'60%',
        marginHorizontal:'auto',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:20
    }
})