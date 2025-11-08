import { View, Text, Modal, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import Modalheader from '../modalheader/modalheader';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import Registerschema from '@/src/registrationschema/registerschema';


type Props = {
  visible: boolean;
  onClose: () => void;
};

const Registermodal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Modalheader headerText="Registration" onClose={onClose} />
        <Text style={styles.formhead}>Fill out this form to complete the event registration.</Text>

        <Formik
          initialValues={{ fullname: '', phone: '', email: '', location: '' }}
          validationSchema={Registerschema}
          onSubmit={(values) => {
            console.log('Form Submitted:', values);
            onClose();
          }}
        >
          {/* {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.registerBox}>
            
              <View style={styles.inputbox}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  value={values.fullname}
                  placeholder="Enter your name"
                  placeholderTextColor="#aaa"
                />
                {touched.fullname && errors.fullname && (
                  <Text style={styles.errorText}>{errors.fullname}</Text>
                )}
              </View>

              <View style={styles.inputbox}>
                <Text style={styles.label}>Phone</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  placeholder="Enter your phone"
                  placeholderTextColor="#aaa"
                />
                {touched.phone && errors.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
              </View>

              <View style={styles.inputbox}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Enter your email"
                  placeholderTextColor="#aaa"
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.inputbox}>
                <Text style={styles.label}>Location</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('location')}
                  onBlur={handleBlur('location')}
                  value={values.location}
                  placeholder="Enter your location"
                  placeholderTextColor="#aaa"
                />
                {touched.location && errors.location && (
                  <Text style={styles.errorText}>{errors.location}</Text>
                )}
              </View>

              <TouchableOpacity style={styles.submitbtn} onPress={()=>handleSubmit()}>
                <Text style={styles.submittxt}>Submit</Text>
              </TouchableOpacity>
            </View>
          )} */}
            {({values,handleChange,handleSubmit,setFieldValue,handleBlur,touched,errors})=>(
                <View style={styles.registerBox}>  

                    <View style={styles.inputbox}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={handleChange('fullname')}
                        onBlur={handleBlur('fullname')}
                        value={values.fullname}
                        placeholder="Enter your name"
                        placeholderTextColor="#aaa"
                        />
                        {touched.fullname && errors.fullname && (
                            <Text style={styles.errorText}>{errors.fullname}</Text>
                        )}
                    </View>

                    <View style={styles.inputbox}>
                        <Text style={styles.label}>Phone</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                        />
                        {touched.phone && errors.phone && (
                            <Text style={styles.errorText}>{errors.phone}</Text>
                        )}
                    </View>
                    
                    <View style={styles.inputbox}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="Enter your email"
                        placeholderTextColor="#aaa"
                        />
                        {touched.email && errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                    </View>
                    
                    <View style={styles.inputbox}>
                        <Text style={styles.label}>Location</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={handleChange('location')}
                        onBlur={handleBlur('location')}
                        value={values.location}
                        placeholder="Enter your location"
                        placeholderTextColor="#aaa"
                        />
                        {touched.location && errors.location && (
                        <Text style={styles.errorText}>{errors.location}</Text>
                        )}
                    </View>
                    
                    <TouchableOpacity style={styles.submitbtn} onPress={()=>handleSubmit()}>
                        <Text style={styles.submittxt}>Submit</Text>
                    </TouchableOpacity>

                </View>
            )}
        </Formik>
      </View>
    </Modal>
  );
};

export default Registermodal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  formhead: {
    fontSize: 24,
    color: '#fff',
    width: '80%',
    marginLeft: 20,
    marginVertical: 20,
  },
  registerBox: {
    width: '95%',
    marginHorizontal: 'auto',
  },
  inputbox: {
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    fontSize: 22,
    marginLeft: 25,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
    width: '90%',
    marginHorizontal: 'auto',
    height: 60,
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginLeft: 25,
    marginTop: 5,
  },
  submitbtn: {
    backgroundColor: '#2d2d2d',
    borderRadius: 12,
    width: '90%',
    marginHorizontal: 'auto',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  submittxt: {
    color: '#ffd60a',
    fontSize: 24,
  },
});
