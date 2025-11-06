import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type otptype ={
    visible:boolean;
    otp:string;
    onClose:()=>void;
}
const OTPSuccessModal:React.FC<otptype> = ({ visible, onClose, otp }) => {
    
    
    
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          {/* Success Icon */}
          <View style={styles.iconWrapper}>
            <Ionicons name="mail" size={80} color="#ffd60a" />
          </View>

          {/* Success Text */}
          <Text style={styles.title}>Here is the OTP</Text>
          <Text style={styles.message}>
            {otp}
          </Text>

          {/* Continue Button */}
          <TouchableOpacity style={styles.continueBtn} onPress={onClose}>
            <Text style={styles.continueText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default OTPSuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#212529',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  iconWrapper: {
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  continueBtn: {
    backgroundColor: '#ffd60a',
    width: '40%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
