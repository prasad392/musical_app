import { View, Text, StyleSheet, Platform, StatusBar, Modal, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';

type props ={
    onClose : ()=>void;
    visible: boolean;
}

const Videomodal:React.FC<props> = ({visible,onClose}) => {
    const videoSource = require('@/assets/course_curri/videoplayback.mp4')
    const player = useVideoPlayer(videoSource,(player)=>{
        player.loop = true;
        player.play()
    })
    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  return (
    <Modal
    transparent
    visible={visible}
    animationType='fade'
    onRequestClose={onClose}
    >
        <View style={styles.overlay}>
            <View style={styles.container}>
                <View style={styles.closebox}>
                    <Text style={{color:'#fff',textAlign:'right'}} onPress={onClose}> <Ionicons name='close' size={42}/> </Text>
                </View>
                <View style={styles.controlsContainer}>
                    <VideoView
                    player={player}
                    style={styles.video}
                    contentFit='contain'
                    />
                    <Button
                        title={isPlaying ? 'Pause' : 'Play'}
                        onPress={() => {
                            if (isPlaying) {
                            player.pause();
                            } else {
                            player.play();
                            }
                        }}
                    />
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default Videomodal
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
        
    video: {
        width: 350,
        height: 200,
    },
    controlsContainer: {
        padding: 10,
    },

})