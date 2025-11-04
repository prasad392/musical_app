import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
type prog={
    progress:any
}
const Progressbar:React.FC<prog> = ({progress}) => {
  return (
    <View style={styles.container}>
        <View style={styles.progressBackground}>
            <View style={[styles.progressFill,{width: progress === 0? '5%': `${progress}%` }]}></View>
        </View>
        <View>
            <Text style={{color:'#000',fontSize:18}}>{`${progress}%`}</Text>
        </View>
    </View>
  )
}

export default Progressbar

const styles = StyleSheet.create({
    
container: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  progressBackground: {
    width: 350,
    height: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    // overflow: 'hidden',
  },
  
    progressFill: {
    height: '100%',
    backgroundColor: '#F0CF45',
    borderRadius:10,
    width:'10%'
  },
  label: {
    color: '#fff',
    marginTop: 5,
  },

})