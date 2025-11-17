import { View, Text, StyleSheet,} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

type props ={
  visible: boolean;
  onClose: ()=>void;
}

const Shareapp:React.FC<props> = ({visible,onClose}) => {
  return (
    <>
        <Modal
        isVisible={visible}
        onSwipeComplete={onClose}
        swipeDirection='down'
        >
          <View style={styles.overlay}>
            <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum ut ex accusantium repudiandae, voluptatibus nemo laborum odio asperiores velit quidem sequi veritatis voluptate laudantium recusandae corrupti consequuntur. Consequatur, est? </Text>
          </View>
        </Modal>
    </>
  )
}

export default Shareapp

const styles = StyleSheet.create({
    overlay:{
      backgroundColor:'red'
    }
})