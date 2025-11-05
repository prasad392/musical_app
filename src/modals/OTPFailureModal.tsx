import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type OTPFailureProps = {
  visible: boolean;
  onClose: () => void;
};

const OTPFailureModal: React.FC<OTPFailureProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          {/* Error Icon */}
          <View style={styles.iconWrapper}>
            <Ionicons name="alert-circle" size={80} color="#e63946" />
          </View>

          {/* Failure Text */}
          <Text style={styles.title}>Verification Failed</Text>
          <Text style={styles.message}>
            The OTP you entered is incorrect. Please try again.
          </Text>

          {/* Try Again Button */}
          <TouchableOpacity style={styles.tryAgainBtn} onPress={onClose}>
            <Text style={styles.tryAgainText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default OTPFailureModal;

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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  tryAgainBtn: {
    backgroundColor: '#e63946',
    width: '80%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});